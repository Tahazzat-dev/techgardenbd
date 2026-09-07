import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

// Use ComponentPropsWithoutRef to inherit all standard HTML attributes
type WrapperProps = ComponentPropsWithoutRef<"div">;
type SectionProps = ComponentPropsWithoutRef<"section">;

export function Wrapper({ children, className, ...props }: WrapperProps) {
    return (
        <div
            className={cn('p-3 md:p-4 lg:p-4', className)}
            {...props} // Spreading ensures props like id, onClick, or style work
        >
            {children}
        </div>
    );
}

export function SectionWrapper({ children, className, ...props }: SectionProps) {
    return (
        <section
            className={cn("mb-5 md:mb-7 lg:mb-8 rounded-md border border-border bg-background p-3 md:p-4", className)}
            {...props}
        >
            {children}
        </section>
    );
}