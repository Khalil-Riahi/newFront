import { Outfit } from 'next/font/google';
// import './globals.css';

import { SidebarProvider } from '@/app/context/SidebarContext';
import { ThemeProvider } from '@/app/context/ThemeContext';

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>
        {/* <div id="modal"></div> */}
        <ThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
