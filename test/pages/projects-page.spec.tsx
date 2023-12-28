import Projects from "@/app/projects/page"

import { render, screen } from '@testing-library/react'

describe('Projects Page', () => {
  it('should be render Projects Page', () => {
    render(<Projects />)

    const projectPageElement = screen?.getByTestId('projects-page')
    expect(projectPageElement).toBeInTheDocument()
  })
})