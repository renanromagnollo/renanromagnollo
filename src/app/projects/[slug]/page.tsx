import { RichTextContent } from '@graphcms/rich-text-react-renderer'
import { fetchHygraphQuery } from "@/utils/fetchHygraph"
import { RichText } from '@/components/RichText'
import { getFakeData } from '@/utils/fakeServer'

interface ProjectProps {
  params: {
    slug: string
  }
  text: {
    raw: RichTextContent
  } 
}

const getProjectData = async (slug: string) => {
  try {
    const query = `
    query ProjectInfoQuery {
        project(where: {slug: ${slug}}) {
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
// criar json fake d
//pegar data através do slug
export default async function Project({params}: ProjectProps) {
  console.log('Project page rendered!')
    // const response = await getProjectData(slug)
  const data = await getFakeData('projects')
  const selected = data.projects.filter(project => project.slug === params.slug)
  console.log('PROJECTs: ', data.projects)
  console.log('SELECTED: ', selected)
  // const selected = data.filter(project => (project.slug === params.slug))
  // console.log('SELECTED Project: ', selected)
    // console.log('Response Hygraph ProjectQuery: ', response)
    return (
        <div>
          <h1>Project: {selected[0]?.title}</h1>
          <p><RichText content={selected[0]?.text?.raw}/></p>
        </div>
    )
}