import './app.css'
import { Home } from './views/home'
import { QueryClientProvider } from 'react-query'
import { queryClient } from 'queryClient'
import { Header } from 'components/header'

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className='app'>
      <Header />
      <Home />
    </div>
  </QueryClientProvider>
)

export default App
