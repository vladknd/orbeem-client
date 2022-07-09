import React from 'react'
import { Divider, GlowText } from '../../styles/Components.styled'
import { TitleContainer } from './Title.styled'

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
            <GlowText size={50}>{props.title}</GlowText>
        </TitleContainer>
    <Divider mb={`${props.mb}px`}/>
    </>
  )
}

export default TitleComponent