import { RichTextContent } from '@graphcms/rich-text-react-renderer';

export interface BlogProps {
    // params: {
    //     slug: string
    // }
    slug: string
    title: string
    subtitle: {
        raw: RichTextContent
    } 
    text: {
        raw: RichTextContent
    }
    image?: {
        url: string
    }
}

export interface CardBlogProps {
    title: string
    image: {
        url: string
    }
    slug: string
    subtitle: {
        raw: RichTextContent
    }
    text: {
        raw: RichTextContent
    }
    
}
