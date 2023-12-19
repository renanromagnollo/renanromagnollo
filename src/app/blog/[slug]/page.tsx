
"use client"

import { DataContext } from "@/context/data-context";
import { BlogProps } from "@/types/blog-types";
import { getFakeData } from "@/utils/fakeServer";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Link from "next/link";
import { useEffect, useState } from "react";




export default function BlogPage({params}){
    
    const [postSelected, setPostSelected] = useState('')

    // const {blogs} = await getFakeData('blog')
    // console.log('data BlogPage: ', blogs)
    // const selected = blogs?.filter(post => post.slug === params.slug)
    // console.log('SELECTED: ', selected)
    // if(selected) setPostSelected(selected)
    // const [postSelected, setPostSelected] = useState('')

    useEffect(() => {
        const getBlog = async () => {
            const {blogs} = await getFakeData('blog')
            console.log('data BlogPage: ', blogs)
            const selected = blogs?.filter(post => post.slug === params.slug)
            console.log('SELECTED: ', selected)
            if(selected) setPostSelected(selected[0])
        }

        getBlog()

    }, [])


    // console.log('PROJECTs: ', data.projects)

    // const post = selected
    

    return postSelected &&
            (<div>
                <h1>{postSelected?.title}</h1>
                <div><RichText content={postSelected?.subtitle?.raw}/></div>
                <div><RichText content={postSelected?.text?.raw}/></div>
            </div>)
        
    
    } 