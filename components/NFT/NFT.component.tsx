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
  AegisCollectionImage,
  AttributesContainer,
  BuyButton,
  LevelHeader,
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
import { fetchNFT } from '../../redux/NFT/NFT.thunks';
import { nftActions } from '../../redux/NFT/NFT.slice';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks'

//WEB3____________________________________________
import { 
  buyNFT, 
} from '../../services/nft.service'
import { useWeb3 } from '../../services/web3.service'
import { URIs } from '../../config'
import { AegisImage } from '../Home/News.styled'
import Image from 'next/image'



//NFT-COMPONENT:____________________________________________________________________________________________________________
interface INFTComponent {
    uri: string;
}
const NFTComponent = (props: INFTComponent) => {
  const {publicAddress} = useWeb3()

  //REDUX________________________________________
  const dispatch = useAppDispatch()
  const nft = useAppSelector(state => state.NFT.item)
  useEffect(() => {
    console.log("ROUTERRR LALAL",props.uri)
    
    if(props.uri){
      const [tokenId, nftAddress] = props.uri.split("-")
      fetchNFT(dispatch, tokenId, nftAddress)
    } 
    
  }, [props.uri])

  return (
    <NFTContainer>
      {nft && publicAddress ? 
        //ADD STYLED CONTAINER
        <>
        <NFTBadge ml={30} mb={30} >
           <NFTId>{nft.tokenId}</NFTId>

            <NFTImage>
                <Image src={"https://"+nft.image.slice(0,59)+URIs.ipfsGateway+nft.image.slice(59)}
                  layout="fill"
                />
            </NFTImage>

            <LevelHeader>
              LEVEL {nft.level}
            </LevelHeader>
            {"power" in nft ?
              <AttributesContainer>
                <InfoFieldComponent 
                  width="16vw"
                  height="5vh"
                  margin="0px 0px 10px 0px"
                  image="/crystal.svg" 
                  attribute="POWER" 
                  value={nft.power.toString()} 
                  incrementAction={nftActions.nftIncrPower}
                />
                <InfoFieldComponent 
                  width="16vw"
                  height="5vh"
                  margin="0px 0px 10px 0px"
                  image="/durability.svg" 
                  attribute="DURABILITY" 
                  value={nft.durability.toString()}
                  incrementAction={nftActions.nftIncrDurability}
                />
                <InfoFieldComponent 
                  width="16vw"
                  height="5vh"
                  margin="0px 0px 10px 0px"
                  image="/durability.svg" 
                  attribute="INTELLIGENCE" 
                  value={nft.intelligence.toString()}
                  incrementAction={nftActions.nftIncrIntelligence}
                />
              </AttributesContainer>
            : null }

            {nft.owner.toLowerCase() === publicAddress.toLowerCase() 
              ? <Owner/>
              : nft.owner === "0x0000000000000000000000000000000000000000" 
                ? <BuyButton width={200} height={50} mt={40} mb={20}
                  onClick={async ()=> {
                    await buyNFT(nft.itemId, nft.nftAddress, nft.price)
                  }}>
                    BUY
                  </BuyButton> 
                : null
            } 
      </NFTBadge> 

        <MetadataContainer>
          <MetadataHeader>AEGIS COLLECTION</MetadataHeader>
          { <Text m="10px 0px 0px 0px" >DESCRIPTION: {nft.description}</Text> }
          <Text m="10px 0px 0px 0px">FUNCTIONALITY: {nft.description}</Text>
          <AegisCollectionImage/>
        </MetadataContainer>
        </>
       : <LoadingpageComponent/>} 
    </NFTContainer>
  )
}

export default NFTComponent
//___________________________________________________________________________________________________________________________