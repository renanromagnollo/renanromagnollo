import styled from "styled-components"

interface TitleSectionProps {
    path?: string
    title: string
    subtitle?: string
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
export function TitleSection({title='Section Title', path='/path', subtitle=`lorem`}: TitleSectionProps){
    let sub = subtitle === 'lorem' ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' : subtitle
    
    return(
        <ContainerTag>
            <div>
                <h4>{path}</h4>
                <h1>{title}</h1>
                <p>{sub}</p>

            </div>
        </ContainerTag>
    )
}