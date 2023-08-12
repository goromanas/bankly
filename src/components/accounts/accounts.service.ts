import { config } from '../../config'
import { useQuery } from 'react-query'
import { Account } from '../../../types'

const getAccounts = async () => {
  const { endpoints } = config
  const response = await fetch(endpoints.accounts)
  const data: Account[] = await response.json()

  return data
}

export const useGetAccountsQuery = () => useQuery('accounts', getAccounts)
