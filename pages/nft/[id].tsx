import type { NextPage } from 'next'
import {Provider} from 'react-redux'
import { useRouter } from 'next/router'
import LoadingpageComponent from '../../components/Loading/Loadingpage.component'
import NFTComponent from '../../components/NFT/NFT.component'
import { NFTProvider } from '../../components/NFT/useNFT'
import store from '../../redux/store'
const Home: NextPage = () => {
  const router = useRouter()
  console.log("ROUTERRR",router.query.id)
  
  return (
    <Provider store = {store}>
    <NFTProvider>
      <NFTComponent id={Number(router.query.id)}/> 
    </NFTProvider>
    </Provider>
  )
}

export default Home
