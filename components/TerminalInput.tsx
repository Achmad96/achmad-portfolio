import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes, Ref } from "react";

export const TerminalInputPrefix = () => {
  return (
    <div className="mr-3 flex w-fit items-center gap-1">
      <span className="text-green-400">~/achmad/portfolio</span>
      <span className="text-yellow-400">
        git(<span className="text-purple-400">master</span>)<span className="text-blue-400">$</span>
      </span>
    </div>
  );
};
export const TerminalInput = forwardRef(({ onKeyDown, onChange, value, className, ...props }: { value: string } & HTMLAttributes<HTMLInputElement>, ref: Ref<HTMLInputElement>) => {
  return (
    <div className="flex w-full items-center">
      <TerminalInputPrefix />
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={cn("text-foreground w-full flex-1 bg-transparent caret-cyan-400 outline-none", className)}
        autoFocus
        {...props}
      />
    </div>
  );
});
