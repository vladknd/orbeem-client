import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks"
import { mintTokens } from "../../services/game.service"
import { useUser } from "../../services/user.service"
import { Box1, Button1, GlowText } from "../../styles/Components.styled"
import InfoFieldComponent from "../Common/InfoField.component"
import { ActionsContainer, Attributes, BalanceContainer, Claim, GameContainer, MinterContainer, NFTBoxContainer} from "./Game.styled"
import Image from 'next/image'
import { getMatchResults } from "../../redux/Dota/Dota.thunks"
import { INFT } from "../../interfaces/nft.interfaces"
import { profileActions } from "../../redux/Profile/Profile.slice"
import { URIs } from "../../config"

const Minter = () => {
    const dispatch = useAppDispatch()
    const { selected } = useAppSelector(state => state.PROFILE)
    const { match } = useAppSelector(state => state.DOTA)
    const {user} = useUser()
  
    return (
      <MinterContainer>
        <BalanceContainer>
          <Image src="/logo.svg" width={30} height={30}/>
          {match ? match.award : 0}
        </BalanceContainer>
        
        <Claim
          onClick={async () =>{
            console.log("USSSER", user);
            
            if(user && selected) {
              await dispatch(getMatchResults(selected.tokenId, user.publicAddress))
            }
            
          }}
        >CLAIM</Claim>
      </MinterContainer>
    )
}

//________________________________________________________________________________________________________________
interface INFTBox {
    nft: INFT;
  }
  const NFTBox = (props: INFTBox) => {
    const dispatch = useAppDispatch()
    return(
      <NFTBoxContainer 
        // key="index" 
        image={URIs.ipfsGateway + props.nft.image}
        onClick={()=> {
          dispatch(profileActions.selectNFT(props.nft))
        }}
      />
    )
  }
  //_____________________________________________________________________________________________

//________________________________________________________________________________________________________________
const DotaMechanics = () => {
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
            <GlowText m="20px 0px 20px 0px" size={20}> NFT-INFO</GlowText>
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
            <GlowText m="20px 0px 0px 0px" size={20}> MINTER</GlowText>
            <Minter/>
            <Button1 mt={30} mb={10} width={150} height={40}
              onClick={()=> {
  
                if(selected && user) mintTokens(selected.tokenId, user.publicAddress)
              }}
            >MINT</Button1>
          </Box1>
        </ActionsContainer>
      </GameContainer>
    )
  }
  //__________________________________________________________________________________________

  export default DotaMechanics