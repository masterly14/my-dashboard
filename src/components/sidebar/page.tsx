'use client'

import { SideBarButton } from "./SideBarButton";
import { SideBarItems } from "@/lib/types";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut, MoreHorizontal, UserMinus2 } from "lucide-react";
import ActiveLink from "../active-link/ActiveLink";
import { usePathname } from "next/navigation";

interface SideBarDesktopProps {
  sideBarItems: SideBarItems;
}

export function SideBarDesktop(props: SideBarDesktopProps) {
  const Path = usePathname()
  console.log(Path)
  return (
    <aside className="w-[200px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r bg-slate-50">
      <div className="h-full px-3 py-4">
        <h3 className="mx-3 text-lg font-semibold text-foreground">Monarch</h3>
        <Separator className="absolute left-0 w-full" />
        <div className="mt-5">
          <div className="flex flex-col gap-2 w-full">
            {props.sideBarItems.links.map((link, index) => (
              <div key={index}>
                <Link href={link.href} >
                <SideBarButton icon={link.icon} path={link.href}>
                  {link.label}
                </SideBarButton>
                </Link>
              </div>
            ))}
          </div>
          <div className="absolute left-0 bottom-3 w-full px-3">
            <Separator className="absolute -top-4 left-0 w-full" />
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">
                  <div className="flex justify-between items-center w-full gap-2">
                    <div className="flex gap-2">
                      <Avatar className="h-5 w-5">
                        <AvatarImage src="https://media.licdn.com/dms/image/D5603AQHuLNSVsLy9ig/profile-displayphoto-shrink_200_200/0/1714614678062?e=2147483647&v=beta&t=_sqPrm-uL8wCzQ1_-OyjiBilKsDChBPqU6GiYmlakRw" />
                        <AvatarFallback>Daniel Dalen</AvatarFallback>
                      </Avatar>
                      <span>Daniel Dalen</span>
                    </div>
                    <MoreHorizontal size={20} />
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto">
                <div className="flex flex-col">
                  <Link href="dashboard/counter">
                    <SideBarButton
                      size="sm"
                      icon={UserMinus2}
                      className="w-full"
                    >
                      Settings
                    </SideBarButton>
                  </Link>
                  <SideBarButton size="sm" icon={LogOut} className="w-full">
                    Log Out
                  </SideBarButton>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </aside>
  );
}
