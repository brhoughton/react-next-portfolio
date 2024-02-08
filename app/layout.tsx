import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";

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
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
