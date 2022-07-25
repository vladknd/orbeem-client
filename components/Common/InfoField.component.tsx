import React from 'react'
import { Text } from '../../styles/Components.styled'
import { 
  AttributeText, 
  AttributeValue, 
  FieldContainer, 
  Incrementer, 
  SideContainer 
} from './InfoField.styled'
import Image from 'next/image'
import { useNFT } from '../NFT/useNFT';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks';
import { AppDispatch } from '../../redux/store';
import { nftActions } from '../../redux/NFT/NFT.slice';


interface IInfoField {
    image: string;
    attribute: string;
    value: string;

    margin?: string;
    incrementAction?: any;
}
const InfoFieldComponent = (props: IInfoField) => {
  const NFT = useAppSelector(state => state.NFT)
  const dispatch = useAppDispatch()
  return (
    <FieldContainer width="100%" height="30px" margin={props.margin}>
      <SideContainer>
        <Image src={props.image} width={20} height={20}/>
        <AttributeText>{props.attribute}</AttributeText>
      </SideContainer>

      <SideContainer>
        <AttributeValue>{props.value}</AttributeValue>

        {NFT?.upgrading && props.incrementAction ? 
          <Incrementer
            onClick={() => {  
              dispatch(props.incrementAction())
            }}
          > + </Incrementer> 
        : null}

      </SideContainer>
        
    </FieldContainer>
  )
}

export default InfoFieldComponent