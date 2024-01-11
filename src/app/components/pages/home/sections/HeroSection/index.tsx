import { ButtonTag } from "@/app/components/Button";
import { AiOutlineArrowDown } from 'react-icons/ai'
import styled from "styled-components";

import { Freehand, Nothing_You_Could_Do } from 'next/font/google'
import Image from "next/image";
import { CardProfile } from "./CardProfile";
import { fetchHygraphQuery } from "@/utils/fetchHygraph";

const freehand = Freehand({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})
const nothingYouCouldDo = Freehand({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

const SectionTag = styled.section`
    width: 100vw;
    margin: auto;
    padding: 30px 0;

    .container {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        > div {
            p {
                color: ${({ theme }) => theme.colors.light.dark};
                height: 14vh;
                text-overflow: ellipsis;
                overflow: hidden;
            }

        }

        @media (max-width: 800px) {
            flex-direction: column;
            p {
                width: 100%;
            }
        }

        
        /* background-color: blue; */
    }

    h4 {
        margin: 20px 0;
    }

    span {
        color: ${({ theme }) => theme.colors.primary.default}
    }
`



interface HeroSectionProps {
    title: string
    subtitle?: string
    text?: string
}




export function HeroSection({ title, subtitle, text }: HeroSectionProps) {


    // console.log('responseData: ', responseData)


    const handleContact = () => {
        const contactSection = document.querySelector('#contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <SectionTag>
            <div className="container">
                <div>
                    {/* <h5>Olá! Meu nome é <span className={nothingYouCouldDo.className} style={{fontSize: '4rem'}}>Renan Romagnollo</span></h5> */}
                    {title || <h5>Olá! Meu nome é <span className={nothingYouCouldDo.className} style={{ fontSize: '4rem' }}>Renan Romagnollo</span></h5>}
                    <h4>I'm a <span>Front-End Developer</span></h4>
                    <p style={{ width: '40vw' }}>{text}</p>
                    <div>
                        techs
                    </div>
                    <div>
                        <ButtonTag>
                            Leia mais...
                            <AiOutlineArrowDown size={25} />
                        </ButtonTag>
                    </div>
                </div>
                <CardProfile />
                {/* <div style={{width: '250px', height: '300px', backgroundColor: 'darkgray'}}>
                </div> */}
            </div>
        </SectionTag>
    )
}