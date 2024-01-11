// 'use client'

import { RichTextContent } from '@graphcms/rich-text-react-renderer'
import { fetchHygraphQuery } from "@/utils/fetchHygraph"
import { RichText } from '@/app/components/RichText'
import { getFakeData } from '@/utils/fakeServer'
import { ProjectPageProps, ProjectProps } from '@/types/project-types'
import Image from 'next/image'
import Link from 'next/link'
import { PathComponent } from '@/components/Path'



const getProjectData = async (slug: string) => {
  try {
    const query = `
    query ProjectInfoQuery {
        project(where: {slug: ${slug}}) {
          slug
          img
          technologies {
            iconSvg
            name
          }
          text {
            raw
          }
        }
      }
    `
    return fetchHygraphQuery(query)
  } catch (error) {
    console.error(error)
  }

}

export default async function ProjectPage({ params }: ProjectPageProps) {

  const data = await getFakeData('projects')
  const selectProject = data.projects.filter(project => project.slug === params.slug)
  console.log('PARAMS: ', params)
  const project: ProjectProps = selectProject[0]
  return project && (
    <div>
      <Image
        src={project?.img[0]?.url}
        width={0}
        height={0}
        alt='Project_Image'
        loading='lazy'
        unoptimized
        sizes='100%'
        style={{ width: '100%', height: '20vh', objectFit: 'cover', opacity: '.4' }}
      // fill={true}
      />
      <h1>{project?.title}</h1>
      <h2><RichText content={project?.subtitle?.raw} /></h2>
      <Link href={project?.githubLink}>GitHub</Link>
      <p><RichText content={project?.text?.raw} /></p>
      <ul>
        {/* {project?.technologies.map((tech, i) => <li key={i}>{tech.name}</li>)} */}
      </ul>
    </div>
  )
}