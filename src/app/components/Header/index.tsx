'use client'

import { ThemeContext } from "styled-components";
import { HeaderStyle } from "./styles";
import dark from "@/styles/themes/dark";

import Image from 'next/image'
import Switch from 'react-switch'
import { useContext } from "react";
import { Logo } from "../icons/logo";
import Link from "next/link";
import { NavItem } from "./Nav";

const navItems = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Projects',
        href: '/projects'
    },
    {
        label: 'Blog',
        href: '/blog'
    },
    {
        label: 'Contact',
        href: '#'
    }
]


export function Header() {

    return (
        <HeaderStyle>
            <div className="logomarca" style={{ userSelect: 'none' }}>
                <Link href="/">
                    <Logo theme={'dark'} />
                </Link>
            </div>
            <div className="menu">

                <ul className="links">
                    {navItems.map(item => (
                        <NavItem {...item} key={item.label} />
                    ))}
                </ul>

            </div>
        </HeaderStyle>

    )
}