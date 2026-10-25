import { Command } from "@/types";
import React from "react";
import { TerminalInputPrefix } from "@/components/TerminalInput";

export default function TerminalOutput({ history }: { history: Command[] }) {
  return (
    <div className="space-y-3 font-mono">
      {history.map((item, index) => (
        <div key={index} className="space-y-1">
          {item.command && (
            <div className="flex items-center flex-wrap gap-1.5 py-0.5">
              <TerminalInputPrefix />
              <span className="font-semibold text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm">
                {item.command.replace(/^achmad:[$❯]\s*/, "")}
              </span>
            </div>
          )}
          <div className="space-y-1 pl-1">
            {item.output.map((line, lineIndex) => {
              if (React.isValidElement(line)) {
                return <React.Fragment key={lineIndex}>{line}</React.Fragment>;
              }
              const lineStr = line as string;
              return (
                <div key={lineIndex} className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  {lineStr}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
