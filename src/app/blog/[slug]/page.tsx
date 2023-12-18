import { BlogProps } from "@/types/blog-types";
import Link from "next/link";


export default function BlogPage(props : BlogProps){
    return(
        <Link href={}>
            <h1>{props.title}</h1>
        
        </Link>
    )
}