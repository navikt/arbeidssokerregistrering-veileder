import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import OverforTilArena from './overfor-til-arena'

const server = setupServer(
  rest.get(`/api/put-registrering`, (req, res, ctx) => {
    const id = req.url.searchParams.get('id')
    return res(ctx.json({ status: 'SENDT', id }))
  })
)

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

test('Viser feilmelding ved overføring som feiler', async () => {
  server.use(
    rest.get('/api/put-registrering', (req, res, ctx) => {
      const id = req.url.searchParams.get('id')
      return res(ctx.json({ status: 'FEIL', id }))
    })
  )

  render(<OverforTilArena id='123' />)

  fireEvent.click(screen.getByText('Overfør til Arena'))
  
  await waitFor(() => screen.getByText('Noe gikk galt under overføringen'))

  expect(screen.getByText('Noe gikk galt under overføringen')).toBeTruthy()
})