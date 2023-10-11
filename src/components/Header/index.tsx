'use client'

import { ThemeContext} from "styled-components";
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
        label: 'Services',
        href: '/'
    },
    {
        label: 'Projects',
        href: '/projects'
    },
    {
        label: 'Blog',
        href: '/'
    },
    {
        label: 'Contact',
        href: '/'
    }
]


export function Header() {

    // const {colors, title} = useContext(ThemeContext)

    return (
            <HeaderStyle>
                <div className="logomarca" style={{userSelect: 'none'}}>
                    {/* <Image src="/logo-white.svg" alt='logo' width={300} height={30}/> */}
                    <Link href="/">
                        <Logo theme={'dark'}/>
                    </Link>
                    {/* <Logo theme={'dark'}/> */}
                </div>
                <div className="menu">
                    {/* <div className="links">
                        <ul>
                            <li>Services</li>
                            <li>Projects</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div> */}
                    <nav className="links">
                        {navItems.map(item => (
                            <NavItem {...item} key={item.label}/>
                        ))}
                    </nav>
                    <div className="switch">
                        <Switch 
                            onChange={toggleTheme => console.log('mudou tema!')}
                            // checked={}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            height={10}
                            width={40}
                            handleDiameter={20}
                            offColor={'#111'}
                            onColor={'#F3F3F3'}
                        />
                    </div>
                </div>
            </HeaderStyle>

    )
}