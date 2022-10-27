//#------------------GLOBAL-IMPORTS------------------#
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//#------------------LOCAL-IMPORTS-------------------#
import { 
    HeaderContainer, 
    LinkContainer, 
    LogoContainer, 
    SideContainer,
    AccountContainer,
    MetamaskLogo
} from './Header.styled'
import { LinksData } from './Header.data'

import { useWeb3 } from '../../services/web3.service'
import Router, { useRouter } from 'next/router'

//HEADER-LINK:
export interface IHeaderLink {
    href: string;
    text: string;
}
const HeaderLink = (props: IHeaderLink) => {
    return(
        <Link href={props.href}>
            <LinkContainer style={{cursor:"pointer"}}>{props.text}</LinkContainer>
        </Link>
    )
}

//-----------------------------HEADER-COMPONENT------------------------------:
const HeaderComponent = () => {
    const {connectWeb3, publicAddress} = useWeb3()  
    console.log("HEADER",publicAddress);
    const Router = useRouter()
  return (
    <HeaderContainer>
        <LogoContainer>
            <Link href="/" >
                <Image src="/logo_horizontal.svg" layout="fill" 
                    style={{cursor:"pointer"}} 
                />
            </Link>
        </LogoContainer>
        
        <SideContainer>
            {LinksData.map((item, index) => {
                return(
                    <HeaderLink key={index} href={item.href} text={item.text}/>
                )
            })}
            <AccountContainer
                onClick={async() => {
                    if(!publicAddress){
                        await connectWeb3()
                    } else {
                        Router.push("wallet")
                    }
                }}
            >
                <MetamaskLogo>
                    <Image src="/metamask.svg" layout="fill" />
                </MetamaskLogo>
                
                {publicAddress ? publicAddress : "CONNECT METAMASK"}
            </AccountContainer>
        </SideContainer>
        
    </HeaderContainer>
  )
}

export default HeaderComponent