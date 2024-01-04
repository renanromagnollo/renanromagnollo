import Projects from "@/app/projects/page"
import { render, screen } from "@testing-library/react"

describe('Projects Page', () => {
  it('should be render correctly', () => {
    render(<Projects />)

    expect(screen.findByRole('heading')).toBeTruthy()
  })
})