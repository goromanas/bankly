import { render, screen } from '@testing-library/react'
import App from './app'
import { queryClient } from 'queryClient'

afterEach(async () => {
  await queryClient.cancelQueries()
  queryClient.clear()
})
it('App renders without crashing', () => {
  render(<App />)

  expect(screen.getByText('Your accounts')).toBeInTheDocument()
})
