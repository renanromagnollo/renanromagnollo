import Image from "next/image"
import styled from "styled-components"
import { light } from '@/styles/themes/light';
import { ReactIcon } from "@/components/icons/reactIcon";
import { PhotoshopIcon } from "@/components/icons/photoshopIcon";
import { FigmaIcon } from "@/components/icons/figmaIcon";
import { JavascriptIcon } from "@/components/icons/javascriptIcon";

interface CardProfileProps {

}

const CardBox = styled.div`
    width: 250px;
    height: 400px;
    /* padding: 5vh; */
    /* background-color: ${({theme}) => theme.colors.dark.light}; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    box-shadow: 4px 4px 9px 1px rgba(0, 0, 0, 0.2);
    border: solid 3px rgba(0, 0, 0, .3);
    /* position: relative; */
    overflow: hidden;
    cursor: pointer;
    

    &:hover {
        img {
            filter: none
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

        border-radius: 50%;
        border: solid 3px ${({theme}) => theme.colors.light.dark};
        filter: saturate(0) grayscale(20%);
        /* box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); */
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
            color: ${({theme}) => theme.colors.dark.dark};
        }
        

        > div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;
        }



        span {
            font-size: 1.5rem;
            /* color: ${({theme}) => theme.colors.dark.dark}; */
        }
    }
`

export function CardProfile(props : CardProfileProps){
    return(
        <CardBox>
            <Image 
                src={'https://avatars.githubusercontent.com/u/25084493?v=4'}
                width={0}
                height={0}
                sizes="100%"
                alt="Profile Image"
                loading="lazy"
                style={{width: '120px', height:'120px', objectFit: 'contain'}}
            />
            <div>
                <div style={{display: 'flex', flexDirection: 'row', margin: '10px 0'}}>
                    <ReactIcon/>
                    <PhotoshopIcon/>
                    <FigmaIcon/>
                    <JavascriptIcon/>
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