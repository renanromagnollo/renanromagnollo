import { RichText } from "@/app/components/RichText"
import { ProjectProps } from "@/types/project-types"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

const BoxCard = styled.section`
  max-width: 1000px;
  /* width: 600px; */
  /* height: 30vh; */
  padding: 30px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.dark.default};

  > div {
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
  }
`

export function CardProjectPage({ data, key }: ProjectProps) {

  console.log('data CardProjectPage: ', data)
  return (
    <BoxCard key={key}>
      <Image
        src={data.img[0].url || 'https://place-hold.it/650x500'}
        alt="project-image"
        width={0}
        height={0}
        loading="lazy"
        sizes="100%"
        style={{ width: '200px', height: '190px', objectFit: 'cover' }}
        unoptimized
      />
      {/* <div>

      </div> */}
      <div>

        <h3>{data?.title}</h3>
        <p style={{ height: '100px', overflow: 'hidden', textAlign: 'justify', marginBottom: '5px' }}>{<RichText content={data?.text?.raw} />}</p>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          {data?.technologies?.map(tech => <h6 key={tech.name}>{tech.name}</h6>)}
          <Link href={`/projects/${data?.slug}`}><button>Saiba mais</button></Link>
        </div>
      </div>
    </BoxCard >
  )
}