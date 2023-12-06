import styled from "styled-components"
import Image from "next/image"
import { ReactNode } from "react"

interface CardTitleProps {
    title?: string
    img?: string
    // children: ReactNode
}

const ContainerCardTitle = styled.div`
    position: relative;
    min-width: 310px;
    max-width: 15vw;
    height: 360px;
    background-color: ${({theme}) => theme.colors.light.default};
    border: none;

    > img {
        z-index: -20px;
        position: absolute;
        filter: blur(5px);
        -webkit-filter: blur(5px);
    }

    > h3 {
        position: absolute;
        /* height: 100%; */
        z-index: 30px;
        bottom: 0;
        right: 0;
        padding: 10px;
        text-align: right;
        color: ${({theme}) => theme.colors.primary.default};
        background-color: ${({theme}) => theme.colors.dark.dark};
        opacity: 0.9;
    }
`

export function CardTitle({title, img='http://picsum.photos/200/600'} : CardTitleProps){
    let tit = !title ? 'Lorem ipsum dolor sit amet.' : title
    return(
        <ContainerCardTitle>
            <Image
                src={img}
                width={0}
                height={0}
                // fill
                alt="Image"
                loading="lazy"
                sizes="100%"
                style={{width: '100%', height:'100%', objectFit: 'cover'}}
            />
            <h3>{tit}</h3>
        </ContainerCardTitle>
    )
}