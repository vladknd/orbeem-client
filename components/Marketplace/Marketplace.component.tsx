//_______________GLOBAL-IMPORTS___________________
import React, { useEffect, useState } from 'react'
//_______________LOCAL-IMPORTS____________________
//STYLED-COMPONENTS_______________________________
import { 
    Illustration, 
    MarketplaceContainer, 
    Market,  
    HeaderContainer
} from './Marketplace.styled'
import { 
    Divider, 
    GlowText, 
    Waves 
} from '../../styles/Components.styled'
//WEB-3_______________________________
import { getNFTs, INFT } from '../../web3/web3Utils'
import NftsComponent from '../NFTs/Nfts.component'


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
            <Waves mt={150} height={600}/>
            <Divider mt="20px"/>
                <HeaderContainer>
                <GlowText size={50}>RUNE COLLECTION</GlowText>
                </HeaderContainer>
            <Divider mb="20px"/>
            
            <NftsComponent getNfts={getNFTs} gridSize="1fr 1fr 1fr 1fr 1fr"/>
        </Market>
        <Divider/>

    </MarketplaceContainer>
  )
}

export default MarketplaceComponent