"use client"

import { CardBlog } from "@/components/Cards/CardBlog"
import { DataContext } from "@/context/data-context"
import { CardBlogProps } from "@/types/blog-types"
import { useContext } from "react"

// interface BlogCardsProps {

// }
export function BlogPageCards({blog}){
    // const {blog} = useContext(DataContext)
    console.log('BlogPageCards context blog: ', blog)
    return(
        <div>
            {blog && blog?.map((post, i) => <CardBlog key={i} post={post}/>)}
        </div>
    )
}