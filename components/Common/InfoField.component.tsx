import React from 'react'
import { Text } from '../../styles/Components.styled'
import { FieldContainer, Incrementer, SideContainer } from './InfoField.styled'
import Image from 'next/image'
import { useNFT } from '../NFT/useNFT';

interface IInfoField {
    image: string;
    attribute: string;
    value: string;

    margin?: string;
    incrementer(): void;
}
const InfoFieldComponent = (props: IInfoField) => {
  const {incrementPower, incrementDurability, nft} = useNFT()
  return (
    <FieldContainer width="90%" height="40px" margin={props.margin}>
      <SideContainer>
        <Image src={props.image} width={28} height={28}/>
        <Text size={16}>{props.attribute}</Text>
      </SideContainer>
      <SideContainer>
        <Text m="0px 10px 0px 0px"size={16}>{props.value}</Text>
        {nft?.upgrading ? <Incrementer
          onClick={() => {  
            props.incrementer()
          }}
        >
          +
        </Incrementer> : null}

      </SideContainer>
        
    </FieldContainer>
  )
}

export default InfoFieldComponent