import { AccountItem } from './accountItem'
import './index.css'
import { useGetAccountsQuery } from './accounts.service'
import { Loading } from 'components/loading'
import { Error } from 'components/error'

export const Accounts = () => {
  const { data: accounts, isLoading, isError } = useGetAccountsQuery()

  return (
    <>
      <h1 className='align-left'>Your accounts</h1>
      <div className='accounts'>
        {isError && <Error />}
        {isLoading && <Loading />}
        {accounts?.map(account => (
          <AccountItem account={account} key={account.account_id} />
        ))}
      </div>
    </>
  )
}
