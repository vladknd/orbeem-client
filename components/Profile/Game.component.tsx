import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { dotaActions } from '../../redux/Dota/Dota.slice'
import { getMatchResults } from '../../redux/Dota/Dota.thunks'
import { profileActions } from '../../redux/Profile/Profile.slice'
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks'
import { mintTokens } from '../../services/game.service'
import { useUser } from '../../services/user.service'
import { Box1, Box2, Button1, GlowText, Text } from '../../styles/Components.styled'
import { INFT } from '../../interfaces/nft.interfaces'
import InfoFieldComponent from '../Common/InfoField.component'
import { ActionsContainer, Attributes, BalanceContainer, Claim, Close, GameBoxContainer, GameContainer, GameLogo, HeaderContainer, MatchContainer, MatchHeader, MinterContainer, NFTBoxContainer, NFTContainer } from './Game.styled'
import Link from 'next/link'
import { URIs } from '../../config'

//________________________________________________________________________________________________________________
const Blank = () => {
  return (
    <NFTContainer>
      <Text m="0px 20px 0px 0px" size={20} opacity={0.4}>
        ADD NFTS TO START EARNING
      </Text>

      <NFTBoxContainer>
        +
      </NFTBoxContainer>
    </NFTContainer>
  )
  
}
//________________________________________________________________________________________________________________

//________________________________________________________________________________________________________________
const Closed = () => {
  const { error, items, loading, tab } = useAppSelector(state => state.PROFILE)
  useEffect(() => {
    console.log("AVAILABLE ITEMS",items);
    
  }, [items])
  
  return (
    <NFTContainer>
    {
      items 
        ? items.slice(0,5).map((_item, index) => <NFTBoxContainer key="index" image={URIs.ipfsGateway + _item.image}/>)
        : <Blank/>
    }
    </NFTContainer>
  )
}
//________________________________________________________________________________________________________________




//________________________________________________________________________________________________________________
interface IGameComponent {
  name: string;
  gameIMG: string;
  imgWidth: number;
  imgHeight: number;
  gameMechanics: React.FC;
  dev: boolean;
  
}
const GameComponent = (props: IGameComponent) => {
  const dispatch = useAppDispatch()

  const {open} = useAppSelector(state => state.DOTA)
  const [game, setGame] = useState<boolean>(false)
  const [logo, setLogo] = useState<boolean>(false)

  useEffect(() => {
    if(open){
      
      setLogo(true);
      console.log("LOGO:", logo)

      setTimeout(() => {
        setGame(true);
      }, 500);
      console.log("GAME:", game)
    } 
    
  }, [open])

  // useEffect(() => {
  //   setGame(false)
  //   if(!open){
      
  //     setTimeout(() => {
  //       setLogo(false);
  //     }, 450);
  //   }
    
    
  // }, [game])

  return (
    <GameBoxContainer
      width="100%" 
      height={open ? "95%" : "25%"} 
      dir="column"
      jc={"start"}
      clicky={open ? false : true}
      hidden={props.name !== "DOTA" && open ? true : false}
      dev={props.dev}
      onClick={()=>{
        if(!props.dev && !open) dispatch(dotaActions.SetDota())
      }}
    >
      <HeaderContainer>
        <GameLogo ml={logo ? "38%" : "0%"} mt={"2%"}> 
              <Image src={props.gameIMG} width={props.imgWidth} height={props.imgHeight}/>
        </GameLogo>
        {open 
          ?   null
          :  props.dev  ? "COMMING SOON" : <Closed/> 
        }
      </HeaderContainer>
       
      { game && !props.dev 
        ? <props.gameMechanics/>
        : null
      }
      { open && game && props.name === "DOTA" ? 
      <Close onClick={()=> {
        dispatch(dotaActions.SetDota())
        setGame(false)
        setLogo(false)
      }}
      >
        <Image src="/up.svg" width={40} height={40}/>
      </Close> : null
      }
    </GameBoxContainer>
  )
}
//________________________________________________________________________________________________________________


export default GameComponent