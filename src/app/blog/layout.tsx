"use client"

import { TitleSection } from "@/components/TitleSection"
import { ReactNode } from "react"
import styled from "styled-components"

interface BlogLayoutProps {
    children: ReactNode
}

const BlogContentPage = styled.div`
    background-color: ${({theme}) => theme.colors.light.default};
    color: ${({theme}) => theme.colors.dark.light};
`
export default function BlogLayout({children} : BlogLayoutProps){
    return(
        <BlogContentPage>
            {/* <TitleSection title="Blog"/> */}
            {/* <h1>Blog Content</h1> */}
            {children}
        </BlogContentPage>
    )
}