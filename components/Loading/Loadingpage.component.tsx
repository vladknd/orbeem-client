import React from 'react'
import Image from 'next/image'
import { LoadingpageContainer } from './Loading.styled'

const LoadingpageComponent = () => {
  return (
    <LoadingpageContainer>
      <Image src="/loading.svg" width={150} height={150}/>
    </LoadingpageContainer>
  )
}

export default LoadingpageComponent