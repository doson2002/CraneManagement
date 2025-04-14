import { NavLink } from "@/components/nav";

export interface NavItemProps {
  link: NavLink;
  width?: number;
  height?: number;
  color?: string;
}

export default function NavItem({
  link,
  width = 6,
  height = 6,
  color = "text-primary",
}: NavItemProps) {
  const Icon = link.icon;
  return (
    <div className="flex items-center gap-2">
      <Icon className={`h-${height} w-${width} ${color}`} />
      <span className="text-sm font-medium">{link.label}</span>
    </div>
  );
}
