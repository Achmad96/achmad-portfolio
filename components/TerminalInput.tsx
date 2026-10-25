import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes, Ref } from "react";

export const TerminalInputPrefix = () => {
  return (
    <div className="mr-2 flex shrink-0 items-center gap-1.5 font-mono text-xs select-none">
      <span className="text-teal-600 dark:text-teal-400 font-bold">
        achmad@uinsa
      </span>
      <span className="text-neutral-400">:</span>
      <span className="text-cyan-600 dark:text-cyan-400 font-medium">
        ~/portfolio
      </span>
      <span className="text-neutral-500 text-[11px]">
        git:(<span className="text-amber-500 dark:text-amber-400 font-medium">main</span>)
      </span>
      <span className="text-teal-500 font-bold">❯</span>
    </div>
  );
};

export const TerminalInput = forwardRef<
  HTMLInputElement,
  { value: string } & HTMLAttributes<HTMLInputElement>
>(({ onKeyDown, onChange, value, className, ...props }, ref) => {
  return (
    <div className="flex w-full items-center">
      <TerminalInputPrefix />
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        spellCheck={false}
        autoComplete="off"
        className={cn(
          "w-full flex-1 bg-transparent font-mono text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 caret-teal-500 outline-none placeholder:text-neutral-400",
          className
        )}
        autoFocus
        {...props}
      />
    </div>
  );
});

TerminalInput.displayName = "TerminalInput";
