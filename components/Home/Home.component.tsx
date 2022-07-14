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
import LoadingComponent from '../Loading/Loading.component'

import { 
    HomeContainer, 
    LogoContainer, 
    PanelBoxContainer, 
    PanelContainer, 
    Tape, 
    TapesContainer, 
    UpsideContainer, 
} from './Home.styled'
import { Waves } from '../../styles/Components.styled'
import { connect } from 'http2';

//-----------------------------------PANEL-CONNECT-COMPONENT:
const PanelConnect = () => {
    return (
        <PanelContainer>
            <Button1 width={200} height={50}>
                CONNECT
            </Button1>
        </PanelContainer>
    )
}

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
            <Image src={props.image} width={300} height={300} layout="intrinsic"></Image>
            <Button2 
                width={250}
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
            <PanelBox image="/wallet.svg" text="WALLET" link="/"/>
            <PanelBox image="/profile.svg" text="PROFILE" link="/profile"/>
        </PanelContainer>
    )
}

//-----------------------------HOME-COMPONENT------------------------------:
const HomeComponent = () => {
  const Router = useRouter()
  const [connect, authorized, loading] = useAuthorize()  
  
  return (
    <HomeContainer>
        <Waves mt={250}/>
        <UpsideContainer>
            <LogoContainer auth={authorized}>
                <Image src="/logo_vertical.svg" width={450} height={450}/>
                {authorized ? null : <LoadingComponent/>}
            </LogoContainer>
            
            <TapesContainer>
                <Tape>
                    <Image src={authorized ? "/tapeDota.png" : "/tapeDotaMono.png"} width={850} height={170}/>
                </Tape>

                <Tape>
                    <Image src={authorized ? "/tapePubg.png" : "/tapePubgMono.png"} width={850} height={170}/>
                </Tape>
                <Tape>
                    <Image src={authorized ? "/tapeCS.png" : "/tapeCSMono.png"} width={850} height={170}/>
                </Tape>
            </TapesContainer>
        </UpsideContainer>

        <Divider/>
        {authorized ? <Panel/> : null}
        <Divider/>
    </HomeContainer>
  )
}

export default HomeComponent