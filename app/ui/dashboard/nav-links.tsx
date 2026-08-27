'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          /*NOTE <Link> is a Next.js component that is used to optimize links between your pages. One of the features of
          Next.js is "code splitting", which means that Next.js splits your app by route segments, which isolates each of
          your pages - If a specific page throws an error the rest of the app will still work. This is also less code for
          the browser to parse at a time, making apps faster. A traditional SPA loads all of the app's code on the initial
          page load.
          
          One nice feature about <Link> is that when a <Link> component appears in the browser's viewport Next.js will
          automatically prefetch the code for the route in that linked route in the background. By the time the user clicks
          the link the code for the destination page will already be loaded in the background, which makes the page 
          transition really fast.*/

          /* NOTE clsx is a library that can be used to conditionally style an element based on state or other condition.
          In this case the condition being if pathname === link.href, it will style the element with 'bg-sky-100 text-blue-600'*/
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3", { 'bg-sky-100 text-blue-600': pathname === link.href })}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
