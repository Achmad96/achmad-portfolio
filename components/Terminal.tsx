"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { IoTerminal } from "react-icons/io5";
import { useTerminal } from "@/contexts/TerminalContext";

export default function Terminal({ children }: { children: React.ReactNode }) {
  const terminalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { registerScrollElement } = useTerminal();

  useEffect(() => {
    if (contentRef.current) {
      registerScrollElement(contentRef.current);
    }
  }, [registerScrollElement]);

  return (
    <section className="terminal-font absolute flex h-dvh w-full max-w-full items-center justify-center overflow-y-hidden">
      <Card ref={terminalRef} className="terminal-scroll bg-background/50 absolute h-[70%] w-[60%] cursor-text rounded-md border-none p-0 backdrop-blur-md">
        <CardHeader
          className="flex cursor-move items-center justify-between border-b border-b-gray-400 px-5 py-5 text-white"
          onMouseDown={(event) => {
            const card = terminalRef.current;
            if (!card) return;
            const startX = event.clientX;
            const startY = event.clientY;
            const rect = card.getBoundingClientRect();
            const offsetX = startX - rect.left;
            const offsetY = startY - rect.top;

            function onMouseMove(ev: MouseEvent) {
              if (!card) return;
              card.style.left = `${ev.clientX - offsetX}px`;
              card.style.top = `${ev.clientY - offsetY}px`;
            }
            function onMouseUp() {
              window.removeEventListener("mousemove", onMouseMove);
              window.removeEventListener("mouseup", onMouseUp);
            }
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
          }}
        >
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div>achmad96@master</div>
          <Link target="_blank" rel="noopener noreferrer" href={"https://github.com/Achmad96"}>
            <IoTerminal className="h-6 w-6 max-md:h-5 max-md:w-5" />
          </Link>
        </CardHeader>
        <CardContent ref={contentRef} className="h-[80%] overflow-y-auto">
          {children}
        </CardContent>
      </Card>
    </section>
  );
}
