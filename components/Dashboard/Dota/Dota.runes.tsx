//_______________GLOBAL-IMPORTS___________________
import React, { useEffect } from 'react'
import Image from 'next/image'

//_______________LOCAL-IMPORTS____________________
import { URIs } from '../../../config'
//STYLED-COMPONENTS_______________________________
import { 
  Attributes, 
  Claim, 
  ErrorDischarged, 
  ErrorImage, 
  GameContainer, 
  Mint, 
  Minter, 
  NFTErrorContainer, 
  RuneContainer, 
  RuneImage, 
  Success, 
  SuccessContainer, 
  SuccessDone, 
  SuccessImage 
} from './Dota.runes.styled'
import { 
  NoData, 
  SelectItem 
} from './Dota.component.styled'
//COMPONENTS______________________________________
import InfoFieldComponent from '../../Common/InfoField.component'
import LoadingComponent from '../../Loading/Loading.component'
import { Calculator } from './Calculator.component'
//REDUX___________________________________________
import { dotaActions } from '../../../redux/Dota/Dota.slice'
import { 
  useAppDispatch, 
  useAppSelector 
} from '../../../redux/reduxHooks'
import { 
  getMatchResults, 
  mintTokensThunk 
} from '../../../redux/Dota/Dota.thunks'
//SERVICES________________________________________
import { useUser } from '../../../services/user.service'
//INTERFACES______________________________________


export const RuneData = () => {
  const dispatch = useAppDispatch()
  const { selected } = useAppSelector(state => state.PROFILE)

  const { user } = useUser()

  if(!user) return <LoadingComponent/>
  if(!selected)  {
    return (
      <SelectItem>
        <Image src="/selectItem.svg" width={400} height={400}/>
      </SelectItem>
    )
  } 
  return (
    <RuneContainer>
        <RuneImage img={"https://"+selected.image.slice(0,59)+URIs.ipfsGateway+selected.image.slice(59)}>
        </RuneImage>
        <Attributes>
          <InfoFieldComponent
            // margin="20px 0px 1px 0px"
            width="90%"
            height="33%"
            image="/crystal.svg" 
            attribute="POWER" 
            value={selected.power.toString()} 
          />
          <InfoFieldComponent
            // margin="1px 0px 1px 0px"
            width="90%"
            height="33%"
            image="/durability.svg" 
            attribute="DURABILITY" 
            value={selected.durability.toString()} 
            
          />
          <InfoFieldComponent
            // margin="20px 0px 1px 0px"
            width="90%"
            height="33%"
            image="/durability.svg" 
            attribute="INTELLIGENCE" 
            value={selected.intelligence.toString()} 
          />
        </Attributes>
        <Claim
          onClick={()=> {
            dispatch(getMatchResults(selected.tokenId, user.publicAddress))
          }}
        >CLAIM</Claim>
    </RuneContainer>
  )
}

export const GameData = () => {
  const { selected } = useAppSelector(state => state.PROFILE)
  const { 
    match, 
    loading, 
    error, 
    mintSuccess 
  } = useAppSelector(state => state.DOTA)
  const dispatch = useAppDispatch()
  
  const { user } = useUser()
  
  useEffect(()=> {}, [error, match])

  if(loading) return <LoadingComponent/>
  if(mintSuccess){    
    return (
      <SuccessContainer>
        <SuccessImage>
          <Image src="/success.svg" width={180} height={180}></Image>
        </SuccessImage>
        <Success>{match?.award} ORB tokens has been deposited in your Loot Box</Success>
        <SuccessDone
          onClick={()=> {
            dispatch(dotaActions.DotaMintDone())
          }}
        >DONE</SuccessDone>
      </SuccessContainer>
    )
  }
  if(error){
    return (
      <NFTErrorContainer>
      <ErrorImage>
        <Image src="/error.svg" width={250} height={250}/>
      </ErrorImage>
      <ErrorDischarged>
        {error === "ErrorDischarged" ? 
            "Your NFT is discharged, try again later. " :
          error === "ErrorVerified" ?
            "It's not your NFT. " :
          error === "ErrorNoData" ?
            "There is no matches played on this account. "
        : null}
        </ErrorDischarged>
      </NFTErrorContainer>
    )
  }
  if(!match || !selected || !user || error === "ErrorNoData") {
    return (
      <NoData>
      <Image src="/noData.svg" width={400} height={400}/>
      </NoData>
    )
  }
  
  return (
    <GameContainer>
      <Attributes>
        <InfoFieldComponent
          margin="5px 0px 10px 0px"
          width="90%"
          height="33%"
          attribute="KILLS" 
          value={match.kills.toString()}
        />
        <InfoFieldComponent
          margin="5px 0px 10px 0px"
          width="90%"
          height="33%"
          attribute="DEATHS" 
          value={match.assists.toString()}
        />
        <InfoFieldComponent
          margin="5px 0px 10px 0px"
          width="90%"
          height="33%"
          attribute="ASSISTS" 
          value={match.assists.toString()}
        />
      </Attributes>

      <Minter>
        <Calculator/>
        <Mint
          onClick={async ()=> {
            await dispatch(mintTokensThunk(selected.tokenId, user.publicAddress))
          }}
        >MINT</Mint>
      </Minter>
      
    </GameContainer>
  )
}

