//_______________GLOBAL-IMPORTS___________________
import React, { useEffect, useState } from 'react'
//_______________LOCAL-IMPORTS____________________
//STYLED-COMPONENTS_______________________________
import { 
  Box1,
  Box2, 
  Button1, 
  GlowText, 
  Text 
} from '../../styles/Components.styled'
import { 
  MetadataContainer,
  MetadataHeader,
  NFTBadge,
  NFTContainer, 
  NFTId, 
  NFTImage 
} from './NFT.styled'

//COMPONENTS______________________________________
import InfoFieldComponent from '../Common/InfoField.component'
import LoadingpageComponent from '../Loading/Loadingpage.component'
import Owner from './Owner.component';
//REDUX___________________________________________
import { fetchNFT } from '../../redux/NFT/NFT.actions';
import { nftActions } from '../../redux/NFT/NFT.slice';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks'

//WEB3____________________________________________
import { 
  buyNFT, 
} from '../../services/nft.service'
import { useWeb3 } from '../../services/web3.service'
import { URIs } from '../../config'



//NFT-COMPONENT:____________________________________________________________________________________________________________
interface INFTComponent {
    id: number;
}
const NFTComponent = (props: INFTComponent) => {
  const {publicAddress} = useWeb3()

  //REDUX________________________________________
  const dispatch = useAppDispatch()
  const nft = useAppSelector(state => state.NFT.item)
  useEffect(() => {
    console.log("ROUTERRR LALAL",props.id)
    if(props.id) fetchNFT(dispatch, props.id)
    
  }, [props.id])

  return (
    <NFTContainer>
      {nft && publicAddress ? 
        //ADD STYLED CONTAINER
        <>
        <NFTBadge ml={30} mb={30} >
           <NFTId>{props.id}</NFTId>

            <NFTImage image={"https://"+nft.image.slice(0,59)+URIs.ipfsGateway+nft.image.slice(59)}/>

            <GlowText>LEVEL: {nft.level}</GlowText>

            <InfoFieldComponent 
              width="90%"
              height="90%"
              margin="0px 0px 5px 0px"
              image="/crystal.svg" 
              attribute="POWER" 
              value={nft.power.toString()} 
              incrementAction={nftActions.nftIncrPower}
            />
            <InfoFieldComponent 
              width="90%"
              height="90%"
              margin="0px 0px 5px 0px"
              image="/durability.svg" 
              attribute="DURABILITY" 
              value={nft.durability.toString()}
              incrementAction={nftActions.nftIncrDurability}
            />
            <InfoFieldComponent 
              width="90%"
              height="90%"
              margin="0px 0px 1px 0px"
              image="/durability.svg" 
              attribute="INTELLIGENCE" 
              value={nft.intelligence.toString()}
              incrementAction={nftActions.nftIncrIntelligence}
            />

            {
              nft.owner.toLowerCase() === publicAddress.toLowerCase() 
              ? <Owner/>
              : nft.owner === "0x0000000000000000000000000000000000000000" 
                ? <Button1 width={200} height={50} mt={40} mb={20}
                  onClick={async ()=> {
                    await buyNFT(nft.itemId, nft.price)
                  }}>
                    BUY
                  </Button1> 
                : null
            } 
        </NFTBadge> 

        <MetadataContainer ml={30} mb={30} pt="10px" pl="10px" width="800px" height="80%" jc="start" al="start">
          <MetadataHeader m="0px 0px 30px 0px" als="center" size={35}>METADATA</MetadataHeader>
          {nft && <Text size={20}>NAME: {nft.name}</Text>} 
          { <Text m="10px 0px 0px 0px" size={20}>DESCRIPTION: {nft.description}</Text> }
        </MetadataContainer>
        </>
       : <LoadingpageComponent/>} 
    </NFTContainer>
  )
}

export default NFTComponent
//___________________________________________________________________________________________________________________________