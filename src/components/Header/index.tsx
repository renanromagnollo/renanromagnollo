'use client'

import { ThemeContext} from "styled-components";
import { HeaderStyle } from "./styles";
import dark from "@/styles/themes/dark";

import Image from 'next/image'
import Switch from 'react-switch'
import { useContext } from "react";
import { Logo } from "../icons/logo";

export function Header() {

    // const {colors, title} = useContext(ThemeContext)

    return (
            <HeaderStyle>
                <div className="logomarca" style={{userSelect: 'none'}}>
                    {/* <Image src="/logo-white.svg" alt='logo' width={300} height={30}/> */}
                    <Logo theme={'dark'}/>
                </div>
                <div className="menu">
                    <div className="links">
                        <ul>
                            <li>Services</li>
                            <li>Works</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
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