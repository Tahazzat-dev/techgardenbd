import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { Container } from "@/components/shared/Container";

type WrapperProps = ComponentPropsWithoutRef<"div">;

export function Wrapper({children, className, ...props}: WrapperProps) {
  return (
    <div className={cn("p-3 md:p-4", className)} {...props}>
      {children}
    </div>
  );
}

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({id, children, className, containerClassName}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionWrapper({children, className, ...props}: ComponentPropsWithoutRef<"section">) {
  return (
    <section
      className={cn("mb-6 rounded-md border border-border bg-card p-4 md:p-5", className)}
      {...props}
    >
      {children}
    </section>
  );
}
