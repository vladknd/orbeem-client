import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import NFTComponent from '../../components/NFT/NFT.component'
import { NFTProvider } from '../../components/NFT/useNFT'

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <NFTProvider>
      <NFTComponent id={Number(router.query.id)}/>
    </NFTProvider>
  )
}

export default Home
