import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button1 } from "../../styles/Components.styled"
import {
  OwnerContainer, 
  AmountContainer, 
  PriceInput, 
  ButtonContainer,
  SellButton, 
  ActionsContainer,
  SellingContainer,
  PolygonImage
} from "./Owner.styled"
import { levelAegis, sellNFT, upgradeAegis } from "../../services/nft.service"
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks"
import { nftActions } from "../../redux/NFT/NFT.slice"

const Owner = () => {
    const [price, setPrice] = useState<string>("0")
    const [loading, setLoading] = useState<boolean>(false)
    const upgrading = useAppSelector(state => state.NFT.upgrading)
    const Item = useAppSelector(state => state.NFT.item)
    const dispatch = useAppDispatch()
    
    return (
      <OwnerContainer>
        {Item ? 
          <ActionsContainer>
            <ButtonContainer style={{cursor:"pointer"}} mr={20}>
              <Link href="/">
                <Image src="/transfer.svg" layout="fill"/>
              </Link>
            </ButtonContainer>
            
            <ButtonContainer style={{cursor:"pointer"}} 
              onClick={() => {
                levelAegis(Item.tokenId)
              }}
            >
              <div>
                <Image src="/levelup.svg" layout="fill"/>
              </div>
            </ButtonContainer>

            <ButtonContainer style={{cursor:"pointer"}} ml={20}
              onClick={() => {
                dispatch(nftActions.nftSetUpgrading())
              }}
            >
              <Image 
                src={upgrading ? "/upgradeTrue.svg" : "/upgrade.svg"} 
                layout="fill"
              />
            </ButtonContainer>
          </ActionsContainer> 
        : null}
        
        {Item && "power" in Item ? 
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

          : <SellingContainer>
              <AmountContainer>
                <PriceInput type="number" name="name" placeholder="0.0 MATIC" autoComplete="off"
                  onChange={event => {
                    setPrice(event.target.value)
                  }}
                />
                <PolygonImage>
                  <Image src="/Polygon.svg" layout="fill"/>
                </PolygonImage>
              </AmountContainer>

              <SellButton width={130} height={30}
                onClick={() => sellNFT(Item.tokenId, Item.nftAddress, price)}
              >
                SELL
              </SellButton>
            </SellingContainer> 
        : null}
      </OwnerContainer>
    )
}

export default Owner
