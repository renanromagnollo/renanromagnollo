import Image from "next/image"
import styled from "styled-components"
import { light } from '@/styles/themes/light';
// import { ReactIcon } from "@/components/icons/reactIcon";
import { PhotoshopIcon } from "@/app/components/icons/photoshopIcon";
import { FigmaIcon } from "@/app/components/icons/figmaIcon";
import { JavascriptIcon } from "@/app/components/icons/javascriptIcon";
import { BrazilIcon } from "@/components/icons/brazilIcon";
import { ChipIcon } from "@/components/icons/chipIcon";
import { ReactIcon } from "@/app/components/icons/reactIcon";

interface CardProfileProps {

}

const CardBox = styled.div`
    width: 250px;
    height: 400px;
    /* padding: 5vh; */
    /* background-color: ${({ theme }) => theme.colors.dark.light}; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.5);
    border: solid 3px rgba(0, 0, 0, .3);
    position: relative;
    overflow: hidden;
    /* cursor: pointer; */
    
    
    &::before {
        right: -90px;
        bottom: -40px;
        position: absolute;
        content: '';
        width: 100%;
        height: 30px;
        background-color: ${({ theme }) => theme.colors.primary.dark};
        box-shadow: inset 1px 1.5px 5px 1px rgba(0, 0, 0, .7);
        /* text-shadow: inset 1px 1px 1px black; */
        transform: rotate(-45deg);
    }
    
    &::after {
        left: -80px;
        position: absolute;
        content: '';
        width: 100%;
        height: 10px;
        background-color: ${({ theme }) => theme.colors.light.dark};
        box-shadow: inset 1px 1.5px 2px 1px rgba(0, 0, 0, .6);
        /* text-shadow: inset 1px 1px 1px black; */
        transform: rotate(-45deg);
    }

    &:hover {
        img {
            filter: saturate(80%);
            
        }
    }
    
    /* &:hover {
        box-shadow: 7px 7px 8px 2px rgba(0, 0, 0, 0.2);

    } */

    background-color: #4d4855;
    background-image: linear-gradient(147deg,#3f3f3f 0%,  
                                            #a5a5a5 4%, 
                                            #e0e0e0 10%,
                                            #3f3f3f 85%, 
                                            #2e2e2e 100%);


    > img {

        border-radius: 10px;
        border: solid 3px ${({ theme }) => theme.colors.light.dark};
        filter: saturate(0) grayscale(20%);
        /* box-shadow: inset 5px 2px 2px 1px rgba(0, 0, 0, 0.8); */
        opacity: .8;
        margin-top: 40px;
        /* position: absolute; */
        /* right: -50px; */
        /* top: -60px; */
        transition: all 1s ease-in 1s;
    }
    > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-end;
        padding: 20px;
        margin-bottom: 10px;
        /* background-color: pink; */
        
        h5, span {
            color: ${({ theme }) => theme.colors.dark.dark};
        }
        

        > div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;
        }



        span {
            font-size: 1.5rem;
            /* color: ${({ theme }) => theme.colors.dark.dark}; */
        }
    }
`

export function CardProfile(props: CardProfileProps) {
    return (
        <CardBox>
            {/* <ChipIcon/> */}
            <Image
                src={'https://avatars.githubusercontent.com/u/25084493?v=4'}
                width={0}
                height={0}
                sizes="100%"
                alt="Profile Image"
                loading="lazy"
                style={{ width: '110px', height: '110px', objectFit: 'contain' }}
            />
            <div>
                {/* <BrazilIcon/> */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    margin: '10px 0',
                    gap: '5px',
                    opacity: .8
                    // alignSelf: 'center'
                }}>
                    <PhotoshopIcon size="30px" />
                    <FigmaIcon size="30px" />
                    <JavascriptIcon size="30px" />
                    <ReactIcon size="30px" />
                </div>
                <h5>R. Romagnollo</h5>
                <div>
                    <span>renanromagnollo@gmail.com</span>
                    <span>@renanromagnollo</span>
                    <span>brasileiro</span>
                    <span>37 anos</span>
                </div>
            </div>

        </CardBox>
    )
}