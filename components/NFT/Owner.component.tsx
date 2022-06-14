import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button1 } from "../../styles/Components.styled"
import {Row, OwnerContainer, AmountContainer, Input, ButtonContainer, ImageContainer } from "./Owner.styled"
import { levelUp, sellNFT, upgradeNFT } from "../../web3/web3Utils"
import { useNFT } from "./useNFT"
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks"
import { nftActions } from "../../redux/NFT/NFT.slice"

const Owner = () => {
    const [price, setPrice] = useState<number>(0)
    const NFT = useAppSelector(state => state.NFT)
    const Item = NFT.item
    const dispatch = useAppDispatch()
    return (
      <OwnerContainer>
        {NFT?.upgrading && Item ? 
          <Button1 
            mt={20}
            width={150} 
            height={50}
            onClick={() => {
              console.log(Item.tokenId,
                Item.power,
                Item.durability);
              
              upgradeNFT(
                Item.tokenId,
                Item.power,
                Item.durability
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

        {NFT && Item ? 
        <Row mt={20} mb={20}>
          <ButtonContainer style={{cursor:"pointer"}} mr={20}>
            <Link href="/">
              <Image src="/transfer.svg" width={120} height={120}/>
            </Link>
          </ButtonContainer>
          
          <ButtonContainer style={{cursor:"pointer"}} 
            onClick={() => {
              levelUp(Item.tokenId)
            }}
          >
            <div>
              <Image src="/levelup.svg" width={120} height={120}/>
            </div>
          </ButtonContainer>

          <ButtonContainer style={{cursor:"pointer"}} ml={20}
            onClick={() => {
              dispatch(nftActions.nftSetUpgrading())
            }}
          >
            <Image 
              src={NFT.upgrading ? "/upgradeTrue.svg" : "/upgrade.svg"} 
              width={125} 
              height={125}
            />
          </ButtonContainer>
        </Row> 
        : null}
        
        {NFT && Item ? 
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
            onClick={() => sellNFT(Item.tokenId, price)}
          >
            SELL
          </Button1>
        </Row> 
        : null}

      </OwnerContainer>
    )
}

export default Owner
