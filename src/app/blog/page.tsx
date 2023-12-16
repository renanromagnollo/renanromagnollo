// 'use client'
import { CardBlog } from "@/components/Cards/CardBlog"
import { DataContext } from "@/components/context/data-context"
import { getFakeData } from "@/utils/fakeServer"
import { useContext } from "react"
import styled from "styled-components"

// const PostsTag = styled.div`
//     display: flex;
// `

export default async function Blogs() {
    
    // const {blog, setBlog} = useContext(DataContext)
    const {blogs} = await getFakeData('blog')
    // useContext(() => {
    //     setBlog(blogs)
    // }, [blogs])

    console.log('blog: ', blogs)
    return (

            <div>
                <h1>Blog</h1>
                <div style={{display: 'flex'}}>
                    {blogs?.map((blog, i) => (<CardBlog key={i} title={blog.title}/>))}
                    {/* {blogs?.map((blog) => console.log('BBB: ', blog))} */}
                </div>
            </div>

    )
}