import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoApplys",
  description: "AutoApplys uses AI to apply to 100s of jobs monthly for you. Focus on interviews while we handle the applications. Start with AutoApplys and automate your job search!",
  keywords:[
    "AutoApplys", "AI-powered automation", "Automatically applies", 
    "Apply to 100s of jobs monthly", "Tailored to your preferences", 
    "Maximize your job opportunities", "Handle the applications",
    "Preparing for interviews", "Automate your job search", 
    "Achieve success effortlessly", "Job hunting", "AI-powered",
    "Job applications"
  
  ]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-200`}>{children}</body>
    </html>
  );
}
