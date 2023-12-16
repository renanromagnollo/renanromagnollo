import { BlogProps } from "@/types/blog-types";
import { ProjectProps } from "@/types/project-types";
import { ReactNode, createContext, useEffect, useState } from "react";

interface dataProps {
    // heros: HeroProps[]
    projects: ProjectProps[]
    blog: BlogProps[]
    setProjects: (projects: ProjectProps[]) => void
    setBlog: (blog: BlogProps[]) => void
    updateAll: (projects: ProjectProps[],blog: BlogProps[]) => void

}

interface updateAllProps {
    projects: ProjectProps[]
    blog: BlogProps[]
}

const data: dataProps = {
    // heros: [],
    projects: [],
    blog: [],
    setProjects: () => {},
    setBlog: () => {},
    updateAll: () => {}
}

export const DataContext = createContext<dataProps>(data)

function DataProvider({children}: {children: ReactNode}) {
    
    const [state, setState] = useState(data)

    useEffect(() => {
        console.log('state of DataProvider: ', state)
    }, [state])

    function updateState(key: string, value: any) {
        console.log('updateState: ', value)
        setState({
            ...state,
            [key]: value
        })
    }
    function updateProjectsNBlog(projects: ProjectProps[], blog: BlogProps[]) {
        setState({
            ...state,
            projects,
            blog
        })
    }

    return (
        <DataContext.Provider value={{
            projects: state.projects,
            blog: state.blog,
            setProjects: projects => updateState('projects', projects),
            setBlog: blog => updateState('blog', blog),
            updateAll: (projects, blog) => updateProjectsNBlog(projects, blog)
        }}>{children}</DataContext.Provider>
    )

}

export default DataProvider