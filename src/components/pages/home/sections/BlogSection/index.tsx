// import { CardContent } from "@/components/Cards/CardContent"
import { CardTitle } from "@/components/Cards/CardTitle"
import { TitleSection } from "@/components/TitleSection"
import styled from "styled-components"

interface BlogSectionProps {

}

const ContainerBlogSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
    /* background-color: pink; */
    padding: 20px 0;
`

const CadsArea = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: blue; */
`

export function BlogSection(props : BlogSectionProps){
    return(
        <ContainerBlogSection>
            <TitleSection title="Blog"/>
            <CadsArea>
                <CardTitle/>
                <CardTitle/>
                <CardTitle/>
            </CadsArea>
        </ContainerBlogSection>
    )
}