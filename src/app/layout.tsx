import ButtonGradient from "@/assets/svg/ButtonGradient";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/pages/Header";
import Footer from "@/components/pages/Footer";

export const metadata: Metadata = {
  title: "D2YCODER",
  description: "D2Y",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="min-h-screen pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          {children}
        </div>
        <Footer />
        <ButtonGradient />
      </body>
    </html>
  );
}
