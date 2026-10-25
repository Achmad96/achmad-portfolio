"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Maximize2, Minimize2, Terminal as TerminalIcon } from "lucide-react";
import { commands, ErrorCMDNotFound, welcome } from "@/configs/TerminalCommands";
import { TerminalInput } from "@/components/TerminalInput";
import TerminalOutput from "@/components/TerminalOutput";
import { Command } from "@/types";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [history, setHistory] = useState<Command[]>([welcome]);
  const [currentInput, setCurrentInput] = useState("");
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  const typeText = (text: (string | React.ReactElement)[]) => {
    const newCommand: Command = { command: "", output: [] };
    setHistory((prev) => [...prev, newCommand]);

    for (let i = 0; i < text.length; i++) {
      setHistory((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          command: "",
          output: [...text.slice(0, i + 1)],
        };
        return updated;
      });
    }
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (trimmedCmd === "") return;

    const commandEntry: Command = {
      command: `achmad:$ ${cmd}`,
      output: [],
    };
    setHistory((prev) => [...prev, commandEntry]);

    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    }

    if (trimmedCmd === "exit" || trimmedCmd === "quit") {
      onClose();
      return;
    }

    if (commands[trimmedCmd as keyof typeof commands]) {
      const command = commands[trimmedCmd as keyof typeof commands];
      typeText(command.output);
    } else {
      setHistory((prev) => [...prev, ErrorCMDNotFound(trimmedCmd)]);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      executeCommand(currentInput);
      setCurrentInput("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`relative flex flex-col rounded-2xl border border-neutral-800 bg-neutral-950/95 shadow-2xl backdrop-blur-xl transition-all duration-300 overflow-hidden ${
          isMaximized
            ? "w-full h-full"
            : "w-full max-w-4xl h-[80vh] sm:h-[70vh]"
        }`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3 bg-neutral-900/80 select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="h-3 w-3 rounded-full bg-red-500 hover:opacity-80 transition-opacity"
              title="Close"
            />
            <button
              onClick={() => setHistory([])}
              className="h-3 w-3 rounded-full bg-yellow-500 hover:opacity-80 transition-opacity"
              title="Clear"
            />
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="h-3 w-3 rounded-full bg-green-500 hover:opacity-80 transition-opacity"
              title={isMaximized ? "Restore" : "Maximize"}
            />
            <span className="ml-3 font-mono text-xs text-neutral-400 flex items-center gap-1.5">
              <TerminalIcon className="h-3.5 w-3.5 text-teal-400" />
              <span>achmad@portfolio:~ (bash)</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="hidden sm:inline">Type &apos;help&apos; for commands</span>
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 hover:text-white rounded"
            >
              {isMaximized ? (
                <Minimize2 className="h-3.5 w-3.5" />
              ) : (
                <Maximize2 className="h-3.5 w-3.5" />
              )}
            </button>
            <button onClick={onClose} className="p-1 hover:text-white rounded">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          className="flex-1 overflow-y-auto p-4 sm:p-6 font-mono text-xs sm:text-sm text-neutral-200 cursor-text terminal-scroll"
        >
          <TerminalOutput history={history} />
          <div className="mt-2">
            <TerminalInput
              ref={inputRef}
              value={currentInput}
              onChange={(e: any) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

