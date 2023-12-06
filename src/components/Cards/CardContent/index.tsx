import { ReactNode } from "react"
import styled from "styled-components"
import { lighten } from 'polished';
import  Image  from 'next/image';

interface CardContentProps {
    title: string
    text: string
    
}

interface CardContainerProps {
    children: ReactNode
}

const CardContainer = styled.div<CardContainerProps>`
    background-color: ${({theme}) => lighten(0.1, theme.colors.dark.light)};
    min-width: 310px;
    max-width: 15vw;
    height: 360px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`



export function CardContent(props : CardContentProps){
    return(
        <CardContainer>
                <Image
                    src="http://picsum.photos/200/300"
                    width={0}
                    height={0}
                    alt="Image"
                    loading="lazy"
                    sizes="100vw"
                    style={{ width: '100%', height: '40%', objectFit: 'cover'}}
                    
                />
            
            <div>
                <h6>Título</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eum est placeat possimus voluptas voluptatem minima labore, cupiditate officiis quasi.</p>
                <span>Saiba mais</span>

            </div>

        </CardContainer>
    )
}