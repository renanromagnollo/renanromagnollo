'use client'

import { ThemeProvider } from "styled-components";
import { HeaderStyle } from "./styles";
import dark from "@/styles/themes/dark";

import Image from 'next/image'

export function Header() {
    return (
            <HeaderStyle>
                <div className="logomarca">
                    <Image src="/logo-white.svg" alt='logo' width={300} height={30}/>
                </div>
            </HeaderStyle>

    )
}