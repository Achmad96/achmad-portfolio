"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Maximize2, Minimize2, Terminal as TerminalIcon, Sparkles } from "lucide-react";
import { commands, ErrorCMDNotFound, welcome } from "@/configs/TerminalCommands";
import { TerminalInput } from "@/components/TerminalInput";
import TerminalOutput from "@/components/TerminalOutput";
import { Command } from "@/types";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AVAILABLE_COMMANDS = [
  "help",
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "articles",
  "contact",
  "theme",
  "clear",
  "exit",
];

export default function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [history, setHistory] = useState<Command[]>([welcome]);
  const [currentInput, setCurrentInput] = useState("");
  const [isMaximized, setIsMaximized] = useState(false);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (trimmedCmd === "") return;

    // Track command history
    setCmdHistory((prev) => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    const commandEntry: Command = {
      command: `achmad:❯ ${cmd}`,
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
      setHistory((prev) => [
        ...prev,
        {
          command: "",
          output: command.output,
        },
      ]);
    } else {
      setHistory((prev) => [...prev, ErrorCMDNotFound(trimmedCmd)]);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      executeCommand(currentInput);
      setCurrentInput("");
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIndex =
          historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setCurrentInput(cmdHistory[nextIndex] || "");
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= cmdHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput("");
        } else {
          setHistoryIndex(nextIndex);
          setCurrentInput(cmdHistory[nextIndex] || "");
        }
      }
    } else if (event.key === "Tab") {
      event.preventDefault();
      const partial = currentInput.trim().toLowerCase();
      if (partial) {
        const match = AVAILABLE_COMMANDS.find((c) => c.startsWith(partial));
        if (match) {
          setCurrentInput(match);
        }
      }
    }
  };

  const handleQuickCommand = (cmd: string) => {
    executeCommand(cmd);
    inputRef.current?.focus();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`relative flex flex-col rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 overflow-hidden font-mono ${
          isMaximized
            ? "w-full h-full"
            : "w-full max-w-4xl h-[85vh] sm:h-[75vh]"
        }`}
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 px-4 py-3 bg-neutral-100/90 dark:bg-neutral-900/90 select-none">
          {/* Traffic Lights */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="h-3 w-3 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors"
              title="Close (Esc)"
              aria-label="Close Terminal"
            />
            <button
              onClick={() => setHistory([])}
              className="h-3 w-3 rounded-full bg-amber-400 hover:bg-amber-500 transition-colors"
              title="Clear Buffer"
              aria-label="Clear Terminal"
            />
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="h-3 w-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors"
              title={isMaximized ? "Restore Window" : "Maximize Window"}
              aria-label="Maximize Terminal"
            />
            <span className="ml-3 font-mono text-xs font-semibold text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
              <TerminalIcon className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
              <span>AR. Terminal &bull; achmad@uinsa:~ (zsh)</span>
            </span>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
            <span className="hidden sm:inline text-[11px]">
              Press <kbd className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-[10px] font-mono">Tab</kbd> to autocomplete
            </span>
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 hover:text-neutral-950 dark:hover:text-white transition-colors"
              title={isMaximized ? "Restore" : "Maximize"}
            >
              {isMaximized ? (
                <Minimize2 className="h-3.5 w-3.5" />
              ) : (
                <Maximize2 className="h-3.5 w-3.5" />
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:text-neutral-950 dark:hover:text-white transition-colors"
              title="Close (Esc)"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          className="flex-1 overflow-y-auto p-4 sm:p-6 font-mono text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 cursor-text terminal-scroll space-y-4"
        >
          <TerminalOutput history={history} />

          <div className="pt-2">
            <TerminalInput
              ref={inputRef}
              value={currentInput}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCurrentInput(e.target.value)
              }
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>

        {/* Quick Command Chips Toolbar */}
        <div className="border-t border-neutral-200 dark:border-neutral-800/80 px-4 py-2.5 bg-neutral-50/80 dark:bg-neutral-900/60 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] text-neutral-500 mr-1 hidden sm:inline">
              Quick commands:
            </span>
            {["help", "about", "experience", "projects", "skills", "clear"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleQuickCommand(cmd)}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-neutral-200/70 dark:bg-neutral-800/70 hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-400 text-neutral-700 dark:text-neutral-300 border border-neutral-300/60 dark:border-neutral-700/60 transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>

          <span className="text-[10px] text-neutral-400 font-mono hidden md:inline">
            Use &uarr; &darr; for history
          </span>
        </div>
      </div>
    </div>
  );
}
