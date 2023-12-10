import { fetchHygraphQuery } from "@/utils/fetchHygraph"

interface ProjectProps {
    params: {
        slug: string
    }
}

const getProjectData = async () => {
  try {
    const query = `
    query ProjectInfoQuery {
        project(where: {slug: "meuwebsite"}) {
          img
          technologies {
            iconSvg
            name
            startDate
          }
          text {
            raw
          }
        }
        projects
      }
    `
      return fetchHygraphQuery( query )
  } catch (error) {
    console.error(error)
  }
    

}

export default async function Project({params}: ProjectProps) {
    const response = await getProjectData()

    console.log('Response Hygraph ProjectQuery: ', response)
    return (
        <h1>Project: {params.slug}</h1>        
    )
}