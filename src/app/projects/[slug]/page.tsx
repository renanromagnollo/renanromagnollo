
interface ProjectProps {
    params: {
        slug: string
    }
}

export default function Project({params}: ProjectProps) {
    return (
        <h1>Project: {params.slug}</h1>        
    )
}