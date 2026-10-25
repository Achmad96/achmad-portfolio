"use client";
import { createContext, useContext, useRef, ReactNode } from "react";

interface TerminalContextType {
  scrollToBottom: () => void;
  registerScrollElement: (element: HTMLElement) => void;
}

const TerminalContext = createContext<TerminalContextType | null>(null);

export function TerminalProvider({ children }: { children: ReactNode }) {
  const scrollElementRef = useRef<HTMLElement | null>(null);

  const registerScrollElement = (element: HTMLElement) => {
    scrollElementRef.current = element;
  };

  const scrollToBottom = () => {
    if (scrollElementRef.current) {
      scrollElementRef.current.scrollTop = scrollElementRef.current.scrollHeight;
    }
  };

  return <TerminalContext.Provider value={{ scrollToBottom, registerScrollElement }}>{children}</TerminalContext.Provider>;
}

export function useTerminal() {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error("useTerminal must be used within a TerminalProvider");
  }
  return context;
}
