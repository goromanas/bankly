import { config } from '../../config'
import { useQuery } from 'react-query'
import { Transaction } from '../../../types'

const getTransactions = async () => {
  const { endpoints } = config
  const response = await fetch(endpoints.transactions)
  const data: Transaction[] = await response.json()

  return formatTransactionCategory(data)
}

export const formatTransactionCategory = (data: Transaction[]): Transaction[] =>
  data.map(({ category, ...rest }) => ({ ...rest, category: category.replaceAll('_', ' ') }))

export const useGetTransactionsQuery = () => useQuery('transaction', getTransactions)
