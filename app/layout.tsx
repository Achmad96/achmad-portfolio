import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Open_Sans, Fira_Code } from "next/font/google";
import Provider from "@/providers/Provider";
import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Achmad Raihan | Machine Learning Engineer",
  description:
    "Portfolio of Achmad Raihan — Aspiring Machine Learning Engineer & Information Systems Student. Showcasing deep learning architectures, computer vision pipelines, and intelligent data systems.",
  keywords: [
    "Achmad Raihan",
    "Portfolio",
    "Machine Learning Engineer",
    "Aspiring Machine Learning Engineer",
    "Deep Learning",
    "Computer Vision",
    "Information Systems",
    "PyTorch",
    "Nvidia NeMo",
    "Scikit-Learn",
    "OpenCV",
    "Python",
    "TypeScript",
  ],
  authors: [{ name: "Achmad Raihan" }],
  openGraph: {
    title: "Achmad Raihan | Machine Learning Engineer",
    description: "Explore machine learning models, deep learning architectures, and computer vision systems by Achmad Raihan.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth ${montserrat.variable} ${openSans.variable} ${firaCode.variable}`}
    >
      <body className="min-h-screen font-sans bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 antialiased selection:bg-teal-500/30 selection:text-teal-800 dark:selection:text-teal-200">
        <Provider>
          {children}
        </Provider>
        <Toaster richColors closeButton position="top-right" />
      </body>
    </html>
  );
}
