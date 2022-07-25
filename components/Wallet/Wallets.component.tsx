import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useUser } from '../../services/user.service'
import { useWeb3 } from '../../services/web3.service'
import { Button1, GlowText } from '../../styles/Components.styled'
import { getBalance, getORBBalance, transferORB } from '../../services/orb.service'
import InfoFieldComponent from '../Common/InfoField.component'
import TitleComponent from '../Common/Title.component'
import { ButtonContainer, ExternalImage, InternalImage, WalletButtons, WalletComponentContainer, WalletContainer, WalletsContainer } from './Wallets.styled'

const ExternalWallet = () => {
  const {provider, publicAddress} = useWeb3()
  const [balanceMATIC, setMATIC]  = useState<string>("")
  const [balanceORB, setORB]  = useState<string>("")
  //REFACTOR CREATE HOOK
  useEffect(() => {
    
    if(publicAddress){
      getBalance(publicAddress).then(_promise => {
        console.log("BALANCE", _promise);
        setMATIC(_promise)
      })
      getORBBalance(publicAddress).then(_promise => {
        console.log("ORB BALANCE", _promise);
        setORB(_promise)
      })
    }
    
    
  }, [publicAddress])
  return(
    <WalletContainer>
      <ExternalImage>
        <Image src="/externalWallet.svg"
          width={240}
          height={240}
        />
      </ExternalImage>

      <GlowText m="10px 0px 20px 0px" size={25}>EXTERNAL</GlowText>
      <InfoFieldComponent
        image="/logo.svg" 
        attribute="ORB AVAILABLE" 
        value={balanceORB}
        margin="10px 0px 10px 0px"
      />
      <InfoFieldComponent
        image="/Polygon.svg" 
        attribute="ORB AVAILABLE" 
        value={balanceMATIC}
        margin="10px 0px 10px 0px"
      />
      {/* <Button1 mt={30} width={180} height={50}>TRANSFER</Button1> */}
      {/* <WalletButtons>
        <ButtonContainer>
          <Image src="/receive.svg" width={80} height={80}/>
        </ButtonContainer>
        <ButtonContainer>
          <Image src="/send.svg" width={80} height={80}/>
        </ButtonContainer>
      </WalletButtons> */}
    </WalletContainer>
  )
}

const InternalWallet = () => {
  
  const {user} = useUser()
  
  
  return( 
    <WalletContainer>
      <InternalImage>
        <Image src="/internalWallet.svg"
          width={240}
          height={240}
        />
      </InternalImage>
      
      <GlowText m="20px 0px 0px 0px" size={25}>INTERNAL</GlowText>
      <InfoFieldComponent
        image="/logo.svg" 
        attribute="ORB AVAILABLE" 
        value={user ? `${user.balance}` : "0"} 
        margin="30px 0px 10px 0px"
      />
      <Button1 mt={30} mb={30} width={180} height={50}
        onClick={async () => {
          await transferORB()
        }}
      >TRANSFER</Button1>
    </WalletContainer>
  )
}



const WalletComponent = () => {
  return (
    <WalletComponentContainer>
      <TitleComponent title="WALLET" mb={20}/>
      <WalletsContainer>
        <InternalWallet/>
        <ExternalWallet/>
      </WalletsContainer>
    </WalletComponentContainer>
  )
}

export default WalletComponent