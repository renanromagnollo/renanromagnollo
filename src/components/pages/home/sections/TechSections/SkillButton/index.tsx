import styled from "styled-components"
import { light } from '@/styles/themes/light';

interface SkillButtonProps {
    data: string
    title?: string
    subtitle?: string
    icon?: string
    click(): (select: any) => null
}


const SkillButtonTag = styled.button`
    width: 20vw;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* border-radius: 5px; */
    outline: none;
    border: none;
    box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.3);
    /* box-shadow: none; */
    background-color: ${({theme}) => theme.colors.dark.light};
    color: ${({theme}) => theme.colors.primary.default};
`
const TitlesArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;

    > span {
        color: ${({theme}) => theme.colors.light.default};
    }
`
const IconArea = styled.div`
    width: 20%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: relative; */
    align-self: flex-end;
    /* margin: 20px; */
    /* padding: 40px 30px; */
    /* margin-bottom: 20px; */
    font-size: large;
    /* background-color: purple; */

    span {
        /* background-color: blue; */
    }
`

export default function SkillButton({data, click} : SkillButtonProps){
    return(
        <SkillButtonTag onClick={() => click(data)}>
            <TitlesArea>
                <h6>{data?.title}</h6>
                <span>{data?.subtitle}</span>
            </TitlesArea>
            <IconArea><span>+</span></IconArea>
        </SkillButtonTag>
    )
}