import {cn} from "@/lib/utils";
import {LoaderCircle} from "lucide-react";
import type {ReactNode} from "react";

export function LoadingSpinner({className = ""}: {className?: string}) {
  return <LoaderCircle className={cn("size-5 animate-spin text-primary", className)} />;
}

export function ApiActionSpinner({
  className = "",
  loadingClassName = "",
}: {
  className?: string;
  loadingClassName?: string;
}) {
  return (
    <div className={cn("flex h-full w-full items-center justify-center", className)}>
      <LoadingSpinner className={loadingClassName} />
    </div>
  );
}

export function PageLoading({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("flex h-full w-full items-center justify-center gap-2", className)}>
      <LoadingSpinner />
      {children}
    </div>
  );
}
