"use client"
import { CardBlog } from "@/components/Cards/CardBlog"
import { PathComponent } from "@/components/Path"
import { TitleSection } from "@/components/TitleSection"
import styled from "styled-components"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../context/data-context"
import { BlogPageCards } from "@/components/pages/blog/BlogPageCards"
import { BlogProps } from "@/types/blog-types"
import { getFakeData } from "@/utils/fakeServer"



const ContainerBlog = styled.section`
    margin: 0;
    padding: 50px 0;
    background-color: ${({ theme }) => theme.colors.dark.dark};
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
export default function Blog() {
    const [data, setData] = useState(null)
    // const {blogs} =  await getFakeData('blog')
    // console.log('blogData: ', blogs)

    useEffect(() => {
        const getData = async () => {
            const { blogs } = await getFakeData('blog')
            if (blogs) {
                console.log('blogData: ', blogs)
                setData(blogs)
            }
        }
        getData()
    }, [])


    return data &&
        (<ContainerBlog>
            <PathComponent />
            <TitleSection title="Blog" subtitle="Alguns posts"></TitleSection>
            <BlogPageCards blog={data} />
            {/* <div>
                {blog?.map(post => <CardBlog key={post.slug} post={post}/>)}
            </div> */}
        </ContainerBlog>)

}