import { Command } from "@/types";
import React from "react";
import { TerminalInputPrefix } from "@/components/TerminalInput";

export default function TerminalOutput({ history }: { history: Command[] }) {
  return (
    <>
      {history.map((item, index) => (
        <div key={index} className="mb-2">
          {item.command && (
            <div className="flex w-fit items-center">
              <TerminalInputPrefix />
              <span>{item.command.replace("achmad:$ ", "")}</span>
            </div>
          )}
          {item.output.map((line, lineIndex) => {
            if (React.isValidElement(line)) {
              return line;
            }
            const lineStr = line as string;
            return <div key={lineIndex}>{lineStr}</div>;
          })}
        </div>
      ))}
    </>
  );
}
