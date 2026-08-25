import { Inter, Lusitana } from 'next/font/google';

/*NOTE This file is for optimizing fonts for page optimization. 

The "next/font" module has built-in self-hosting for any font file. You import the fonts you want, call it as a 
function with the appropriate options, and next/font will generate a highly optimized, separate CSS file containing
of the font rules and automatically injects it into the webpage's <head>. 

It will also create an object (in this case, inter or lusitana) with properties that you can use to 
access/point to the CSS rule itself.

One of the properties is called "className". This will be a randomly generated string that includes the font name
to use as a CSS class name to act as a pointer.

You can also set up a variable option so that you can use it like a Tailwind variable. I will explain how to do this later. */

export const inter = Inter({
  subsets: ['latin']
});
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ["400", "700"]
});