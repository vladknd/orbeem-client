import React, { useEffect, useState } from 'react'
import { 
    Illustration, 
    MarketplaceContainer, 
    Market, 
    Items 
} from './Marketplace.styled'
import { Divider, GlowText, Text } from '../../styles/Components.styled'
import { getNFTs } from '../../web3/web3Utils'
import { INFT } from '../../web3/web3Utils'
import NftsComponent from '../NFTs/Nfts.component'
import { Waves } from '../../styles/Components.styled'

const MarketplaceComponent = () => {
    const [nfts, setNfts] = useState<Array<INFT>>([])
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        async function fetchNFTs() {
            const res = await getNFTs()
            setNfts(res)
            setLoading(false)
            console.log("RES", nfts)
        }
        fetchNFTs()
    },[])
  return (
    <MarketplaceContainer>
        <Illustration/>

        <Divider/>
        <Market>
            <Waves mt={120} height={600}/>
            <GlowText m='40px 0px'>RUNE COLLECTION</GlowText>
            <NftsComponent getNfts={getNFTs}/>
        </Market>
        <Divider/>

    </MarketplaceContainer>
  )
}

export default MarketplaceComponent