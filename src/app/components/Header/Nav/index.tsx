'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
    label: string
    href: string
}
export function NavItem({ label, href }: NavItemProps) {
    const pathName = usePathname()

    const isActive = pathName === href
    return (
        <Link href={href}>
            <li className={isActive ? 'active' : ''}>
                {label}
            </li>
        </Link>
    )
}