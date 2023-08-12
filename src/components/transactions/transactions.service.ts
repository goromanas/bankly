import { config } from 'config'
import { useQuery } from 'react-query'
import { Transaction } from '../../../types'

const getTransactions = async () => {
  const { endpoints } = config
  const response = await fetch(endpoints.transactions)
  const data: Transaction[] = await response.json()

  return data
}

export const useGetTransactionsQuery = () => useQuery('transaction', getTransactions)
