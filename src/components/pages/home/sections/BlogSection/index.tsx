// import { CardContent } from "@/components/Cards/CardContent"
import { CardBlog } from "@/components/Cards/CardBlog"
import { TitleSection } from "@/components/TitleSection"
import { DataContext } from "@/context/data-context"
import { useContext } from "react"
import styled from "styled-components"

interface BlogSectionProps {
    data: any
}

const ContainerBlogSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 8vh;
    background-color: ${({ theme }) => theme.colors.dark.default};
    padding: 50px 0;
`

const CadsArea = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    gap: 70px;
    width: 100%;
    justify-content: center;
    align-items: center;
    /* background-color: blue; */
`

export function BlogSection({ data }: BlogSectionProps) {

    const { blog } = useContext(DataContext)

    // console.log('BlogSection blog: ', blog)
    return (
        <ContainerBlogSection>
            <TitleSection title="Informativo" subtitle="Algumas informações e curiosidades desse universo tecnológico" path="/blog" />
            <CadsArea>
                {blog?.map((post, i) => {
                    // console.log('BLOG: ', post?.image?.url)
                    return <CardBlog key={i} post={post} />
                })}

            </CadsArea>
        </ContainerBlogSection>
    )
}