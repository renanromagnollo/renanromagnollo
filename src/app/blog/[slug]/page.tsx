
"use client"

import { DataContext } from "@/context/data-context";
import { BlogProps } from "@/types/blog-types";
import { getFakeData } from "@/utils/fakeServer";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";



const PageContainertag = styled.div`
    width: 100%;
    height: 100%;
    padding: 15px;
    background-color: ${({ theme }) => theme.colors.light.default};
    display: flex;
    justify-content: space-between;
`
const ContentTag = styled.section`
    width: 65vw;
    padding: 20px;
`

export default function BlogPage({ params }) {

    const [postSelected, setPostSelected] = useState('')

    useEffect(() => {
        const getBlog = async () => {
            const { blogs } = await getFakeData('blog')
            // console.log('data BlogPage: ', blogs)
            const selected = blogs?.filter(post => post.slug === params.slug)
            console.log('SELECTED: ', selected)
            if (selected) setPostSelected(selected[0])
        }

        getBlog()

    }, [])


    // console.log('PROJECTs: ', data.projects)

    // const post = selected


    return postSelected &&
        (<PageContainertag>
            <ContentTag>
                <h1>{postSelected?.title}</h1>
                <div><RichText content={postSelected?.subtitle?.raw} /></div>
                <br />
                <div><RichText content={postSelected?.text?.raw} /></div>

            </ContentTag>
            <div style={{ width: '35vw', display: 'flex', flexDirection: 'column' }}>
                <Image
                    src={postSelected?.image?.url}
                    width={0}
                    height={0}
                    alt='Project_Image'
                    loading='lazy'
                    unoptimized
                    sizes='100%'
                    style={{ width: '350px', height: '250px', objectFit: 'cover' }}
                // fill={true}
                />
            </div>
        </PageContainertag>)


} 