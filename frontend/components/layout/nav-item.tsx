"use client"

import { ComponentProps, ComponentType } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

type SubMenuItemType = {
    name: string,
    link: string
}

export type NavItemType = {
    name: string
    link: string
    Icon: ComponentType<ComponentProps<'svg'>>
    submenu: null | SubMenuItemType[]
}

const matches = (pathname: string, link: string) => {
    return pathname === link || pathname.startsWith(link + "/")
}

const NavItem = ({ item }: { item: NavItemType }) => {
    const pathname = usePathname()
    const isActive = matches(pathname, item.link) || !!item.submenu?.some((s) => matches(pathname, s.link))

    return (
        <>
            <Link href={ item.link } className={`px-3 py-3 flex items-center gap-2 border-l-4 transition-all ${ isActive ? "bg-primary-300 border-l-primary-500 text-primary-500 font-bold" : "border-l-background" }`}>
                <item.Icon className="size-5 stroke-2" />

                <span className="text-sm">
                    { item.name }
                </span>
            </Link>

            <nav className="flex flex-col">
                {
                    isActive && item.submenu?.map((sub, i) => {
                        const isSubActive = matches(pathname, sub.link)

                        return (
                            <Link key={ i } href={ sub.link } className={`px-4 ml-7 py-2 text-sm ${ isSubActive ? "text-primary-500 font-bold" : "" }`}>
                                { sub.name }
                            </Link>
                        )
                    })
                }
            </nav>
        </>
    )
}

export default NavItem