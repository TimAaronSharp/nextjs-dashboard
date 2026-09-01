'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string()
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status')
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})`;

  } catch (error) {
    console.error(error);
    return {
      message: 'Database Error: Failed to Create Invoice.'
    };
  }
  /*NOTE redirect() works by throwing an error behind the scenes (specifically a "NEXT_REDIRECT" error).
  The reason for this is generally when you want to redirect a user you want to stop whatever else the
  server is doing. You don't want to keep running the rest of the function, rendering components, etc.,
  if the user isn't even going to see that page anymore.
  
  In JavaScript throwing an error instantly halts execution and breaks out of a function. Next.js throws
  this special redirect error, deliberately stopping your code, and then Next.js catches that error
  behind the scenes to send the user to the new URL.
  
  If redirect() is within the try, when it is run the redirect error will be caught by the catch, which
  will block Next.js from intercepting the "NEXT_REDIRECT" error, preventing the user from being redirected
  and likely will just send your generic error message to the user instead.*/
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  // throw new Error('Failed to Delete Invoice');
  await sql`DELETE FROM invoices WHERE id = ${id}`;
  revalidatePath('/dashboard/invoices');
}

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status')
  });

  const amountInCents = amount * 100;

  try {
    await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}`;

  } catch (error) {
    console.error(error);
    return {
      message: 'Database Error: Failed to Update Invoice.'
    };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');

}