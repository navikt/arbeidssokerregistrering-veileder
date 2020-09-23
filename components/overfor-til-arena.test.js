import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import OverforTilArena from './overfor-til-arena'

const server = setupServer(
  rest.get(`/api/put-registrering`, (req, res, ctx) => {
    return res(ctx.json({ status: 'SENDT', id: '123' }))
  })
)

const NEXT_PUBLIC_API_URL='/api'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Viser knappen ved oppstart', async () => {
  render(<OverforTilArena id='123' />)

  expect(screen.getByRole('button')).toHaveTextContent('Overfør til Arena')
})

test('Viser suksessmelding ved overføring', async () => {
  render(<OverforTilArena id='123' />)

  fireEvent.click(screen.getByText('Overfør til Arena'))
  
  await waitFor(() => screen.getByText('Brukeren er overført'))

  expect(screen.getByText('Brukeren er overført')).toBeTruthy()
})