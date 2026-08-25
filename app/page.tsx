import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import styles from '@/app/ui/home.module.css'
/*NOTE import styles from '@/app/ui/home.module.css' is for using CSS Modules, which allow you to scope css to a component.
They are using Tailwind for the tutorial but showed how to do this. After importing that css file you can access it like,
<div className={styles.shape} /> (shape being the name of the css class). This css class has the same rules that the 
<div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"/>
line has.*/

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div
            className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
          />
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          {/* NOTE The <Image> Next.js component is an extension of the html <img> tag. It comes with automatic image optimization. These include:
              - Preventing layout shift when images are loaded.
              - Resizing images to avoid shipping large images to devices with smaller viewport.
              - Lazy loading images by default (images load as they enter the viewport).
              - Serving images in modern formats, like WebP and AVIF, and the browser supports it.
              
              The width/height attributes do not dictate the size the image will be rendered in.
              They should be the dimensions of the actual image itself. <Image> uses these numbers to calculate
              the aspect ratio for the image. It uses this to tell the browser to reserve an area of that shape 
              to prevent cumulate layout shift (when the layout of the page shifts as more elements load in,
              such as a block of text shifting when an image loads).*/}
          <Image src="/hero-desktop.png" width={1000} height={760} className='hidden md:block' alt='Screenshots of the dashboard project showing desktop version' />
          <Image src="/hero-mobile.png" width={560} height={620} className='block md:hidden' alt='Screenshots of the dashboard project showing mobile version' />
        </div>
      </div>
    </main>
  );
}
