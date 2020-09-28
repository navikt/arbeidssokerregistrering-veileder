import { render, screen, waitFor } from '@testing-library/react'
import App from '../pages/index'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(
      screen.getByTitle('Venter...')
    ).toBeTruthy()
  })
})
