//_______________GLOBAL-IMPORTS___________________
import React, { useEffect, useState } from 'react'

//_______________LOCAL-IMPORTS____________________
//STYLED-COMPONENTS_______________________________
import { ProfileContainer, ContentContainer, NFTFilters } from './Profile.styled'
import { Box2,Box1, Divider, Waves } from '../../styles/Components.styled'

//COMPONENTS______________________________________
import NftsComponent from '../NFTs/Nfts.component'
import NavigatorComponent from './Navigator.component'

//REDUX___________________________________________
import { fetchMyNFT } from '../../redux/Profile/Profile.thunks'
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks'
import { PROFILE_TAB } from '../../redux/NFT.interfaces'
//SERVICES________________________________________
import { useUser } from '../../services/user.service'
import GameComponent from './Game.component'
import { useWeb3 } from '../../services/web3.service'
import { MatchContainer, MatchHeader } from './Game.styled'
import InfoFieldComponent from '../Common/InfoField.component'

const Match = () => {
  const matchData = useAppSelector(state => state.DOTA.match)

  return (
    <MatchContainer>
      <MatchHeader>LATEST MATCH</MatchHeader>
      <InfoFieldComponent
        image="/crystal.svg" 
        attribute="KILLS" 
        value={matchData?.kills.toString()}
        margin="0px 0px 10px 0px"
      />
       <InfoFieldComponent
        image="/crystal.svg" 
        attribute="DEATHS" 
        value={matchData?.deaths.toString()}
        margin="0px 0px 10px 0px"
      />
       <InfoFieldComponent
        image="/crystal.svg" 
        attribute="ASSISTS" 
        value={matchData?.assists.toString()}
        margin="0px 0px 10px 0px"
      />
    </MatchContainer>
  )
  
}

//PROFILE-COMPONENT___________________________________________________________________________________________________________
const ProfileComponent = () => {
  const {user} = useUser()
  console.log("PROFILE-COMPONENT", user);

  //REDUX____________________________________________________
  const dispatch = useAppDispatch()
  const { error, items, loading, tab } = useAppSelector(state => state.PROFILE)
  const {publicAddress} = useWeb3()

  useEffect(() => {
      if(publicAddress) dispatch(fetchMyNFT(publicAddress))
  },[publicAddress])

  return (
    <ProfileContainer>
        <Divider/>
            <NavigatorComponent/>
        <Divider/>

        {user?.steamId ? 
          <ContentContainer>
            { 
              tab === PROFILE_TAB.MY_NFT ?
                <>
                <NftsComponent loading={loading} items={items}/> 
                <NFTFilters></NFTFilters>
                </>
                :
              tab === PROFILE_TAB.MY_GAMES ?
                <>
                <GameComponent/> 
                <Match/>
                </>
              : null
            }
            
            
            
          </ContentContainer> 

        : null}
      
    </ProfileContainer>
  )
}

export default ProfileComponent
//__________________________________________________________________________________________________________________________