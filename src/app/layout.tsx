import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Specify the weights you need
  subsets: ['latin'], // Specify the subsets you need
  display: 'swap', // Recommended for font loading
  variable: '--font-poppins', // Optional: Define a CSS variable
});

export const metadata: Metadata = {
  title: "Luxury Wedding by Iqbal",
  description: "A beautiful wedding website for Karel and Carlo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
