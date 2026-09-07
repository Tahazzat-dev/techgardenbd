import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {Copy, Plus, Save, SquarePen, Trash2, View} from "lucide-react";

type ActionButtonProps = {
  label?: string;
  handler?: () => void;
  className?: string;
  type?: "button" | "submit";
  showIcon?: boolean;
  showText?: boolean;
  disabled?: boolean;
};

export function BtnPlus({
  label = "Add",
  handler,
  type = "button",
  showText = true,
  className,
  disabled,
}: ActionButtonProps) {
  return (
    <Button type={type} onClick={handler} className={className} disabled={disabled}>
      <Plus />
      {showText ? <span>{label}</span> : null}
    </Button>
  );
}

export function BtnSave({
  label = "Save",
  handler,
  type = "submit",
  showText = true,
  showIcon = false,
  className,
  disabled,
}: ActionButtonProps) {
  return (
    <Button type={type} onClick={handler} className={className} disabled={disabled}>
      {showIcon ? <Save /> : null}
      {showText ? <span>{label}</span> : null}
    </Button>
  );
}

export function BtnSubmit({
  label = "Submit",
  handler,
  type = "submit",
  showText = true,
  className,
  disabled,
}: ActionButtonProps) {
  return (
    <Button type={type} onClick={handler} className={className} disabled={disabled}>
      {showText ? <span>{label}</span> : null}
    </Button>
  );
}

export function BtnUpdate({
  label = "Update",
  handler,
  type = "button",
  showText = true,
  className,
  disabled,
}: ActionButtonProps) {
  return (
    <Button type={type} onClick={handler} className={className} disabled={disabled}>
      <SquarePen />
      {showText ? <span>{label}</span> : null}
    </Button>
  );
}

export function BtnCopy({
  label = "Copy",
  handler,
  type = "button",
  showText = true,
  className,
  disabled,
}: ActionButtonProps) {
  return (
    <Button type={type} variant="outline" onClick={handler} className={className} disabled={disabled}>
      <Copy />
      {showText ? <span>{label}</span> : null}
    </Button>
  );
}

export function BtnView({
  label = "View",
  handler,
  type = "button",
  showText = false,
  className,
  disabled,
}: ActionButtonProps) {
  return (
    <Button type={type} variant="ghost" size="icon-sm" onClick={handler} className={className} disabled={disabled} aria-label={label}>
      <View />
      {showText ? <span>{label}</span> : null}
    </Button>
  );
}

export function BtnTrash({
  label = "Delete",
  handler,
  type = "button",
  showText = false,
  className,
  disabled,
}: ActionButtonProps) {
  return (
    <Button
      type={type}
      variant="ghost"
      size="icon-sm"
      onClick={handler}
      className={cn("text-destructive hover:text-destructive", className)}
      disabled={disabled}
      aria-label={label}
    >
      <Trash2 />
      {showText ? <span>{label}</span> : null}
    </Button>
  );
}

export function BtnConfirm({
  label = "Confirm",
  handler,
  type = "button",
  showText = true,
  className,
  disabled,
}: ActionButtonProps) {
  return (
    <Button type={type} onClick={handler} className={className} disabled={disabled}>
      {showText ? <span>{label}</span> : null}
    </Button>
  );
}
