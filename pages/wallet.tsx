import type { NextPage } from 'next'

import WalletsComponent from '../components/Wallet/Wallets.component'
import { useAuthorize } from '../services/auth.service'
import {Provider} from 'react-redux'
import store from '../redux/store'

const Wallet: NextPage = () => {
  const {authorized, loading} = useAuthorize()    
  return(
    <Provider store={store}>
      <WalletsComponent/>
    </Provider>
  )
  
  
}

export default Wallet
