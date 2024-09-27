import ButtonGradient from "@/assets/svg/ButtonGradient";
import type { Metadata } from "next";
import "./globals.css";

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
        {children}
        <ButtonGradient />
      </body>
    </html>
  );
}
