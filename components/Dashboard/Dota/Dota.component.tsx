//_______________GLOBAL-IMPORTS___________________
import Image from 'next/image'
//_______________LOCAL-IMPORTS____________________
//SERVICES________________________________________
import { 
  useAppDispatch, 
  useAppSelector 
} from "../../../redux/reduxHooks"
import { useUser } from "../../../services/user.service"
//STYLED-COMPONENTS_______________________________
import { 
  DotaContainer, 
  NFTBoxContainer,
  DotaNFTsContainer, 
  FirstColumn,
  DotaHeader,
  DotaLogo,
  NFTInfo,
  GameInfo,
  SelectItem
} from "./Dota.component.styled"
import { Header } from "./Dota.runes.styled"
//COMPONENTS______________________________________
import { 
  RuneData, 
  GameData 
} from "./Dota.runes"
//REDUX___________________________________________
import { dashboardActions } from "../../../redux/Dashboard/Dashboard.slice"
//INTERFACES______________________________________
import { INFT } from "../../../interfaces/nft.interfaces"
import { URIs } from "../../../config"



//NFT-Box_COMPONENTS_____________________________________________________________________________________________
interface INFTBox { nft: INFT }
const NFTBox = (props: INFTBox) => {
  const dispatch = useAppDispatch()
  return(
    <NFTBoxContainer  
      image={"https://"+props.nft.image.slice(0,59)+URIs.ipfsGateway+props.nft.image.slice(59)}
      onClick={()=> {
        dispatch(dashboardActions.selectNFT(props.nft))
      }}
    />
  )
}
//________________________________________________________________________________________________________________


//DOTA-COMPONENT__________________________________________________________________________________________________
const DotaComponent = () => {
    const { selected } = useAppSelector(state => state.DASHBOARD)
    const items = useAppSelector(state => state.DASHBOARD.items?.filter(
      nft => nft.game.name == "DOTA2"
    ))

    // const {user} = useUser()
    return(
      <DotaContainer>
        <FirstColumn>
          <DotaHeader>
            <DotaLogo>
              <Image src="/dota_logo.svg" width={300} height={100}/>
            </DotaLogo>
          </DotaHeader>
          <DotaNFTsContainer>
            {
              items ? 
                items.slice(0,15).map((_item, index) => <NFTBox key={index} nft={_item}/>)
              : null
            }
          </DotaNFTsContainer>
        </FirstColumn>

        <NFTInfo>
          <Header>
            NFT-DATA
          </Header>
          { selected ?
                <RuneData/> 
              : <SelectItem>
                  <Image src="/selectItem.svg" width={400} height={400}/>
                </SelectItem>
          }
          
        </NFTInfo>

        <GameInfo>
          <Header>
            GAME-DATA
          </Header>
          <GameData/>
        </GameInfo>
      </DotaContainer>
    )
  }
  //_____________________________________________________________________________________________________________

  export default DotaComponent