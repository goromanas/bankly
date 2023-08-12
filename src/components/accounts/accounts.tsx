import { AccountItem } from './accountItem'
import './index.css'
import { useGetAccountsQuery } from './accounts.service'

export const Accounts = () => {
  const { data: accounts } = useGetAccountsQuery()

  return (
    <>
      <h1 className='align-left'>Your accounts</h1>
      <div className='accounts'>
        {accounts?.map(account => (
          <AccountItem account={account} key={account.account_id} />
        ))}
      </div>
    </>
  )
}
