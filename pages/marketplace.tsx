import type { NextPage } from 'next'
import MarketplaceComponent from '../components/Marketplace/Marketplace.component'
import { useAuthorize } from '../services/auth.service'
import {Provider} from 'react-redux'
import store from '../redux/store'

const Home: NextPage = () => {
  const [authorized, loading] = useAuthorize()  
  return (
    <Provider store={store}>
      <MarketplaceComponent/>
    </Provider>
  )

}

export default Home
