// 'use client'

import { RichTextContent } from '@graphcms/rich-text-react-renderer'
import { fetchHygraphQuery } from "@/utils/fetchHygraph"
import { RichText } from '@/app/components/RichText'
import { getFakeData } from '@/utils/fakeServer'
import { ProjectPageProps, ProjectProps } from '@/types/project-types'
import Image from 'next/image'
import Link from 'next/link'
import { PathComponent } from '@/components/Path'
import { relative } from 'path'




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
  const project: ProjectProps = selectProject[0]
  return project && (
    <div>
      <section style={{
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', marginTop: '10px', marginLeft: '10px' }}>
          <h1 >{project?.title}</h1>
          <h2 ><RichText content={project?.subtitle?.raw} /></h2>
          <Link href={project?.githubLink}>GitHub</Link>

        </div>
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

      </section>
      <section style={{ padding: '5vh 15vw', display: 'flex', gap: '30px' }}>
        <p style={{ lineHeight: '2.8vh' }}><RichText content={project?.text?.raw} /></p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', width: '100%' }}>
          <Image
            src={project?.img[0]?.url}
            width={0}
            height={0}
            alt='Project_Image'
            loading='lazy'
            unoptimized
            sizes='100%'
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          // fill={true}
          />
          <Image
            src={project?.img[0]?.url}
            width={0}
            height={0}
            alt='Project_Image'
            loading='lazy'
            unoptimized
            sizes='100%'
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          // fill={true}
          />
          <Image
            src={project?.img[0]?.url}
            width={0}
            height={0}
            alt='Project_Image'
            loading='lazy'
            unoptimized
            sizes='100%'
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          // fill={true}
          />

        </div>

      </section>
    </div>

  )
}
