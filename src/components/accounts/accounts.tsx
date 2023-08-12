import { AccountItem } from './accountItem'
import './index.css'
import { useGetAccountsQuery } from './accounts.service'
import { Loading } from 'components/loading'

export const Accounts = () => {
  const { data: accounts, isLoading } = useGetAccountsQuery()

  return (
    <>
      <h1 className='align-left'>Your accounts</h1>
      <div className='accounts'>
        {isLoading && <Loading />}
        {accounts?.map(account => (
          <AccountItem account={account} key={account.account_id} />
        ))}
      </div>
    </>
  )
}
