import { BlogProps } from "@/types/blog-types";
import { ProjectProps } from "@/types/project-types";
import { ReactNode, createContext, useState } from "react";

interface dataProps {
    // heros: HeroProps[]
    projects: ProjectProps[]
    blog: BlogProps[]
    setProjects: (projects: ProjectProps[]) => void
    setBlog: (projects: BlogProps[]) => void
}

const data: dataProps = {
    // heros: [],
    projects: [],
    blog: [],
    setProjects: () => {},
    setBlog: () => {} 
}

export const DataContext = createContext<dataProps>(data)

function DataProvider({children}: {children: ReactNode}) {
    
    const [state, setState] = useState(data)

    function updateState(key: string, value: any) {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <DataContext.Provider value={{
            projects: state.projects,
            blog: state.blog,
            setProjects: projects => updateState('projects', projects),
            setBlog: blog => updateState('blog', blog)
        }}>{children}</DataContext.Provider>
    )

}

export default DataProvider