//#------------------GLOBAL-IMPORTS------------------#
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { useAuthorize } from '../../services/auth.service'

//#------------------LOCAL-IMPORTS-------------------#
import { 
    Box1,
    Button1, 
    Button2, 
    Divider 
} from '../../styles/Components.styled'

import { 
    HomeContainer, 
    LogoContainer, 
    PanelBoxContainer, 
    PanelContainer, 
    SignButton, 
    Tape, 
    TapesContainer, 
    UpsideContainer, 
} from './Home.styled'

import { Waves } from '../../styles/Components.styled'
import { useWeb3 } from '../../services/web3.service'

//-----------------------------------------PANEL-COMPONENT:
interface IPanelBox {
    image: string;
    text: string;
    link: string;
}
const PanelBox = (props: IPanelBox) => {
    const Router = useRouter()
    return (
        <PanelBoxContainer mt={20} mb={20}>
            <Image src={props.image} width={230} height={220} layout="intrinsic"></Image>
            <Button2 
                onClick={(event)=> {
                    Router.push(props.link)
                }}
            >
            {props.text}
            </Button2>
        </PanelBoxContainer>
    )
}

const Panel = () => {
    return (
        <PanelContainer>
            <PanelBox image="/marketplace.svg" text="MARKETPLACE" link="/marketplace"/>
            <PanelBox image="/wallet.svg" text="WALLET" link="/wallet"/>
            <PanelBox image="/dashboard.svg" text="DASHBOARD" link="/dashboard"/>
        </PanelContainer>
    )
}

//-----------------------------HOME-COMPONENT------------------------------:
const HomeComponent = () => {
  const Router = useRouter()
  const {connect, authorized, loading} = useAuthorize()  
  const {chainId, publicAddress, connectWeb3 } = useWeb3()
  useEffect(() => {
    console.log("HOME-COMP REND:", chainId);

  }, [chainId])
  
  return (
    <HomeContainer>
        <Waves/>
        <UpsideContainer>
            <LogoContainer auth={authorized}>
                <Image src="/logo_vertical.svg" width={450} height={450}/>
                {
                    authorized     
                        ? null 
                        : <SignButton
                            onClick={async () => {
                                await connectWeb3()
                                
                                console.log("AND NOW", chainId, publicAddress);
                                await connect()
                                
                            }}
                        >SIGN IN</SignButton>
                }
            </LogoContainer>
            
            <TapesContainer>
                <Tape>
                    <Image 
                        onClick={() => {
                            Router.push("marketplace")
                        }}
                    src={authorized ? "/tapeDota.png" : "/tapeDotaMono.png"} width={850} height={170}/>
                </Tape>

                <Tape>
                    <Image src={authorized ? "/tapePubg.png" : "/tapePubgMono.png"} width={850} height={170}/>
                </Tape>
                <Tape>
                    <Image src={authorized ? "/tapeCS.png" : "/tapeCSMono.png"} width={850} height={170}/>
                </Tape>
            </TapesContainer>
        </UpsideContainer>

        
        {authorized ? <Divider/> : null}
        {authorized ? <Panel/> : null}
        {authorized ? <Divider/> : null}
    </HomeContainer>
  )
}

export default HomeComponent