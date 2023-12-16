import { RichTextContent } from '@graphcms/rich-text-react-renderer';

export interface BlogProps {
    params: {
        slug: string
    }
    slug: string
    title: string
    subtitle: {
        raw: RichTextContent
    } 
    text: {
        raw: RichTextContent
    }
    image?: string
}