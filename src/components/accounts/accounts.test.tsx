import { act, render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { queryClient } from 'queryClient'
import { ReactNode } from 'react'
import { Accounts } from './accounts'
import { server } from '../../../jest.setup'
import { rest } from 'msw'
import { accounts } from 'api/data/accounts'

const testQueryClient = new QueryClient({ defaultOptions: { queries: { retry: 0 } } })

const Wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
)

afterEach(async () => {
  await queryClient.cancelQueries()
  queryClient.clear()
})

const renderWithQuery = (component: React.ReactElement<any, string | React.JSXElementConstructor<any>>) =>
  render(<Wrapper>{component}</Wrapper>)

describe('accounts', () => {
  test('loading component should be displayed while data is being fetched', async () => {
    server.use(rest.get('/api/accounts', (_req, res, ctx) => res(ctx.delay(2000), ctx.status(200), ctx.json(accounts))))
    renderWithQuery(<Accounts />)
    const loader = await screen.findByTestId('loader')

    await act(async () => {
      await fetch('/api/accounts')
      expect(loader).toBeInTheDocument()
    })

    await screen.findByTestId('account-eur')
    expect(loader).not.toBeInTheDocument()
  })

  test('error component should be displayed if data is not fetched', async () => {
    server.use(rest.get('/api/accounts', (_req, res, ctx) => res(ctx.status(500), ctx.json(undefined))))
    renderWithQuery(<Accounts />)

    await act(async () => await fetch('/api/accounts'))

    const errorComponent = await screen.findByTestId('error')
    expect(errorComponent).toBeInTheDocument()
  })
})
