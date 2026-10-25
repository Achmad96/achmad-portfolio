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
  title: "Achmad Raihan | Software & AI Engineer",
  description:
    "Portfolio of Achmad Raihan — Software Engineer & Information Systems Student at UIN Sunan Ampel (UINSA). Showcasing computer vision, machine learning, and full-stack web platforms.",
  keywords: [
    "Achmad Raihan",
    "Portfolio",
    "Software Engineer",
    "AI Engineer",
    "Computer Vision",
    "Information Systems",
    "UIN Sunan Ampel",
    "UINSA",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Achmad Raihan" }],
  openGraph: {
    title: "Achmad Raihan | Software & AI Engineer",
    description: "Explore engineering work, AI models, and software projects by Achmad Raihan.",
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
