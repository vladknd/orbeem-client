//_______________GLOBAL-IMPORTS___________________
import React, { useEffect} from 'react'
//_______________LOCAL-IMPORTS____________________
//STYLED-COMPONENTS_______________________________
import { 
    Illustration, 
    MarketplaceContainer, 
    Market,  
    HeaderContainer,
    CollectionContainer,
    ContentContainer
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
import TitleComponent from '../Common/Title.component'
import MarketplaceGames from './Marketplace.games'
import MarketplaceCollections from './Marketplace.collections'
import { TAB } from '../../redux/Marketplace/Marketplace.interfaces'


//MARKETPLACE-COMPONENT:______________________________________________________________________________________________
const MarketplaceComponent = () => {
  //REDUX____________________________________________________
  const dispatch = useAppDispatch()
  const { error, type, loading } = useAppSelector(state => state.MARKETPLACE)
  useEffect(() => {
    dispatch(fetchMarketNFT())
  },[])

  return (
    <MarketplaceContainer>
        <TitleComponent title={'MARKETPLACE'}/>
        <ContentContainer>
          {/* <MarketplaceGames/> */}
          {
            type.tab == TAB.GAMES ? <MarketplaceGames/> : 
            type.tab == TAB.GAME ? <MarketplaceCollections/> : null
          }
          
        </ContentContainer>









        {/* <Illustration/>
        <Divider/>
        
        <Market>
            <Waves mt={150} height="600px"/>
            <Divider mt="20px"/>
                <HeaderContainer>
                <GlowText>RUNE COLLECTION</GlowText>
                </HeaderContainer>
            <Divider mb="20px"/>
            
            <CollectionContainer>
              {items ? <NftsComponent mode="marketplace" loading={loading} items={items} gridSize=" 1fr 1fr 1fr 1fr 1fr"/> : null}
            </CollectionContainer>
        </Market>
        <Divider/> */}

    </MarketplaceContainer>
  )
}

export default MarketplaceComponent
//______________________________________________________________________________________________________________________