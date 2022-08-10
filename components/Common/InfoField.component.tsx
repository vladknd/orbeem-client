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

import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks';



interface IInfoField {
    image?: string;
    attribute: string;
    value: string;

    width: string;
    height: string;

    margin?: string;
    incrementAction?: any;
}
const InfoFieldComponent = (props: IInfoField) => {
  const NFT = useAppSelector(state => state.NFT)
  const dispatch = useAppDispatch()
  return (
    <FieldContainer width={props.width} height={props.height} margin={props.margin}>
      <SideContainer>
        {props.image ? <Image src={props.image} width={20} height={20}/> : null}
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