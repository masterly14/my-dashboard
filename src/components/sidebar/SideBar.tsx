'use client'
import { Circle, DollarSign, Home, LayoutDashboard, LucideFolderArchive, LucideRocket, Users2 } from "lucide-react";
import { SideBarDesktop } from "./page";

const MenuItems = [
    {label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard},
    {label: 'Counter', href: '/dashboard/counter', icon: Home},
    {label: 'Pokemons', href: '/dashboard/pokemons', icon: Circle},
    {label: 'Favoritos', href: '/dashboard/favoritos', icon: LucideFolderArchive}
]

export function SideBar(){
    return (
        
        <SideBarDesktop sideBarItems={{
            links: MenuItems
        }}/>
    )
}