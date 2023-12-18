"use client"
import { CardBlog } from "@/components/Cards/CardBlog"
import { PathComponent } from "@/components/Path"
import { TitleSection } from "@/components/TitleSection"
import styled from "styled-components"
import {useRouter} from "next/navigation"
import { useContext, useEffect } from "react"
import { DataContext } from "../../context/data-context"
import { BlogPageCards } from "@/components/pages/blog/BlogPageCards"
import { BlogProps } from "@/types/blog-types"
import { getFakeData } from "@/utils/fakeServer"



const ContainerBlog = styled.section`
    margin: 0;
    padding: 50px 0;
    background-color: ${({theme}) => theme.colors.dark.dark};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    /* grid-template-columns: 1; */
    gap: 5vw;

    > div {
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 50px;
    }

`
export default function Blog(){

    const {blog, setBlog} = useContext(DataContext)

    useEffect(() => {
        const dataBlog = async () => {
            const posts = await getFakeData('blog')
            if(posts) setBlog(posts)
        }
        dataBlog()
    }, [])

    // const {blog} = useContext(DataContext)
    // console.log('CONTEXT blog :', blog)
    // const params = useRouter()
    // console.log('params: ', params)
    return(
        <ContainerBlog>
            <PathComponent/>
            <TitleSection title="Blog" subtitle="Alguns posts"></TitleSection>
            <BlogPageCards />
            {/* <div>
                {blog?.map(post => <CardBlog key={post.slug} post={post}/>)}
            </div> */}
        </ContainerBlog>
    )
}