//_______________GLOBAL-IMPORTS___________________
import React, { useEffect } from 'react'

//_______________LOCAL-IMPORTS____________________
//STYLED-COMPONENTS_______________________________
import { ProfileContainer } from './Profile.styled'
import { Divider, Waves } from '../../styles/Components.styled'

//COMPONENTS______________________________________
import NftsComponent from '../NFTs/Nfts.component'
import NavigatorComponent from './Navigator.component'

//REDUX___________________________________________
import { fetchMyNFT } from '../../redux/MyNFT/MyNFT.thunks'
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks'
import { useUser } from '../../services/user.service'

//PROFILE-COMPONENT___________________________________________________________________________________________________________
const ProfileComponent = () => {
  const {user} = useUser()
  console.log("PROFILE-COMPONENT", user);

  //REDUX____________________________________________________
  const dispatch = useAppDispatch()
  const { error, items, loading } = useAppSelector(state => state.MyNFT)
  useEffect(() => {
      dispatch(fetchMyNFT())
  },[])
  return (
    <ProfileContainer>
        <Divider mt='100px'/>
            <NavigatorComponent/>
        <Divider mb='20px'/>
        {/* <Waves height={600} mt={300}/> */}
        {items ? <NftsComponent loading={loading} items={items}/> : null}
    </ProfileContainer>
  )
}

export default ProfileComponent
//__________________________________________________________________________________________________________________________