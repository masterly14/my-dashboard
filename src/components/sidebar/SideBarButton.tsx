import { LucideIcon } from "lucide-react";
import { Button, ButtonProps } from "../ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface SideBarButtonProps extends ButtonProps {
  icon: LucideIcon,
  path?: string
}

export function SideBarButton({
  icon: Icon,
  path,
  children,
  ...props
}: SideBarButtonProps) {
    const Path = usePathname()

  return (
    <Button variant="ghost" className={(Path === path ? 'bg-slate-200 gap-2 justify-start' : 'gap-2 justify-start')} {...props}>
      <Icon className="text-gray-400" size={20} />
      <span>{children}</span>
    </Button>
  );
}
