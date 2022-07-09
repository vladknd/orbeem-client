import Image from 'next/image'
import React, { useEffect } from 'react'
import { useWeb3 } from '../../services/web3.service'
import { Button1, GlowText } from '../../styles/Components.styled'
import { getBalance, getORBBalance } from '../../web3/web3Utils'
import InfoFieldComponent from '../Common/InfoField.component'
import TitleComponent from '../Common/Title.component'
import { ButtonContainer, WalletButtons, WalletComponentContainer, WalletContainer, WalletsContainer } from './Wallets.styled'

const ExternalWallet = () => {
  return(
    <WalletContainer pt={10} width={500} height={600} jc="start">
      <Image src="/externalWallet.svg"
        width={400}
        height={250}
      />
      <GlowText m="10px 0px 0px 0px" size={35}>EXTERNAL</GlowText>
      <InfoFieldComponent
        image="/logo.svg" 
        attribute="ORB AVAILABLE" 
        value="10" 
        margin="30px 0px 10px 0px"
      />
      <InfoFieldComponent
        image="/Polygon.svg" 
        attribute="ORB AVAILABLE" 
        value="10" 
        margin="10px 0px 10px 0px"
      />
      {/* <Button1 mt={30} width={180} height={50}>TRANSFER</Button1> */}
      <WalletButtons>
        <ButtonContainer>
          <Image src="/receive.svg" width={100} height={100}/>
        </ButtonContainer>
        <ButtonContainer>
          <Image src="/send.svg" width={100} height={100}/>
        </ButtonContainer>
      </WalletButtons>
    </WalletContainer>
  )
}

const InternalWallet = () => {
  const {provider, publicAddress} = useWeb3()
  useEffect(() => {
    
    if(publicAddress){
      getBalance(publicAddress).then(_promise => {
        console.log("BALANCE", _promise);
      })
      getORBBalance(publicAddress).then(_promise => {
        console.log("ORB BALANCE", _promise);
      })
    }
    
  }, [publicAddress])
  
  return(
    <WalletContainer pt={50} width={500} height={600} jc="start">
      <Image src="/internalWallet.svg"
        width={400}
        height={250}
      />
      <GlowText m="20px 0px 0px 0px" size={35}>INTERNAL</GlowText>
      <InfoFieldComponent
        image="/logo.svg" 
        attribute="ORB AVAILABLE" 
        value="10" 
        margin="60px 0px 10px 0px"
      />
      <Button1 mt={30} width={180} height={50}>TRANSFER</Button1>
    </WalletContainer>
  )
}



const WalletComponent = () => {
  return (
    <WalletComponentContainer>
      <TitleComponent title="WALLET" mb={30}/>
      <WalletsContainer>
        <InternalWallet/>
        <ExternalWallet/>
      </WalletsContainer>
    </WalletComponentContainer>
  )
}

export default WalletComponent