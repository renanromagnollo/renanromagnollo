'use client'
// import { CardContent } from "@/components/Cards/CardContent"
import { ScrollRows } from "@/app/components/ScrollRows"
import { CardBlog } from "../../../../Cards/CardBlog"
import { TitleSection } from "../../../../TitleSection"
import { DataContext } from "@/context/data-context"
import { MutableRefObject, useContext, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { BlogProps } from "@/types/blog-types"

interface BlogSectionProps {
    data: any
}

const ContainerBlogSection = styled.section`
    width: 100%;
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: space-evenly; */
    /* align-items: center; */
    gap: 8vh;
    background-color: ${({ theme }) => theme.colors.dark.default};
    padding: 50px 0;
`

const CadsArea = styled.div`
    position: relative;
    margin: 20px 0;
    /* border: none; */
    /* display: flex; */
    /* flex-wrap: wrap; */
    gap: 70px;
    /* width: 100%; */
    /* justify-content: center; */
    /* align-items: center; */
    /* background-color: blue; */
`

interface CardListProps {
    scrollX: string
}

const CardList = styled.ul<CardListProps>`
    /* display: block; */
    /* display: inline-block; */
    display: flex;
    justify-content: center;
    padding: 0 2vw;
    width: 100%;
    display: flex;
    gap: 6vw;
    /* background-color: pink; */
    margin-left: ${({scrollX}) => scrollX}px;
    transition: all ease-in-out .3s;
`

export function BlogSection({ data }: BlogSectionProps) {

    const { blog } = useContext(DataContext)
    
    const [scrollX, setScrollX] = useState(-300)
    const [blogCarrousel, setBlogCarrousel] = useState([])

    const cardListRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        console.log('marginRight: ', cardListRef?.current?.style?.width)
        console.log('scrollX: ', scrollX)
        if (scrollX >= -600) {
            let list = blogCarrousel
            console.log('list: ', list)
            console.log('listLast: ', list[list.length - 1])
            list.unshift(list[list.length - 1])
            list.splice(list.length - 1, 1)
            // delete list[list.length - 1]
            console.log('listToState: ', list)
            setBlogCarrousel(list)
        }
    }, [scrollX])

    useEffect(() => {
        setBlogCarrousel(blog)
    }, [blog])
   
    // console.log('BlogSection blog: ', blog)
    return (
        <ContainerBlogSection>
            <TitleSection title="Informativo" subtitle="Algumas informações e curiosidades desse universo tecnológico" path="/blog" />
            
            <CadsArea>
                <ScrollRows componentRef={cardListRef} scrollX={scrollX} setX={(x: number) => setScrollX(x)}/>
                <CardList ref={cardListRef} scrollX={scrollX}>
                    {blogCarrousel && blogCarrousel?.map((post: BlogProps, i) => {
                        // console.log('BLOG: ', post?.image?.url)
                        return <CardBlog key={post.slug} post={post} />
                    })}

                </CardList>

            </CadsArea>
        </ContainerBlogSection>
    )
}