import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button1 } from "../../styles/Components.styled"
import {Row, OwnerContainer, AmountContainer, Input, ButtonContainer, ImageContainer, SellButton } from "./Owner.styled"
import { levelAegis, sellNFT, upgradeAegis } from "../../services/nft.service"
// import { useNFT } from "./useNFT"
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks"
import { nftActions } from "../../redux/NFT/NFT.slice"

const Owner = () => {
    const [price, setPrice] = useState<string>("0")
    const [loading, setLoading] = useState<boolean>(false)
    const upgrading = useAppSelector(state => state.NFT.upgrading)
    const Item = useAppSelector(state => state.NFT.item)
    // const Item = NFT.item
    const dispatch = useAppDispatch()
    return (
      <OwnerContainer>
        { Item ? 
        <Row mt={10} mb={10}>
          <ButtonContainer style={{cursor:"pointer"}} mr={20}>
            <Link href="/">
              <Image src="/transfer.svg" width={80} height={80}/>
            </Link>
          </ButtonContainer>
          
          <ButtonContainer style={{cursor:"pointer"}} 
            onClick={() => {
              levelAegis(Item.tokenId)
            }}
          >
            <div>
              <Image src="/levelup.svg" width={80} height={80}/>
            </div>
          </ButtonContainer>

          <ButtonContainer style={{cursor:"pointer"}} ml={20}
            onClick={() => {
              dispatch(nftActions.nftSetUpgrading())
            }}
          >
            <Image 
              src={upgrading ? "/upgradeTrue.svg" : "/upgrade.svg"} 
              width={85} 
              height={85}
            />
          </ButtonContainer>
        </Row> 
        : null}
        
        {Item ? 
          upgrading ?
            <Button1 
              mb={10}
              width={150} 
              height={60}
              onClick={() => {
                console.log(Item.tokenId,
                  Item.power,
                  Item.durability,
                  Item.intelligence);
                
                upgradeAegis(
                  Item.tokenId,
                  Item.power,
                  Item.durability,
                  Item.intelligence
                ).then(promise => {
                  console.log("NFT has been upgraded", promise)
                }).catch(error => {
                  console.log(error);
                })
              }}
            >
              SUBMIT
            </Button1> 

          : <Row mb={20}>
              <AmountContainer>
                <Input type="number" name="name" placeholder="0.0 MATIC" autoComplete="off"
                  onChange={event => {
                    setPrice(event.target.value)
                  }}
                />
                <Image src="/Polygon.svg" width={20} height={20}/>
              </AmountContainer>

              <SellButton width={130} height={30}
                onClick={() => sellNFT(Item.tokenId, Item.nftAddress, price)}
              >
                SELL
              </SellButton>
            </Row> 
        : null}

      </OwnerContainer>
    )
}

export default Owner
