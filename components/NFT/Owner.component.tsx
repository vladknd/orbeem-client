import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button1 } from "../../styles/Components.styled"
import {Row, OwnerContainer, AmountContainer, Input, ButtonContainer, ImageContainer } from "./Owner.styled"
import { levelUp, sellNFT, upgradeNFT } from "../../web3/web3Utils"
import { useNFT } from "./useNFT"

const Owner = () => {
    const [price, setPrice] = useState<number>(0)
    const {nft, setUpgrade} = useNFT()
    return (
      <OwnerContainer>
        {nft?.upgrading ? 
          <Button1 
            mt={20}
            width={150} 
            height={50}
            onClick={() => {
              console.log(nft.tokenId,
                nft.power,
                nft.durability);
              
              upgradeNFT(
                nft.tokenId,
                nft.power,
                nft.durability
              ).then(promise => {
                console.log("NFT has been upgraded", promise)
              }).catch(error => {
                console.log(error);
                
              })
            }}
          >
            SUBMIT
          </Button1> 
        : null}

        {nft ? 
        <Row mt={20} mb={20}>
          <ButtonContainer style={{cursor:"pointer"}} mr={20}>
            <Link href="/" onClick={() => {}}>
              <Image src="/transfer.svg" width={120} height={120}/>
            </Link>
          </ButtonContainer>
          
          <ButtonContainer style={{cursor:"pointer"}} 
            onClick={() => {
              levelUp(nft?.tokenId)
            }}
          >
            <div>
              <Image src="/levelup.svg" width={120} height={120}/>
            </div>
          </ButtonContainer>

          <ButtonContainer style={{cursor:"pointer"}} ml={20}
            onClick={() => {
              setUpgrade()
            }}
          >
            <Image 
              src={nft.upgrading ? "/upgradeTrue.svg" : "/upgrade.svg"} 
              width={125} 
              height={125}
            />
          </ButtonContainer>
        </Row> 
        : null}
        
        {nft ? 
        <Row mb={20}>
          <AmountContainer>
            <Input type="number" name="name" placeholder="0.0 MATIC" autoComplete="off"
              onChange={event => {
                setPrice(Number(event.target.value))
              }}
            />
            <Image src="/Polygon.svg" width={20} height={20}/>
          </AmountContainer>

          <Button1 width={170} height={50}
            onClick={() => sellNFT(nft.tokenId, price)}
          >
            SELL
          </Button1>
        </Row> 
        : null}

      </OwnerContainer>
    )
}

export default Owner
