
import { RichTextContent } from '@graphcms/rich-text-react-renderer';

interface TechProps {
    iconSvg: string
    name: string
}

export interface ProjectProps {
    params: {
        slug: string
    }
    img: string
    technologies: TechProps[]
    text: {
        raw: RichTextContent
    }

}