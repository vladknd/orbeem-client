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
    UnsignedContainer
} from './Profile.styled'
import { 
    Button1, 
    GlowText, 
    Text 
} from '../../styles/Components.styled'
//SERVICES_______________________________________
import { useUser } from '../../services/user.service'


//NAVIGATOR-LINK__________________________________________________________________________________________________________
export interface INavigatorLink {
    href: string;
    text: string;
}
const NavigatorLink = (props: INavigatorLink) => {
    return(
        <Link href={props.href}>
            <LinkContainer style={{cursor:"pointer"}}>{props.text}</LinkContainer>
        </Link>
    )
}
//_________________________________________________________________________________________________________________________


//SIGNED-COMPONENT________________________________________________________________________________________________________
const SignedComponent = () => {
    const {user}= useUser()

    return (
        <SignedContainer>
            <AccountContainer>
                <AvatarContainer image="/avatar.jpg"></AvatarContainer>
                <UsernameContainer>{user?.username}</UsernameContainer>
            </AccountContainer>
            <GlowText size={60} m="30px 0px 20px 0px">MY PROFILE</GlowText>
            <Links>
                <NavigatorLink href="/" text="MY NFTS"/>
                <NavigatorLink href="/" text="MY ACCOUNTS"/>
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
  return (
    <NavigatorContainer>
        
        {user?.steamId ? <SignedComponent/> : <UnsignedComponent/>}
        {/* <SignedComponent/> */}
    </NavigatorContainer>
  )
}

export default NavigatorComponent
//____________________________________________________________________________________________________________________________