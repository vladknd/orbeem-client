//_______________GLOBAL-IMPORTS___________________
import React, { useEffect } from 'react'
//_______________LOCAL-IMPORTS____________________
//STYLED-COMPONENTS_______________________________
import { ProfileContainer, ContentContainer, GamesTab, GamesContainer, NFTTab, MyNFTContainer } from './Dashboard.styled'

//COMPONENTS______________________________________
import NftsComponent from '../NFTs/Nfts.component'
import NavigatorComponent from './Navigator.component'
import GameComponent from './Game.component'
import DotaComponent from './Dota/Dota.component'
import { DashboardLootboxComponent } from './Lootbox.component'
//REDUX___________________________________________
import { fetchMyNFT } from '../../redux/Dashboard/Dashbaord.thunks'
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks'
import { DASHBOARD_TAB } from '../../redux/Dashboard/Dashboard.interfaces'
//SERVICES________________________________________
import { useUser } from '../../services/user.service'
import { useWeb3 } from '../../services/web3.service'
import FiltersComponent from './Dota/Filters.component'


//PROFILE-COMPONENT___________________________________________________________________________________________________________
const ProfileComponent = () => {
  const {user} = useUser()
  console.log("PROFILE-COMPONENT", user);

  //REDUX____________________________________________________
  const dispatch = useAppDispatch()
  const { filterItems, loading, tab } = useAppSelector(state => state.DASHBOARD)
  const {publicAddress} = useWeb3()

  useEffect(() => {
      if(publicAddress) dispatch(fetchMyNFT(publicAddress, 0))
  },[publicAddress])

  return (
    <ProfileContainer>
      <NavigatorComponent/>
      {user?.verified ? 
        <ContentContainer>
          { 
            tab === DASHBOARD_TAB.MY_NFT ?
              <NFTTab>
                <MyNFTContainer>
                {filterItems ? <NftsComponent mode="dashboard" loading={loading} items={filterItems} gridSize="1fr 1fr 1fr 1fr"/> : null}
                </MyNFTContainer>
                
                <FiltersComponent/>
              </NFTTab> 
            :
            tab === DASHBOARD_TAB.MY_GAMES ?
              <GamesTab>
                <GamesContainer>
                  <GameComponent gameIMG="/dota_logo.svg" imgWidth={300} imgHeight={150}
                    dev={false} name={DASHBOARD_TAB.DOTA}
                  /> 
                  <GameComponent gameIMG="/pubg.svg" imgWidth={150} imgHeight={150}
                    dev={true} name={DASHBOARD_TAB.PUBG}
                  /> 
                  <GameComponent gameIMG="/counterStrike.svg" imgWidth={150} imgHeight={150}
                    dev={true} name={DASHBOARD_TAB.CS}
                  /> 
                </GamesContainer>
                <DashboardLootboxComponent/>
              </GamesTab>
            : 
            tab === DASHBOARD_TAB.DOTA ?
              <DotaComponent/>
            :
            null
          }
        </ContentContainer> 
      : null}
      
    </ProfileContainer>
  )
}

export default ProfileComponent
//__________________________________________________________________________________________________________________________