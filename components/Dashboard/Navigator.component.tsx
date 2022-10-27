//_______________GLOBAL-IMPORTS___________________
import React from 'react'
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
    GlowContainer,
    VerifyButton,
    VerifyText
} from './Navigator.styled'
import { 
    Button1, 
    Text 
} from '../../styles/Components.styled'
import { NavigatorHeader } from './Navigator.styled'
//COMPONENTS______________________________________
import LoadingComponent from '../Loading/Loading.component'
//SERVICES_______________________________________
import { useUser } from '../../services/user.service'
//REDUX___________________________________________
import { dashboardActions } from '../../redux/Dashboard/Dashboard.slice'
import { 
    useAppDispatch, 
} from '../../redux/reduxHooks'
//INTERFACES______________________________________
import { DASHBOARD_TAB } from '../../redux/Dashboard/Dashboard.interfaces'


//NAVIGATOR-LINK___________________________________________________________________________________________________________
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
    //REDUX_______________________________________________________________________________________________________________
    const dispatch = useAppDispatch()
    //CONTEXT_____________________________________________________________________________________________________________
    const {user}= useUser()
    return (
        <SignedContainer>
            <AccountContainer>
                <AvatarContainer image="/avatar.jpg"></AvatarContainer>
                <UsernameContainer>{user?.username}</UsernameContainer>
            </AccountContainer>
            
            <GlowContainer>
                <NavigatorHeader>DASHBOARD</NavigatorHeader>
            </GlowContainer>
            <Links>
                    <NavigatorTab text="MY NFTS" onClick={()=> {
                        dispatch(dashboardActions.setTab(DASHBOARD_TAB.MY_NFT))
                    }}/>
                    <NavigatorTab text="MY GAMES" onClick={()=> {
                        dispatch(dashboardActions.setTab(DASHBOARD_TAB.MY_GAMES))
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
            <Image src="/steam.svg" width={350} height={350}/>
            <VerifyText >
                TO Start earning rewards and buy Our nfts, the players have to link their steam account to orbeem ECosystem. This is done by minting a unique avatar nft. please enter the following data into the corresponding fields.
            </VerifyText>
            <VerifyButton 
                onClick={() => router.push(`${URIs.apiURI}/api/auth/steam`)}
            >
                VERIFY
            </VerifyButton>
        </UnsignedContainer>
    )
}
//_________________________________________________________________________________________________________________________


//NAVIGATOR-COMPONENT__________________________________________________________________________________________________________________
const NavigatorComponent = () => {
  const {user} = useUser()
    
  if(!user) return <LoadingComponent/>
  return (
    <NavigatorContainer
        style={{
            height: user.verified ? "15%" : "85%"
        }}
    >
        { user.verified ? <SignedComponent/> : <UnsignedComponent/>}
    </NavigatorContainer>
  )
}

export default NavigatorComponent
//____________________________________________________________________________________________________________________________