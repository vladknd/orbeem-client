//_______________GLOBAL-IMPORTS___________________
import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
//_______________LOCAL-IMPORTS____________________
//STYLED-COMPONENTS_______________________________
import { 
    Box1, 
    GlowText 
} from '../../styles/Components.styled'
//COMPONENTS______________________________________
import InfoFieldComponent from '../Common/InfoField.component'
//REDUX___________________________________________
//SERVICES________________________________________
import { useUser } from '../../services/user.service'
//INTERFACES______________________________________

const LootboxContainer = styled(Box1)`
    margin-right: 20px;
    
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 30%;
    height: 100%;

`

const ImageContainer = styled.div`
    margin-top: 15%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    width: 60%;
    height: 30%;

`

const Header = styled(GlowText)`
    font-size: 35px;
`
export const DashboardLootboxComponent = () => {
  const {user} = useUser()
  return (
    <LootboxContainer>
        <ImageContainer>
            <Image src="/internalWallet.svg" width={300} height={400}/>
        </ImageContainer>
        <Header>LOOT BOX</Header>
        <InfoFieldComponent
            margin="30px 0px 10px 0px"
            width="90%"
            height="90%"
            image="/logo.svg" 
            attribute="ORB AVAILABLE" 
            value={user ? `${user.balance}` : "0"} 
        />
    </LootboxContainer>
  )
}

