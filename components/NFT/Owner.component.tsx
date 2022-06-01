import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button1 } from "../../styles/Components.styled"
import {Row, OwnerContainer, AmountContainer, Input, ButtonContainer } from "./Owner.styled"
import { levelUp, sellNFT } from "../../web3/web3Utils"
import { useNFT } from "./useNFT"

const Owner = () => {
    const [price, setPrice] = useState<number>(0)
    const {nft} = useNFT()
    return (
      <OwnerContainer>
        {nft ? <Row mt={20} mb={20}>
          <ButtonContainer style={{cursor:"pointer"}} mr={20}>
            <Link href="/" onClick={() => {}}>
              <Image src="/transfer.svg" width={100} height={100}/>
            </Link>
          </ButtonContainer>
          
          <ButtonContainer style={{cursor:"pointer"}} 
            onClick={() => {
              levelUp(nft?.tokenId)
            }}
          >
            <div>
              <Image src="/levelup.svg" width={100} height={100}/>
            </div>
          </ButtonContainer>

          <ButtonContainer style={{cursor:"pointer"}} ml={20}>
            <Link href="/">
              <Image src="/upgrade.svg" width={100} height={100}/>
            </Link>
          </ButtonContainer>
        </Row> : null}
        
        {nft ? <Row mb={20}>
          <AmountContainer>
            <Input type="number" name="name" placeholder="0.0 MATIC" autoComplete="off"
              onChange={event => {
                setPrice(Number(event.target.value))
              }}
            />
            <Image src="/Polygon.svg" width={20} height={20}/>
          </AmountContainer>

          <Button1 width={130} height={40}
            onClick={() => sellNFT(nft.tokenId, price)}
          >
            SELL
          </Button1>
        </Row> : null}
      </OwnerContainer>
    )
}

export default Owner