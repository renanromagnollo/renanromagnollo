import { ReactNode } from "react"
import styled from "styled-components"
import { lighten } from 'polished';
import  Image  from 'next/image';
import Link from "next/link";
import { RichText } from "@/components/RichText";
import { RichTextContent } from "@graphcms/rich-text-types";
// import { RichText } from "@graphcms/rich-text-react-renderer";
interface ProjectProps {
    slug: string
    title: string
    text: {
        raw: RichTextContent
    }
    img?: string  
}
interface CardProjectProps {
    project: ProjectProps
}

interface CardBoxProps {
    children: ReactNode
}

const CardBox = styled.div<CardBoxProps>`
    background-color: ${({theme}) => lighten(0.1, theme.colors.dark.dark)};
    min-width: 310px;
    max-width: 15vw;
    height: 250px;
    position: relative;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* padding: 7px; */
    cursor: pointer;
    z-index: '20';
    border: 6px solid;
    border-radius: 5px;
    border-color: ${({theme}) => theme.colors.dark.default};
    box-shadow: 3px 3px 6px 2px rgba(0, 0, 0, .4);
    transform: skew(20deg);

   
 
`

const Folder = styled.div`
    /* content: 'teste'; */
    height: 75%;
    border-top: solid 5px;
    border-color: ${({theme}) => theme.colors.light.dark};
    /* margin-top: 10vh; */
    width: 100%;
    /* height: 100%; */
    position: absolute;
    z-index: '1000000';
    background-color: ${({theme}) => theme.colors.dark.dark};
    bottom: 0;
    left: -30px;
    box-shadow: 0 -1px 3px 1px rgba(0, 0, 0, .4);
    transform: skew(20deg);
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    h6 {
        margin-top: 10px;
        margin-right: 15px;
        color: ${({theme}) => theme.colors.light.dark};
    }

    
`

const InfosCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const ContentCard = styled.div`
    height: 100%;

    > h5 {
        color: ${({theme}) => theme.colors.primary.default};
        &:hover {
            color: ${({theme}) => theme.colors.primary.light};

        }
        
    }

    /* &::before {
        position: absolute;
        content: '';
        background-color: ${({theme}) => theme.colors.dark.dark};
        width: 100%;
        height: 15%;
        top: 0;
        z-index: '2000';
        border-bottom: solid 3px;
        border-color: ${({theme}) => theme.colors.light.dark};
        box-shadow: 0 2px 3px 1px rgba(0, 0, 0, .4);
    } */
`



export function CardProject({project} : CardProjectProps){
    console.log('CardProject {project}: ', project)
    return(
            <Link href={`/projects/${project?.slug}`}>
                <CardBox>
                    <Folder>
                        <h6>{project?.title}</h6>
                    </Folder>
                    <InfosCard>

                        <Image
                            src={project?.img[0]?.url}
                            width={0}
                            height={0}
                            alt="Image"
                            loading="lazy"
                            sizes="100vw"
                            style={{ width: '100%', height: '50%', objectFit: 'cover'}}
                            unoptimized
                            
                        />
                    
                        <ContentCard>
                            <h5>{project ? project.title : 'Título'}</h5>
                            {!project ? <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eum est placeat possimus voluptas voluptatem minima labore, cupiditate officiis quasi.</p>
                                : <div><RichText content={project?.subtitle?.raw}/></div>
                            }
                            <div>Tecnologies...</div>
                            <span>Saiba mais</span>

                        </ContentCard>
                    </InfosCard>
                </CardBox>
        </Link>

    )
}