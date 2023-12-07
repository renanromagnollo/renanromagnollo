import Image from "next/image"
import styled from "styled-components"

interface CardProfileProps {

}

const CardBox = styled.div`
    width: 20vw;
    height: 60vh;
    padding: 5vh;
    background-color: ${({theme}) => theme.colors.dark.light};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;

    > img {
        border-radius: 50%;
        border: solid 3px ${({theme}) => theme.colors.light.dark};
        filter: saturate(0);
        box-shadow: 2px 2px;
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
                style={{width: '100px', height:'100px', objectFit: 'contain'}}
            />
            <div>
                <h5>brasileiro</h5>
                <h5>37 anos</h5>
            </div>
        </CardBox>
    )
}