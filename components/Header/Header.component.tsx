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
import { connect, linkMetamask } from '../../web3/web3Utils'
import { useWeb3 } from '../../services/web3.service'

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
    const {setWeb3, publicAddress} = useWeb3()
    console.log("Public ADDDDDR",publicAddress);
    
  return (
    <HeaderContainer>
        <LogoContainer>
            <Link href="/" >
                <Image width={160} height={80} src="/logo_horizontal.svg" style={{cursor:"pointer"}} />
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
                    connect().then(_promise => {
                        setWeb3(
                            _promise.chainId,
                            _promise.address
                        )
                    })
                    linkMetamask()
                    console.log("Public ADDDDDR",publicAddress);
                }}
            >
                <MetamaskLogo>
                    <Image src="/metamask.svg" width={25} height={25} layout="intrinsic" />
                </MetamaskLogo>
                
                {publicAddress}
            </AccountContainer>
        </SideContainer>
        
    </HeaderContainer>
  )
}

export default HeaderComponent