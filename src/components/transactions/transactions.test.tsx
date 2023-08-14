import { fireEvent, render, screen } from '@testing-library/react'
import { TransactionHistory } from '.'
import { QueryClientProvider } from 'react-query'
import { queryClient } from 'queryClient'
import { ReactNode } from 'react'

const Wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

afterEach(async () => {
  await queryClient.cancelQueries()
  queryClient.clear()
})

const renderWithQuery = (component: React.ReactElement<any, string | React.JSXElementConstructor<any>>) =>
  render(<Wrapper>{component}</Wrapper>)

describe('transaction history', () => {
  test('the expenses tab should be shown by default', async () => {
    renderWithQuery(<TransactionHistory />)

    expect(await screen.findByText('Transaction History')).toBeInTheDocument()

    const expensesTabTrigger = screen.getByRole('tab', {
      name: 'Expenses'
    })

    expect(expensesTabTrigger).toHaveAttribute('data-state', 'active')

    const expensesTable = await screen.findByRole('table', {
      name: 'Expenses'
    })

    expect(expensesTable).toBeInTheDocument()
    expect(screen.getByText('-£20.25')).toBeInTheDocument()
  })

  test('changing between the expenses and income tabs should show different transactions', async () => {
    renderWithQuery(<TransactionHistory />)

    const expensesTabTrigger = await screen.findByRole('tab', {
      name: 'Expenses'
    })
    const incomeTabTrigger = await screen.findByRole('tab', {
      name: 'Income'
    })
    const expensesTable = await screen.findByRole('table', {
      name: 'Expenses'
    })
    const incomeTable = screen.queryByRole('table', {
      name: 'Income'
    })

    expect(expensesTable).toBeInTheDocument()
    expect(incomeTable).not.toBeInTheDocument()

    expect(await screen.findByText('-£20.25')).toBeInTheDocument()

    fireEvent.mouseDown(incomeTabTrigger)

    expect(incomeTabTrigger).toHaveAttribute('data-state', 'active')
    expect(expensesTabTrigger).toHaveAttribute('data-state', 'inactive')
    expect(screen.queryByText('-£20.25')).not.toBeInTheDocument()
  })
})
