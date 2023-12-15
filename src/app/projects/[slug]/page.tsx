import { RichTextContent } from '@graphcms/rich-text-react-renderer'
import { fetchHygraphQuery } from "@/utils/fetchHygraph"
import { RichText } from '@/components/RichText'

interface ProjectProps {
    params: {
        slug: string
        text: {
          raw: RichTextContent
        } 
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
      }
    `
      return fetchHygraphQuery( query )
  } catch (error) {
    console.error(error)
  }
    

}

export default async function Project({params}: ProjectProps) {
    // const response = await getProjectData()
  console.log('Project page: ', params?.text?.raw)
    // console.log('Response Hygraph ProjectQuery: ', response)
    return (
        <div>
          <h1>Project: {params.slug}</h1>
          <p><RichText content={params?.text?.raw}/></p>
        </div>
    )
}