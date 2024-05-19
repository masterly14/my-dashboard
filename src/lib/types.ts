import { LucideIcon } from "lucide-react"

export interface SideBarItems {
    links: Array<{
        label: string,
        href: string,
        icon: LucideIcon
    }>
}