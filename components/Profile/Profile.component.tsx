//_______________GLOBAL-IMPORTS___________________
import React, { useEffect, useState } from 'react'

//_______________LOCAL-IMPORTS____________________
//STYLED-COMPONENTS_______________________________
import { ProfileContainer, RightContainer } from './Profile.styled'
import { Divider, Waves } from '../../styles/Components.styled'

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
        <Divider mt='100px'/>
            <NavigatorComponent/>
        <Divider mb='20px'/>
        {/* <Waves height={600} mt={300}/> */}
        
        <RightContainer>
        { 
          tab === PROFILE_TAB.MY_NFT ?
            <NftsComponent loading={loading} items={items}/> :
          tab === PROFILE_TAB.MY_GAMES ?
            <GameComponent/> 
          : null
        }
        </RightContainer>
      
    </ProfileContainer>
  )
}

export default ProfileComponent
//__________________________________________________________________________________________________________________________