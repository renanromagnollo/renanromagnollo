
// "use client"

import { DataContext } from "@/context/data-context";
import { BlogProps } from "@/types/blog-types";
import { getFakeData } from "@/utils/fakeServer";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Link from "next/link";




export default async function BlogPage({params}){


    const {posts} = await getFakeData('blog')
    console.log('data BlogPage: ', posts)
    const selected = posts?.filter(post => post.slug === params.slug)
    // console.log('PROJECTs: ', data.projects)

    console.log('SELECTED: ', selected)
    const post = selected[0]
    

    return(
        <div>
            <h1>{post?.title}</h1>
            <h2>{post?.title}</h2>
            <p><RichText content={post?.text?.raw}/></p>
        </div>
        
    )
}