
import { RichTextContent } from '@graphcms/rich-text-react-renderer';

interface TechProps {
    name: string
    iconSvg: string
}

export interface ProjectProps {
    slug: string
    title: string
    img: Array<{ url: string }>
    subtitle: {
        raw: RichTextContent
    }
    technologies: TechProps[]
    text: {
        raw: RichTextContent
    }
    githubLink: string

}

export interface ProjectPageProps {
    params: {
        slug: string
    }