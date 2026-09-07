import {Label} from "@/components/ui/label";
import {cn} from "@/lib/utils";
import type {ReactNode} from "react";

type FormFieldProps = {
  label: string;
  error?: string;
  htmlFor?: string;
  className?: string;
  children: ReactNode;
};

export function FormField({label, error, htmlFor, className, children}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
    </div>
  );
}

export function FormError({message}: {message?: string}) {
  return message ? <p className="text-sm text-destructive">{message}</p> : null;
}
