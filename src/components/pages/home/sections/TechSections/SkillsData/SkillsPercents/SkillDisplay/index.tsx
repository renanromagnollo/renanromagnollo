import styled from "styled-components"

interface SkillDisplayProps {
    title: string
    percent: number
}

const ContainerDisplay  = styled.div`
    width: 15vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    > div {
        width: inherit;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
`

interface BarPercentProps {
    percent: number
}

const BarPercent = styled.div<BarPercentProps>`
    content: '';
    width: 100%;
    height: 7px;
    background-color: ${({theme}) => theme.colors.light.dark};
    border-radius: 2px;
    
    &::before {
        content: '';
        width: ${({percent}) => `${percent.toString()}%`};
        height: inherit;
        background-color: ${({theme}) => theme.colors.primary.default};
        border-radius: inherit;

    }
`

export function SkillDisplay({title='Skill', percent=50} : SkillDisplayProps){
    return(
        <ContainerDisplay>
            <div>
                <h6>{title}</h6>
                <span>{percent}%</span>
            </div>
            <BarPercent percent={percent}/>
        </ContainerDisplay>
    )
}