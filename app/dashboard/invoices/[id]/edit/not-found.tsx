import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

/*NOTE "not-found.tsx" works like an "error.tsx" file, but specifically for 404 errors.
  (See "app/dashboard/invoices/error.tsx" for notes on "error.tsx". It works by throwing
  a special internal error called "NEXT_NOT_FOUND" (see "app/lib.actions.ts" for notes on
  how this works with "redirect()". 404 errors will be caught by a "not-found" before
  "error.tsx" will catch them. 
  
  Your route segments will be wrapped by your error boundary
  and not-found boundary in the React component tree like this:

  <Layout>
    <ErrorBoundary fallback={<Error />}>       {NOTE: Catches normal crashes }
      <NotFoundBoundary fallback={<NotFound />}> {NOTE: Catches NEXT_NOT_FOUND }
        <Page />
      </NotFoundBoundary>
    </ErrorBoundary>
  </Layout>
  */

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <Link
        href="/dashboard/invoices"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}