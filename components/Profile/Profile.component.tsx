//_______________GLOBAL-IMPORTS___________________
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
//_______________LOCAL-IMPORTS____________________
//STYLED-COMPONENTS_______________________________
import { ProfileContainer, ContentContainer, NFTFilters, GamesTab, GamesContainer } from './Profile.styled'
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
import DotaMechanics from './Dota.component'
import LoadingComponent from '../Loading/Loading.component'

const Match = () => {
  const dota = useAppSelector(state => state.DOTA)
 
  return (
    <MatchContainer>
      { dota.loading ? 
        <LoadingComponent/> : 
            
        
        dota.match ? 
            <React.Fragment>
            <MatchHeader>LATEST MATCH</MatchHeader>
            <InfoFieldComponent
              image="/crystal.svg" 
              attribute="KILLS" 
              value={dota.match && dota.match.kills ? dota.match?.kills.toString() : ""}
              margin="0px 0px 10px 0px"
            />
            <InfoFieldComponent
              image="/crystal.svg" 
              attribute="DEATHS" 
              value={dota.match && dota.match.deaths ? dota.match.deaths.toString() : ""}
              margin="0px 0px 10px 0px"
            />
            <InfoFieldComponent
              image="/crystal.svg" 
              attribute="ASSISTS" 
              value={dota.match && dota.match.assists ? dota.match?.assists.toString(): ""}
              margin="0px 0px 10px 0px"
            />
            </React.Fragment> : <Image src="/empty.svg" width={200} height={200}/>
            
            
          
      }
      
        
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
      if(publicAddress) dispatch(fetchMyNFT(publicAddress, 0))
  },[publicAddress])

  return (
    <ProfileContainer>
        <Divider/>
            <NavigatorComponent/>
        <Divider/>

        {user?.verified ? 
          <ContentContainer>
            { 
              tab === PROFILE_TAB.MY_NFT ?
                <>
                <NftsComponent loading={loading} items={items}/> 
                <NFTFilters></NFTFilters>
                </>
                :
              tab === PROFILE_TAB.MY_GAMES ?
                <GamesTab>
                  <GamesContainer>
                    <GameComponent gameIMG="/dota_logo.svg" imgWidth={300} imgHeight={150}
                      gameMechanics={DotaMechanics} dev={false} name="DOTA"
                    /> 
                    <GameComponent gameIMG="/pubg.svg" imgWidth={150} imgHeight={150}
                      gameMechanics={DotaMechanics} dev={true} name="PUBG"
                    /> 
                    <GameComponent gameIMG="/counterStrike.svg" imgWidth={150} imgHeight={150}
                      gameMechanics={DotaMechanics} dev={true} name="CS"
                    /> 
                  </GamesContainer>
                  <Match/>
                </GamesTab>
              : null
            }
            
            
            
          </ContentContainer> 

        : null}
      
    </ProfileContainer>
  )
}

export default ProfileComponent
//__________________________________________________________________________________________________________________________