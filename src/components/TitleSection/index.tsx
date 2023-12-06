import styled from "styled-components"

interface TitleSectionProps {

}

const ContainerTag = styled.div`
        width: 100%;
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
        /* background-color: pink; */

        > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        h4 {
            color: ${({theme}) =>  theme.colors.primary.default}
        }

        h1 {
            color: ${({theme}) => theme.colors.light.dark}
        }

    `
export function TitleSection(props : TitleSectionProps){
    return(
        <ContainerTag>
            <div>
                <h4>/projects</h4>
                <h1>My Personal Projects</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

            </div>
        </ContainerTag>
    )
}