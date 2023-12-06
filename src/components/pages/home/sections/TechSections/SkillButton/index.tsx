import styled from "styled-components"
import { light } from '@/styles/themes/light';

interface SkillButtonProps {
    title?: string
    subtitle?: string
    icon?: string
}


const SkillButtonTag = styled.button`
    width: 20vw;
    height: 100px;
    display: flex;
    flex-direction: column;
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

export default function SkillButton({title='Skill Button'} : SkillButtonProps){
    return(
        <SkillButtonTag>
            <TitlesArea>
                <h6>{title}</h6>
                <span>Lorem ipsum dolor sit.</span>
            </TitlesArea>
        </SkillButtonTag>
    )
}