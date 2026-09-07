import {cn} from "@/lib/utils";

type NoDataProps = {
  message?: string;
  className?: string;
};

export function NoData({message = "No data found.", className}: NoDataProps) {
  return (
    <div className={cn("flex min-h-32 items-center justify-center rounded-md border border-dashed bg-muted/40 p-6 text-sm text-muted-foreground", className)}>
      {message}
    </div>
  );
}
