"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/layout/theme-provider";
import { MoonIcon, SunIcon } from "@/components/shared/Icons";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  type?: "ghost" | "default";
};

export function ThemeToggle({className = "", type = "ghost"}: ThemeToggleProps) {
  const {theme, toggleTheme} = useTheme();
  const isDark = theme === "dark";

  if (type === "ghost") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className={cn(
          "relative flex  items-center p-1 transition-colors duration-300",
          className,
        )}
      >
        <span className="relative h-6 w-6 overflow-hidden rounded-full transition-transform duration-300">
          <span
            className={cn(
              "flex h-6 w-12 items-center justify-center rounded-full transition-transform duration-300",
              isDark ? "-translate-x-1/2" : "translate-x-0",
            )}
          >
            <SunIcon className="h-6 w-6 text-yellow-500" />
            <MoonIcon className="h-6 w-6 text-white" />
          </span>
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "relative flex h-6 w-10 items-center rounded-full p-1 transition-colors duration-300",
        isDark ? "bg-neutral-800" : "bg-neutral-300",
        className,
      )}
    >
      <span
        className={cn(
          "flex size-[18px] items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300",
          isDark ? "translate-x-4" : "translate-x-0",
        )}
      >
        {isDark ? (
          <Moon className="size-4 text-neutral-800" />
        ) : (
          <Sun className="size-4 text-yellow-500" />
        )}
      </span>
    </button>
  );
}
