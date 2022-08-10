//_______________GLOBAL-IMPORTS___________________
import React, { useEffect} from 'react'
//_______________LOCAL-IMPORTS____________________
//STYLED-COMPONENTS_______________________________
import { 
    Illustration, 
    MarketplaceContainer, 
    Market,  
    HeaderContainer,
    CollectionContainer
} from './Marketplace.styled'
import { 
    Divider, 
    GlowText, 
    Waves 
} from '../../styles/Components.styled'
//COMPONENTS______________________________________
import NftsComponent from '../NFTs/Nfts.component'
//REDUX___________________________________________
import { fetchMarketNFT } from '../../redux/MarketNFT/MarketNFT.thunks'
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks'


//MARKETPLACE-COMPONENT:______________________________________________________________________________________________
const MarketplaceComponent = () => {
  //REDUX____________________________________________________
  const dispatch = useAppDispatch()
  const { error, items, loading } = useAppSelector(state => state.MarketNFT)
  useEffect(() => {
    dispatch(fetchMarketNFT())
  },[])

  return (
    <MarketplaceContainer>
        <Illustration/>
        <Divider/>
        
        <Market>
            <Waves mt={150} height="600px"/>
            <Divider mt="20px"/>
                <HeaderContainer>
                <GlowText>RUNE COLLECTION</GlowText>
                </HeaderContainer>
            <Divider mb="20px"/>
            
            <CollectionContainer>
              {items ? <NftsComponent loading={loading} items={items} gridSize="1fr 1fr 1fr 1fr 1fr"/> : null}
            </CollectionContainer>
        </Market>
        <Divider/>

    </MarketplaceContainer>
  )
}

export default MarketplaceComponent
//______________________________________________________________________________________________________________________