import { TitleSection } from "@/components/TitleSection"
import styled from "styled-components"

interface BlogSectionProps {

}

const ContainerBlogSection = styled.section`
    width: 100%;
`
export function BlogSection(props : BlogSectionProps){
    return(
        <ContainerBlogSection>
            <TitleSection title="Blog"/>
        </ContainerBlogSection>
    )
}