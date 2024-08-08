import React from 'react';
import '@/app/ui/global.css';  // Import global styles
import { inter } from '@/app/ui/fonts';// Import fonts
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
          {children}
    
        {/* <div className='bg-black w-full text-white' >FOOTER</div> */}
      </body>
    </html>
  );
}
