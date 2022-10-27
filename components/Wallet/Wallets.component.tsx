import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useUser } from '../../services/user.service'
import { useWeb3 } from '../../services/web3.service'
import { Button1, GlowText } from '../../styles/Components.styled'
import { getBalance, getORBBalance, transferORB } from '../../services/orb.service'
import InfoFieldComponent from '../Common/InfoField.component'
import TitleComponent from '../Common/Title.component'
import { ButtonContainer, ExternalImage, InternalImage, TransferButton, WalletButtons, WalletComponentContainer, WalletContainer, WalletHeader, WalletsContainer } from './Wallets.styled'

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
          layout="fill"
        />
      </ExternalImage>

      <WalletHeader>EXTERNAL</WalletHeader>
      <InfoFieldComponent
        width="22vw"
        height="5vh"
        image="/logo.svg" 
        attribute="ORB AVAILABLE" 
        value={Math.round(Number(balanceORB)).toString()}
        margin="10px 0px 10px 0px"
      />
      <InfoFieldComponent
        width="22vw"
        height="5vh"
        image="/Polygon.svg" 
        attribute="ORB AVAILABLE" 
        value={Math.round(Number(balanceMATIC)).toString()}
        margin="10px 0px 10px 0px"
      />
    </WalletContainer>
  )
}

const InternalWallet = () => {
  
  const {user} = useUser()
  
  
  return( 
    <WalletContainer>
      <InternalImage>
        <Image src="/internalWallet.svg"
          layout="fill"
        />
      </InternalImage>
      
      <WalletHeader>INTERNAL</WalletHeader>
      <InfoFieldComponent
        width="22vw"
        height="5vh"
        image="/logo.svg" 
        attribute="ORB AVAILABLE" 
        value={user ? `${user.balance}` : "0"} 
        margin="30px 0px 30px 0px"
      />
      <TransferButton mt={30} mb={30} width={180} height={50}
        onClick={async () => {
          await transferORB()
        }}
      >TRANSFER</TransferButton>
    </WalletContainer>
  )
}



const WalletComponent = () => {
  return (
    <WalletComponentContainer>
      <TitleComponent title="WALLET"/>
      <WalletsContainer>
        <InternalWallet/>
        <ExternalWallet/>
        <WalletContainer>
          <WalletHeader>
            FIAT PAYMENTS <br/>
            COMING SOON!
          </WalletHeader>
        </WalletContainer>
      </WalletsContainer>
    </WalletComponentContainer>
  )
}

export default WalletComponent