import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { TitleSection } from "../TitleSection"
import Image from "next/image"
import styled from "styled-components"
import { ModalInsta } from "../ModalInsta"

const ContainerInstagram = styled.div`
    width: 100vw;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    `

const ContainerPosts = styled.section`
    width: 90%;
    height: 370px;
    overflow: hidden;
    padding: 30px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 30px;
    /* background-color: green; */
`

const CardInsta = styled.div`
    width: 150px;
    height: 150px;

    /* margin: 40px; */
    border-radius: 8px;
    overflow: hidden;
    border: 4px solid ${({theme}) => theme.colors.light.default};

    &:hover{
        border-color: ${({theme}) => theme.colors.terciary.light};
    }

    &::before {
        background-color: ${({theme}) => theme.colors.dark.default};
    }
`

interface InstaFeedProps {
    id: string
    media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
    media_url: string
    permalink: string
}
export function InstaFeed(props : InstaFeedProps){
    const [feedList, setFeedList] = useState<InstaFeedProps>([])
    const [modalInstaOpened, setModalInstalOpened] = useState(false)
    const [selectedImageUrl, setSelectedImageUrl] = useState('')

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

    function handleModal() {
        setModalInstalOpened(!modalInstaOpened)
    }

    function openImage(url: string) {
        setSelectedImageUrl(url)
        setModalInstalOpened(true)
    }
    

    useEffect(() => {
        getInstaFeed()
    }, [])

    useEffect(() => console.log( 'state modal: ', modalInstaOpened), [modalInstaOpened, selectedImageUrl])

    return(
        <ContainerInstagram>
            <TitleSection title="instagram"/>
            <ModalInsta isOpen={modalInstaOpened} imgUrl={selectedImageUrl} closeModal={close => setModalInstalOpened(close)}/>
            <ContainerPosts>
                {
                    feedList?.map((post, i) => {
                        return (
                                // <Link key={post.id} href={post.permalink} target="_blank">
                                    <CardInsta key={i} onClick={() => openImage(post.media_url)}>
                                    {/* // <CardInsta key={i} onClick={() => console.log('Link da imagem: ', post.media_url)}> */}
                                        {post.media_type === 'VIDEO' ? 
                                            <video controls src={post.media_url}></video>
                                            :
                                            <Image 
                                                src={post.media_url} 
                                                width={0}
                                                height={0}
                                                // fill
                                                alt="Image"
                                                loading="lazy"
                                                sizes="100%"
                                                style={{width: '30vw', height:'100%', objectFit: 'cover'}}/>
                                        }
                                        </CardInsta>
                                // </Link>
                        )
                    })
                }
                
            </ContainerPosts>
        </ContainerInstagram>
    )
}