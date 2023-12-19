import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { TitleSection } from "../TitleSection"
import Image from "next/image"
import styled from "styled-components"

const ContainerInstagram = styled.div`
    width: 100vw;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    `

const PostsTag = styled.section`
    width: 20%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 30px;
    /* background-color: green; */
`

interface InstaFeedProps {
    id: string
    media_type: "IMAGE" | "VIDEO"
    media_url: string
    permalink: string
}
export function InstaFeed(props : InstaFeedProps){
    const [feedList, setFeedList] = useState<InstaFeedProps>([])

    async function getInstaFeed(fake=true) {

        if(fake) {
            const response = await fetch('http://localhost:3333/instagramFeed')
            const {data} = await response.json()
            console.log('data fetch fake instagram: ', data)
            if(data) setFeedList(data)
        } else {
            
            const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN
            const fields = 'media_url,media_type,permalink'
            const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`
            
            const {data} = await axios.get(url)
            if(data) setFeedList(data)
        }

        console.log('INSTAGRAM data: ', feedList)
    }

    useEffect(() => {
        getInstaFeed()
    }, [])

    return(
        <ContainerInstagram>
            <TitleSection title="instagram"/>
            <PostsTag>
                {
                    feedList?.map((post, i) => {
                        return (
                                <Link key={post.id} href={post.permalink} target="_blank">
                                    <div>
                                        {post.media_type === 'IMAGE' ? 
                                            <Image 
                                                src={post.media_url} 
                                                width={0}
                                                height={0}
                                                // fill
                                                alt="Image"
                                                loading="lazy"
                                                sizes="100%"
                                                style={{width: '30vw', height:'100%', objectFit: 'cover'}}/>
                                            :
                                            <video controls src={post.media_url}></video>
                                        }
                                        </div>
                                </Link>
                        )
                    })
                }
                
            </PostsTag>
        </ContainerInstagram>
    )
}