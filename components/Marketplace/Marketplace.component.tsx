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

import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks'
import TitleComponent from '../Common/Title.component'
import MarketplaceGames from './Marketplace.games'
import MarketplaceCollections from './Marketplace.collections'
import { TAB } from '../../redux/Marketplace/Marketplace.interfaces'
import MarketplaceNfts from './Marketplace.nfts'
import LoadingComponent from '../Loading/Loading.component'
import MarketplaceBreadcrumbs from './MarketplaceBreadcrumbs'
import NftsSorting from './NFTs.sorting'


//MARKETPLACE-COMPONENT:______________________________________________________________________________________________
const MarketplaceComponent = () => {
  //REDUX____________________________________________________
  const { error, tab, loading, breadcrumbs} = useAppSelector(state => state.MARKETPLACE)

  return (
    <MarketplaceContainer>
        <TitleComponent title={'MARKETPLACE'} 
          leftComponent={MarketplaceBreadcrumbs}
          rightComponent={tab === TAB.COLLECTION ? NftsSorting : undefined}
        />
        <ContentContainer>
          {loading ? <LoadingComponent/> :null}
          {
            tab == TAB.GAMES ? <MarketplaceGames/> : 
            tab == TAB.GAME ? <MarketplaceCollections/> : 
            tab == TAB.COLLECTION ? <MarketplaceNfts/> : null
          }
          
        </ContentContainer>
    </MarketplaceContainer>
  )
}

export default MarketplaceComponent
//______________________________________________________________________________________________________________________