// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }

// app/layout.js
// import { ReactNode } from "react"; // Import ReactNode type
// import "./globals.css";
// import { ThemeProvider } from "next-themes";

// export const metadata = {
//   title: "Nextly - Free Nextjs & TailwindCSS Landing Page Template",
//   description: "Nextly is a free landing page template built with next.js & Tailwind CSS",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// interface RootLayoutProps {
//   children: ReactNode; // Explicitly define the type for 'children'
// }

// export default function RootLayout({ children }: RootLayoutProps) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Google Fonts */}
//         <link
//           href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body>
//         <ThemeProvider attribute="class">
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

// app/layout.js
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Footer from "./components/footer";


export const metadata = {
  title: "Your App Title",
  description: "Your App Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Include meta tags, fonts, etc. */}
      </head>
      <body>
      <div id="modal"></div>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
