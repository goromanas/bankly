import { Accounts } from '../../components/accounts'
import { TransactionHistory } from '../../components/transactions'

export const Home = () => (
  <main className='container'>
    <Accounts />
    <TransactionHistory />
  </main>
)
