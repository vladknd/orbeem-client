import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { 
  Box1,
  Box2, 
  Button1, 
  GlowText, 
  Text 
} from '../../styles/Components.styled'
import { 
  buyNFT, 
  getAccount, 
  getNFTData, 

} from '../../web3/web3Utils';
import InfoFieldComponent from '../Common/InfoField.component'
import LoadingpageComponent from '../Loading/Loadingpage.component';
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
  const {setNFTData,incrementPower,incrementDurability, nft} = useNFT()

  useEffect(() => {
    getNFTData(props.id).then(result => {
      console.log(
        "NFT.COMPONENT-getNFTData-PROMISE", 
        result
      )
      
      if(result) setNFTData(result)
      console.log("NFT.COMPONENT-nft_after_setNFTData", nft);
    })

    getAccount().then(res => {
      setAddress(res)
      console.log("ADDRESS", address)
    }).catch(error => {
      console.log("ERROR", error)
    })
  },[nft])
    
  return (
    <NFTContainer>
      {nft && address ? 
        //ADD STYLED CONTAINER
        <>
        <Box2 mt={100} ml={30} mb={30} width={500} >
           <NFTId>{props.id}</NFTId>

            <NFTImage image={nft?.image}/>

            <GlowText size={35} m="10px 0px 0px 0px">LEVEL: {nft.level}</GlowText>

            <InfoFieldComponent 
              image="/crystal.svg" 
              attribute="POWER" 
              value={nft.power.toString()} 
              margin="10px 0px 10px 0px"
              incrementer={incrementPower}
            />
            <InfoFieldComponent 
              image="/durability.svg" 
              attribute="DURABILITY" 
              value={nft.durability.toString()}
              incrementer={incrementDurability}
            />

            {
              nft.owner.toLowerCase() === address.toLowerCase() 
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
        </Box2> 

        <Box1 mt={100} ml={30} mb={30} pt={10} pl={10} width={800} height={200} jc="start" al="start">
          <GlowText m="0px 0px 10px 0px" als="center" size={35}>METADATA</GlowText>
          <Text size={20}>NAME: {nft.name}</Text>
          <Text m="10px 0px 0px 0px" size={20}>DESCRIPTION: {nft.description}</Text>
        </Box1>
        </>
      : <LoadingpageComponent/>}
    </NFTContainer>
  )
}

export default NFTComponent