import { ReactNode } from "react"
import styled from "styled-components"
import { lighten } from 'polished';
import  Image  from 'next/image';
import Link from "next/link";

interface CardContentProps {
    title?: string
    text?: string
    img?: string    
}

interface CardContainerProps {
    children: ReactNode
}

const CardContainer = styled.div<CardContainerProps>`
    background-color: ${({theme}) => lighten(0.1, theme.colors.dark.dark)};
    min-width: 310px;
    max-width: 15vw;
    height: 360px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 7px;
    cursor: pointer;


    > div {
        height: 70%;
        margin: 40px auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 10px;

        h5, p {
            color: ${({theme}) => theme.colors.light.dark};
            transition: all 1s;

            &:hover {
                color: ${({theme}) => theme.colors.light.default};
            }
        }

        span {
            color: ${({theme}) => theme.colors.primary.default};
            font: ${({theme}) => theme.fonts.smallBold}
        }
    }
 
`



export function CardProject({title='Título', text='texto...', img} : CardContentProps){
    return(
            <Link href={`/projects/${title}`}>
                <CardContainer>
                    <Image
                        src={img}
                        width={0}
                        height={0}
                        alt="Image"
                        loading="lazy"
                        sizes="100vw"
                        style={{ width: '100%', height: '40%', objectFit: 'cover'}}
                        unoptimized
                        
                    />
                
                <div>
                    <h5>{title}</h5>
                    {text ==='texto' ? <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eum est placeat possimus voluptas voluptatem minima labore, cupiditate officiis quasi.</p>
                        : text
                    }
                    <div>Tecnologies...</div>
                    <span>Saiba mais</span>

                </div>
            </CardContainer>
        </Link>

    )
}