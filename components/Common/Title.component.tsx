import React from 'react'
import { Divider, GlowText } from '../../styles/Components.styled'
import { TitleContainer, TitleText } from './Title.styled'

interface ITitle {
    mt?: number;
    mb?: number;
    title: string;
}
const TitleComponent = (props: ITitle) => {
  return (
    <>
    <Divider mt={`${props.mt}px`}/>
        <TitleContainer>
            <TitleText>{props.title}</TitleText>
        </TitleContainer>
    <Divider mb={`${props.mb}px`}/>
    </>
  )
}

export default TitleComponent