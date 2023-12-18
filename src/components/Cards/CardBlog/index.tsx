'use client'
import styled from "styled-components"
import Image from "next/image"
import { ReactNode } from "react"
import Link from "next/link"
import { RichTextContent } from '@graphcms/rich-text-react-renderer';
import { BlogProps, CardBlogProps } from "@/types/blog-types"

// interface CardBlogProps {
//     slug: string
//     title: string
//     subtitle?:{
//         raw: RichTextContent
//     }
//     text?:{
//         raw: RichTextContent
//     }
//     img?: {
//         url: string
//     } 
//     // children: ReactNode
// }

// interface CardBlogProps {
//     post: BlogProps
// }


const CardBlogBox = styled.div`
    cursor: pointer;
    position: relative;
    min-width: 310px;
    max-width: 15vw;
    height: 360px;
    /* background-color: rgba(0, 0, 0, 0.8); */
    border: solid 4px black;
    border-color: ${({theme}) => theme.colors.light.dark};
    overflow: hidden;
    /* opacity: .5; */
    box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, .4);
    
    transition: border-color 1s;
    
    &:hover {
        border-color: ${({theme}) => theme.colors.primary.default};
        box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, .4);
    }

    > img {
        z-index: -20px;
        position: absolute;
        filter: blur(1.5px);
        -webkit-filter: blur(1.5px);
    }

    
`

const ContentCard = styled.div`
    position: absolute;
    padding: 5px;
    /* z-index: 50px; */
    /* width: 90%; */
    bottom: 0;
    /* justify-self: flex-end; */
    /* height: 50%; */
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    opacity: .9;
    transform: all ease-in .3s;

    
    > h5 {
        /* z-index: 60px; */
        /* position: absolute; */
        background-color: rgba(0, 0, 0, 0.3);
        width: 100%;
        /* height: 100%; */
        /* z-index: 30px; */
        /* bottom: 0; */
        /* right: 0; */
        padding: 15px;
        text-align: right;
        color: ${({theme}) => theme.colors.primary.default};
        opacity: 0.9;
    }
    
    &:hover {
        > p {
            height: 100%;
            padding: 10px;
        }
    }
    
    > p {
        height: 0;
        /* padding: 10px; */
        text-align: end;
        transition: all .3s;
    }
    `

export function CardBlog({post}: {post: CardBlogProps}) {

    console.log('CardBlog props: ', post)
    // let tit = !title ? 'Lorem ipsum dolor sit amet.' : title
    return(
        <Link href={`/blog/`}>
            <CardBlogBox>
                <Image
                    src={post?.image?.url}
                    width={0}
                    height={0}
                    // fill
                    alt="Image"
                    loading="lazy"
                    sizes="100%"
                    style={{width: '100%', height:'100%', objectFit: 'cover'}}
                />
                <ContentCard>
                    <h5>{post?.title}</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. fdjakfçjdakçfjakfç jdklç fjdklaç fjdkçf jda</p>

                </ContentCard>
            </CardBlogBox>
        
        </Link>
    )
}