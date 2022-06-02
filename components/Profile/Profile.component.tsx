import React, { useState } from 'react'
import { useUser } from '../../services/user.service'
import { Divider, Waves } from '../../styles/Components.styled'
import { getMyNFTs } from '../../web3/web3Utils'
import NftsComponent from '../NFTs/Nfts.component'
import NavigatorComponent from './Navigator.component'
import { ProfileContainer } from './Profile.styled'

const ProfileComponent = () => {
  const {user} = useUser()
  console.log("USER CONT", user);
  
  return (
    <ProfileContainer>
        <Divider mt='100px'/>
            <NavigatorComponent/>
        <Divider mb='20px'/>
        {/* <Waves height={600} mt={300}/> */}
        {user?.steamId  ? <NftsComponent getNfts={getMyNFTs}/> : null}
    </ProfileContainer>
  )
}

export default ProfileComponent