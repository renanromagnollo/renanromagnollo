import { BlogProps } from "@/types/blog-types";


export default function BlogPage({params} : BlogProps){
    return(
        <h1>{params.slug}</h1>
    )
}