"use client"

import { ChartPieIcon, CalendarIcon, ViewColumnsIcon, BriefcaseIcon, CogIcon } from "@heroicons/react/24/outline"
import NavItem, { NavItemType } from "@/components/layout/nav-item"

const Menu = () => {
    const navLinks = [
        { name: 'Dashboard', link: '/dashboard', Icon: ChartPieIcon, submenu: null },
        { name: 'Reservations', link: '/reservations', Icon: CalendarIcon, submenu: null },
        { name: 'Tables', link: '/tables', Icon: ViewColumnsIcon, submenu: null },
        { name: 'Restaurant', link: '/restaurant', Icon: BriefcaseIcon, submenu: [
            { name: 'Details', link: '/restaurant/details' },
            { name: 'Menu', link: '/restaurant/menu' },
            { name: 'Capacity', link: '/restaurant/capacity' },
            { name: 'Reservations', link: '/restaurant/reservations' },
        ]},
        { name: 'Settings', link: '/', Icon: CogIcon, submenu: null }
    ] as NavItemType[]

    return (
        <nav>
            {
                navLinks.map((item, i) => (
                    <NavItem key={ i } item={ item } />
                ))
            }
        </nav>
    )
}

export default Menu