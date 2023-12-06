import { ButtonTag } from "@/components/Button";
import {AiOutlineArrowDown} from 'react-icons/ai'
import styled from "styled-components";

import { Freehand } from 'next/font/google'

const freehand = Freehand({
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
        
        /* background-color: blue; */
    }

    h4 {
        margin: 20px 0;
    }

    span {
        color: ${({theme}) => theme.colors.primary.default}
    }
`

interface HeroSectionProps {

}
export function HeroSection(props : HeroSectionProps){

    const handleContact = () => {
        const contactSection = document.querySelector('#contact')
        if (contactSection) {
            contactSection.scrollIntoView({behavior: 'smooth'})
        }
    }

    return(
        <SectionTag>
            <div className="container">
                <div>
                    <h5>Olá! Meu nome é <span className={freehand.className} style={{fontSize: '4rem'}}>Renan Romagnollo</span></h5>
                    <h4>I'm a <span>Front-End Developer</span></h4>
                    <p style={{width: '40vw'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, iure numquam. Expedita vel voluptatum illo laudantium harum accusantium fugit labore, debitis perferendis minus obcaecati voluptates temporibus necessitatibus veritatis recusandae nostrum repellendus ex accusamus placeat! Officia non, voluptatibus optio odio illum incidunt qui deleniti aspernatur at modi maiores nihil minus quasi nostrum voluptatum veniam reprehenderit repellat placeat sit? Quos nihil laboriosam, tenetur atque facere maiores maxime placeat. Totam nam maiores quia explicabo unde reprehenderit atque saepe dolorum officiis vero nostrum nisi molestiae iste, dignissimos et, consectetur voluptate? Vel modi labore obcaecati quas laborum nobis, tenetur quod accusamus accusantium sed asperiores repudiandae.</p>
                    <div>
                        techs
                    </div>
                    <div>
                        <ButtonTag>
                            Leia mais...
                            <AiOutlineArrowDown size={25}/>
                        </ButtonTag>
                    </div>
                </div>
                <div style={{width: '250px', height: '300px', backgroundColor: 'darkgray'}}>
                    Image...
                </div>
            </div>
        </SectionTag>
    )
}