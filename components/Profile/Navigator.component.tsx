//_______________GLOBAL-IMPORTS___________________
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
//_______________LOCAL-IMPORTS____________________
import {URIs} from "../../config"
//STYLED-COMPONENTS_______________________________
import { 
    AccountContainer, 
    AvatarContainer, 
    NavigatorContainer, 
    SignedContainer, 
    UsernameContainer,
    LinkContainer,
    Links,
    UnsignedContainer,
    GlowContainer
} from './Profile.styled'
import { 
    Button1, 
    GlowText, 
    Text 
} from '../../styles/Components.styled'
//SERVICES_______________________________________
import { useUser } from '../../services/user.service'
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks'
import { profileActions } from '../../redux/Profile/Profile.slice'
import { PROFILE_TAB } from '../../redux/NFT.interfaces'
import LoadingComponent from '../Loading/Loading.component'


//NAVIGATOR-LINK__________________________________________________________________________________________________________
export interface INavigatorTab {
    onClick(): void;
    text: string;
}
const NavigatorTab = (props: INavigatorTab) => {
    return <LinkContainer style={{cursor:"pointer"}} onClick={props.onClick}>{props.text}</LinkContainer>
}
//_________________________________________________________________________________________________________________________


//SIGNED-COMPONENT________________________________________________________________________________________________________
const SignedComponent = () => {
    const {user}= useUser()

    //REDUX:
    const dispatch = useAppDispatch()
    const { error, items, loading, tab } = useAppSelector(state => state.PROFILE)
    return (
        <SignedContainer>
            <AccountContainer>
                <AvatarContainer image="/avatar.jpg"></AvatarContainer>
                <UsernameContainer>{user?.username}</UsernameContainer>
                
            </AccountContainer>
            
            <GlowContainer>
                <GlowText size={40}>DASHBOARD</GlowText>
            </GlowContainer>
            <Links>
                    <NavigatorTab text="MY NFTS" onClick={()=> {
                        dispatch(profileActions.setTabMyNFT(PROFILE_TAB.MY_NFT))
                    }}/>
                    <NavigatorTab text="MY ACCOUNTS" onClick={()=> {
                        dispatch(profileActions.setTabMyNFT(PROFILE_TAB.MY_GAMES))
                    }}/>
                </Links>
        </SignedContainer>
    )
}
//_________________________________________________________________________________________________________________________


//UNSIGNED-COMPONENT_______________________________________________________________________________________________________
const UnsignedComponent = () => {
    const router = useRouter()

    return (
        <UnsignedContainer>
            <Image src="/steam.svg" width={450} height={450}/>
            <Text size={20} opacity={0.5} m="0px 500px">
                TO Start earning rewards and buy Our nfts, the players have to link their steam account to orbeem ECosystem. This is done by minting a unique avatar nft. please enter the following data into the corresponding fields.
            </Text>
            <Button1 width={200} height={50} mt={30} mb={30}
                onClick={() => router.push(`${URIs.apiURI}/api/auth/steam`)}
            >
                VERIFY
            </Button1>
        </UnsignedContainer>
    )
}
//_________________________________________________________________________________________________________________________


//NAVIGATOR-COMPONENT__________________________________________________________________________________________________________________
const NavigatorComponent = () => {
  const {user} = useUser()

  if(!user) return <LoadingComponent/>
  return (
    <NavigatorContainer>

        {
            user.steamId ? <SignedComponent/> : <UnsignedComponent/>
            
            // steamId ? <SignedComponent/> : <UnsignedComponent/>
        }
    </NavigatorContainer>
  )
}

export default NavigatorComponent
//____________________________________________________________________________________________________________________________