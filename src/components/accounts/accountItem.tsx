import { formatCurrency } from 'components/transactions/transactions.utils'
import type { Account } from '../../../types'
import './index.css'

type Props = {
  account: Account
}

export const AccountItem = ({
  account: {
    balance: {
      amount: { currency, value }
    }
  }
}: Props) => (
  <div className='account'>
    <div className='total'>Total {currency}</div>
    <strong>{formatCurrency(value, 'en-GB', { currency })}</strong>
  </div>
)
