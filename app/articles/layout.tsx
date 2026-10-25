import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 flex flex-col transition-colors">
      <Navbar />
      <div className="flex-1 pt-24 pb-16">
        {children}
      </div>
      <Footer />
    </div>
  );
}

