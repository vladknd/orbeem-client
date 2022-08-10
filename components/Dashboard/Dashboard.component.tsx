//_______________GLOBAL-IMPORTS___________________
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
//_______________LOCAL-IMPORTS____________________
//STYLED-COMPONENTS_______________________________
import { ProfileContainer, ContentContainer, NFTFilters, GamesTab, GamesContainer, NFTTab } from './Dashboard.styled'
import { MatchContainer, MatchHeader } from './Dota/Dota.component.styled'

//COMPONENTS______________________________________
import NftsComponent from '../NFTs/Nfts.component'
import NavigatorComponent from './Navigator.component'
import GameComponent from './Game.component'
import LoadingComponent from '../Loading/Loading.component'
import DotaComponent from './Dota/Dota.component'
import InfoFieldComponent from '../Common/InfoField.component'
import { DashboardLootboxComponent } from './Lootbox.component'
//REDUX___________________________________________
import { fetchMyNFT } from '../../redux/Profile/Profile.thunks'
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks'
import { PROFILE_TAB } from '../../redux/NFT.interfaces'
//SERVICES________________________________________
import { useUser } from '../../services/user.service'
import { useWeb3 } from '../../services/web3.service'


//PROFILE-COMPONENT___________________________________________________________________________________________________________
const ProfileComponent = () => {
  const {user} = useUser()
  console.log("PROFILE-COMPONENT", user);

  //REDUX____________________________________________________
  const dispatch = useAppDispatch()
  const { items, loading, tab } = useAppSelector(state => state.PROFILE)
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
            tab === PROFILE_TAB.MY_NFT ?
              <NFTTab>
                <NftsComponent loading={loading} items={items}/> 
                <NFTFilters></NFTFilters>
              </NFTTab> 
            :
            tab === PROFILE_TAB.MY_GAMES ?
              <GamesTab>
                <GamesContainer>
                  <GameComponent gameIMG="/dota_logo.svg" imgWidth={300} imgHeight={150}
                    dev={false} name={PROFILE_TAB.DOTA}
                  /> 
                  <GameComponent gameIMG="/pubg.svg" imgWidth={150} imgHeight={150}
                    dev={true} name={PROFILE_TAB.PUBG}
                  /> 
                  <GameComponent gameIMG="/counterStrike.svg" imgWidth={150} imgHeight={150}
                    dev={true} name={PROFILE_TAB.CS}
                  /> 
                </GamesContainer>
                <DashboardLootboxComponent/>
              </GamesTab>
            : 
            tab === PROFILE_TAB.DOTA ?
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