import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BH | Front-End Developer",
  description: "Breck is a Front-End Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div className="absolute top-[-2rem] -z-10 right-[-3rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#94626352]"></div>
        <div className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[31.25] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-35rem] lg:left-[-5rem] xl:left-[-5rem] 2xl:left-[-5rem] dark:bg-[#67639451]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
