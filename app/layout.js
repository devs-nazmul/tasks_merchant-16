import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {

};

export const metadata = {
  title: "Merchant 16",
  description: "Merchant Ecommerce",
  keywords: ["Merchant"],
  authors: {name: "Nazmul Hossain", url: "https://dev.nazmul.co/" },
  metadataBase: new URL('https://Merchant.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US'},
  },
  openGraph: {
    images: '/og_image.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
