//_______________GLOBAL-IMPORTS___________________
import React, { useEffect } from 'react'
import Image from 'next/image'
//_______________LOCAL-IMPORTS____________________
import { URIs } from '../../config'
//STYLED-COMPONENTS_______________________________
import { 
  GameBoxContainer, 
  GameLogo, 
  HeaderContainer, 
  NFTBoxContainer, 
  NFTContainer 
} from './Dota/Dota.component.styled'
import { Text } from '../../styles/Components.styled'
//COMPONENTS______________________________________
//REDUX___________________________________________
import { profileActions } from '../../redux/Profile/Profile.slice'
import { 
  useAppDispatch, 
  useAppSelector 
} from '../../redux/reduxHooks'
//SERVICES________________________________________
//INTERFACES______________________________________
import { PROFILE_TAB } from '../../redux/NFT.interfaces'

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
  const { items } = useAppSelector(state => state.PROFILE)
  useEffect(() => {
    console.log("AVAILABLE ITEMS",items);
    
  }, [items])
  
  return (
    <NFTContainer>
    {
      items 
        ? items.slice(0,5).map((_item, index) => <NFTBoxContainer key="index" image={"https://"+_item.image.slice(0,59)+URIs.ipfsGateway+_item.image.slice(59)}/>)
        : <Blank/>
    }
    </NFTContainer>
  )
}
//________________________________________________________________________________________________________________




//________________________________________________________________________________________________________________
interface IGameComponent {
  name: PROFILE_TAB;
  gameIMG: string;
  imgWidth: number;
  imgHeight: number;
  dev: boolean;
  
}
const GameComponent = (props: IGameComponent) => {
  const dispatch = useAppDispatch()

  return (
    <GameBoxContainer
      clicky={true}
      dev={props.dev}
      onClick={()=>{
        dispatch(profileActions.setTab(props.name))
      }}
    >
      <HeaderContainer>
        <GameLogo> 
              <Image src={props.gameIMG} width={props.imgWidth} height={props.imgHeight}/>
        </GameLogo>
        { props.dev  ? "COMMING SOON" : <Closed/> }
      </HeaderContainer>
    </GameBoxContainer>
  )
}
//________________________________________________________________________________________________________________


export default GameComponent