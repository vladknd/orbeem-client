import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { 
  Box1, 
  Box2, 
  Button1, 
  Divider, 
  GlowText, 
  Text 
} from '../../styles/Components.styled'
import { 
  buyNFT, 
  getAccount, 
  getNFTData, 
  INFTData, 
  sellNFT 
} from '../../web3/web3Utils';
import InfoFieldComponent from '../Common/InfoField.component'
import { 
  NFTContainer, 
  NFTId, 
  NFTImage 
} from './NFT.styled'
import Owner from './Owner.component';
import { useNFT } from './useNFT';

interface INFTComponent {
    id: number;
}
const NFTComponent = (props: INFTComponent) => {
  const [address, setAddress] = useState<string>()
  // const [nft, setNFT] = useState<INFTData>()
  const {setNFTData, nft} = useNFT()

  useEffect(() => {
    getNFTData(props.id).then(result => {
      console.log("RESULT", result);
      // if(result) setNFT(result)
      if(result) setNFTData(result)
      if(result) console.log("RESULT:", result)
      console.log("SET NFT", nft);
      console.log("NFT PRICE", nft?.price);
    })

    getAccount().then(res => {
      setAddress(res)
      console.log("ADDRESS", address)
    }).catch(error => {
      console.log("ERROR", error)
    })
    
    
  },[])
    
  return (
    <React.Fragment>
    <NFTContainer>
      
    {nft&&address ?  <Box2 width={400} mt={100} ml={30} mb={30}>
           <NFTId>{props.id}</NFTId>

            <NFTImage image={nft?.image}/>

            <GlowText size={30} m="10px 0px 0px 0px">LEVEL: {nft.level}</GlowText>

            {/* <Box1 width={350} al="start">
                <Text size={20} m="10px">NAME: {nft?.name}</Text>
                <Text size={20} m="10px">DESCRIPTION: {nft?.description}</Text>
            </Box1> */}

            <InfoFieldComponent image="/crystal.svg" attribute="POWER" value={nft.power.toString()} margin="10px 0px 10px 0px"/>
            <InfoFieldComponent image="/durability.svg" attribute="DURABILITY" value={nft.durability.toString()}/>

            {nft.owner.toLowerCase() === address.toLowerCase() ?
              // <Button1 width={200} height={50} mt={40} mb={20}
              //   onClick={async ()=> {
              //     await sellNFT(props.id, 10)
              //   }}
              // >SELL</Button1>
              <Owner/>

              : nft.owner === "0x0000000000000000000000000000000000000000" ?
              <Button1 width={200} height={50} mt={40} mb={20}
                onClick={async ()=> {
                  await buyNFT(nft.itemId, nft.price)
                }}
              >BUY
              </Button1> : null} 
        </Box2> : null}

    </NFTContainer>
    <Divider mb="30px"/>

    </React.Fragment>
  )
}

export default NFTComponent