import {
  BarChart3,
  Blocks,
  Cloud,
  Code2,
  CreditCard,
  Database,
  Eye,
  Figma,
  FileSpreadsheet,
  Gauge,
  LockKeyhole,
  Rocket,
  Search,
  ShieldCheck,
  Users,
  Wallet,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const iconMap = {
  BarChart3,
  Blocks,
  Cloud,
  Code2,
  CreditCard,
  Database,
  Eye,
  Figma,
  FileSpreadsheet,
  Gauge,
  LockKeyhole,
  Rocket,
  Search,
  ShieldCheck,
  Users,
  Wallet,
  Workflow,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

export function getIcon(name?: IconName): LucideIcon | undefined {
  return name ? iconMap[name] : undefined;
}
