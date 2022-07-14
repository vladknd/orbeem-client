import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { dotaActions } from '../../redux/Dota/Dota.slice'
import { getMatchResults } from '../../redux/Dota/Dota.thunks'
import { profileActions } from '../../redux/Profile/Profile.slice'
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks'
import { mintTokens } from '../../services/game.service'
import { useUser } from '../../services/user.service'
import { Box1, Box2, Button1, GlowText, Text } from '../../styles/Components.styled'
import { INFT } from '../../web3/web3Utils'
import InfoFieldComponent from '../Common/InfoField.component'
import { ActionsContainer, Attributes, BalanceContainer, Claim, GameBoxContainer, GameContainer, GameLogo, HeaderContainer, MatchContainer, MatchHeader, MinterContainer, NFTBoxContainer, NFTContainer } from './Game.styled'

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
        ? items.slice(0,5).map((_item, index) => <NFTBoxContainer key="index" image={_item.imageURI}/>)
        : <Blank/>
    }
    </NFTContainer>
  )
}
//________________________________________________________________________________________________________________


//________________________________________________________________________________________________________________
interface INFTBox {
  nft: INFT;
}
const NFTBox = (props: INFTBox) => {
  const dispatch = useAppDispatch()
  return(
    <NFTBoxContainer 
      // key="index" 
      image={props.nft.imageURI}
      onClick={()=> {
        dispatch(profileActions.selectNFT(props.nft))
      }}
    />
  )
}
//________________________________________________________________________________________________________________



//________________________________________________________________________________________________________________
const Mechanics = () => {
  const { error, items, loading, tab, selected } = useAppSelector(state => state.PROFILE)
  const {user} = useUser()
  return(
    <GameContainer>
      <Box1 width="90%" height="100px" mb={20} dir="row" jc="start">
      {items 
        ? items.slice(0,5).map((_item, index) => <NFTBox key={index} nft={_item}/>)
        : null
      }
      </Box1>
      <ActionsContainer>
        <Box1 mb={20} mr={10} width="100%" height="80%" dir="column" jc="start">
          <GlowText m="10px 0px 0px 0px" size={20}> NFT-INFO</GlowText>
          {selected
            ? <Attributes>
                <InfoFieldComponent
                  image="/crystal.svg" 
                  attribute="POWER" 
                  value={selected.power.toString()} 
                  margin="5px 0px 10px 0px"
                />
                <InfoFieldComponent
                  image="/durability.svg" 
                  attribute="DURABILITY" 
                  value={selected.durability.toString()} 
                  margin="5px 0px 10px 0px"
                />
                <InfoFieldComponent
                  image="/durability.svg" 
                  attribute="INTELLIGENCE" 
                  value={selected.intelligence.toString()} 
                  margin="5px 0px 10px 0px"
                />
              </Attributes>
            : null
          } 
        </Box1>
        
        <Box1 width="100%" height="80%" mb={20} ml={10} dir="column" jc="start">
          <GlowText m="10px 0px 0px 0px" size={20}> MINTER</GlowText>
          <Minter/>
          <Button1 mt={30} mb={10} width={150} height={60}
            onClick={()=> {

              if(selected && user) mintTokens(selected.tokenId, user.publicAddress)
            }}
          >MINT</Button1>
        </Box1>
      </ActionsContainer>
    </GameContainer>
  )
}
//________________________________________________________________________________________________________________

const Minter = () => {
  const dispatch = useAppDispatch()
  const { selected } = useAppSelector(state => state.PROFILE)
  const {user} = useUser()

  return (
    <MinterContainer>
      <BalanceContainer>
        <Image src="/logo.svg" width={30} height={30}/>
        10
      </BalanceContainer>
      
      <Claim
        onClick={async () =>{
          if(user && selected) {
            await dispatch(getMatchResults(selected.tokenId, user.publicAddress))
          }
          
        }}
      >CLAIM</Claim>
    </MinterContainer>
  )
}

//________________________________________________________________________________________________________________
const GameComponent = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [game, setGame] = useState<boolean>(false)

  useEffect(() => {
    if(open){
      setTimeout(() => {
        setGame(true);
      }, 850);
    }
  }, [open])
  

  return (
    <GameBoxContainer
      width="100%" 
      height={open ? "95%" : "25%"}
      dir="column"
      jc={open ? "start" : "center"}
      clicky={open ? false : true}
      onClick={()=>{
        setOpen(true)
      }}
    >
      <HeaderContainer>
        <GameLogo ml={open ? "38%" : "0px"} mt={open ? "2%" : "0%"}>
              <Image src="/dota_logo.svg" width={300} height={100}/>
        </GameLogo>
        {open 
          ?   null
          : <Closed/>
        }
      </HeaderContainer>
       
      {game 
        ? <Mechanics/> 
        : null
      }
    </GameBoxContainer>
  )
}
//________________________________________________________________________________________________________________


export default GameComponent