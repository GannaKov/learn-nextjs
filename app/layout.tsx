
import '@/app/ui/global.css';  // Import global styles
import { inter } from '@/app/ui/fonts';// Import fonts
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
