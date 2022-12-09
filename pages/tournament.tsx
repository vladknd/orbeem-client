import type { NextPage } from 'next'
import MarketplaceComponent from '../components/Marketplace/Marketplace.component'
import { useAuthorize } from '../services/auth.service'
import {Provider} from 'react-redux'
import store from '../redux/store'
import TournamentComponent from '../components/Tournament/Tournament.component'

const Home: NextPage = () => {
  const {authorized, loading} = useAuthorize()  
  return (
    <TournamentComponent/>
  )

}

export default Home
