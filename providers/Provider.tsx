"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import ProgressBarProvider from "@/providers/ProgressBarProvider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ProgressBarProvider />
      {children}
    </ThemeProvider>
  );
};

export default Provider;
