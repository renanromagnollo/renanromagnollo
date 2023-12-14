import styled from "styled-components"
import { SkillDisplay } from "./SkillDisplay"

interface SkillPercentProps {

}

const ContainerSkillsPercents = styled.div`
    width: 90%;
`
export function SkillsPercents(props : SkillPercentProps){
    return(
        <ContainerSkillsPercents>
            <SkillDisplay/>
        </ContainerSkillsPercents>
    )
}