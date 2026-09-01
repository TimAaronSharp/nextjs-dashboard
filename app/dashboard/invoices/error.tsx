'use client';

import { useEffect } from 'react';
/*NOTE "error.tsx" files define the "UI Boundary", or fallback UI, that you want the user
to see when an error that is not handled elsewhere occurs (such as a specific component's
try/catch).

It also creates an "Error Boundary" component which wraps around the route segment, acting 
as a sort of force field around the error that contains the blast radius of the error to 
the specific route segment the "error.tsx" file is located in (in this case the "invoices"
route segment).

The UI Boundary will replace the normal invoices route segment UI with what is in the 
"error.tsx" file when an error is thrown.

Your route segments will be wrapped by your error boundary in the React component tree like 
this:

<Layout>
  <ErrorBoundary fallback={<Error />}>
    <Page />
  </ErrorBoundary>
</Layout>
*/
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}