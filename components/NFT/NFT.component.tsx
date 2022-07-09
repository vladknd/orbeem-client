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
} from '../../web3/web3Utils';
import { useWeb3 } from '../../services/web3.service'



//NFT-COMPONENT:____________________________________________________________________________________________________________
interface INFTComponent {
    id: number;
}
const NFTComponent = (props: INFTComponent) => {
  //CHECK-ACCOUNT:_________________________________
  // const [address, setAddress] = useState<string>()
  // useEffect(() => {
  //   getAccount().then(res => {
  //     setAddress(res)
  //     console.log("ADDRESS", address)
  //   }).catch(error => {
  //     console.log("ERROR", error)
  //   })
  // },[])

  const {publicAddress} = useWeb3()

  //REDUX________________________________________
  const dispatch = useAppDispatch()
  const nft = useAppSelector(state => state.NFT.item)
  useEffect(() => {
    fetchNFT(dispatch, props.id)
  }, [])

  return (
    <NFTContainer>
      {nft && publicAddress ? 
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
              incrementAction={nftActions.nftIncrPower}
            />
            <InfoFieldComponent 
              image="/durability.svg" 
              attribute="DURABILITY" 
              value={nft.durability.toString()}
              incrementAction={nftActions.nftIncrDurability}
            />
            <InfoFieldComponent 
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
        </Box2> 

        <Box1 mt={100} ml={30} mb={30} pt={10} pl={10} width={800} height={200} jc="start" al="start">
          <GlowText m="0px 0px 10px 0px" als="center" size={35}>METADATA</GlowText>
          {nft && <Text size={20}>NAME: {nft.name}</Text>} 
          { <Text m="10px 0px 0px 0px" size={20}>DESCRIPTION: {nft.description}</Text> }
        </Box1>
        </>
       : <LoadingpageComponent/>} 
    </NFTContainer>
  )
}

export default NFTComponent
//___________________________________________________________________________________________________________________________