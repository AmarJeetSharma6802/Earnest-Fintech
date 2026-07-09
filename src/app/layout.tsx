
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {ModalProvider} from "../app/ModalProvider"
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "CancerCare - Cancer Treatment Starts with the Right Expert",
  description: "Get expert cancer treatment with free first consultation. Comprehensive care for all major types of cancer by top oncologists in India.",
  keywords: "cancer treatment, oncologist, cancer care, chemotherapy, radiation therapy, cancer specialist, free consultation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ModalProvider>
        <Toaster position="top-right" />
        {children}
        </ModalProvider>
      </body>
    </html>
  );
}
