import Project from "@/app/projects/[slug]/page"
import { render, screen } from "@testing-library/react"

describe('Project Detail', () => {

  it('should render correctly', async () => {
    // await render(<Project />)
    await render(<Project />)
    // expect(screen.findByRole('heading')).toBeTruthy()
  })
})

// rojectProps {
//   slug: string
//   title: string
//   subtitle: {
//       raw: RichTextContent
//   }
//   img: {
//       url: string
//   }
//   technologies: TechProps[]
//   text: {
//       raw: RichTextContent
//   }
//   githubLink: string

// }