import React from 'react'
import { Divider, GlowText, Text } from '../../styles/Components.styled'
import {  TitleContainer, TitleSide, TitleText } from './Title.styled'




interface ITitle {
    mt?: number;
    mb?: number;
    title: string;
    leftComponent?: React.FC;
    rightComponent?: React.FC;
}
const TitleComponent = (props: ITitle) => {
  return (
    <>
    <Divider mt={`${props.mt}px`}/>
        <TitleContainer>
          <TitleSide>
            {props.leftComponent ? <props.leftComponent/> : null}
          </TitleSide>
            <TitleText>{props.title}</TitleText>
          <TitleSide>
            {props.rightComponent ? <props.rightComponent/> : null}
          </TitleSide>
        </TitleContainer>
    <Divider mb={`${props.mb}px`}/>
    </>
  )
}

export default TitleComponent