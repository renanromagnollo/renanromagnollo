import { render, screen } from '@testing-library/react'

import { CardProjectPage } from '@/components/pages/projects/CardProjectPage'

describe('CardProjectPage', () => {

  it('should be render CardProjectPage', () => {
    render(<CardProjectPage />)

    const cardElement = screen.getByTestId('card-project-page')

    expect(cardElement).toBeInTheDocument()
  })
})