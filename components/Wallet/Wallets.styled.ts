import styled from 'styled-components'
import { Box2, Button1, GlowText } from '../../styles/Components.styled'
import devices from '../../styles/devices'

export const WalletComponentContainer = styled.div`
    margin-top: 7%;
    margin-bottom: 30px;
`
export const WalletsContainer = styled.div`
    padding: 0px 30px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    width: 100%;
    height: 60vh;

`
export const WalletHeader = styled(GlowText)`

`
export const TransferButton = styled(Button1)`
    width: 40%;
    height: 10%;
`

export const WalletContainer = styled(Box2)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    width: 30%;
    height: 65vh;
`

export const WalletButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ButtonContainer = styled.div`
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
    &:hover:active {
        opacity: 0.9;
    }
`

export const InternalImage = styled.div`    
    margin-top: 5%;
    height: 48%;
`

export const ExternalImage = styled.div`
    margin-top: 4%;
    height: 58%;

    @media ${devices.laptopXS}{
        /* width:  */
        height: 58%;
    }
    @media ${devices.laptopS}{
        /* width:  */
        height: 58%;
    }
    @media ${devices.laptopM}{
        /* width:  */
        height: 50%;
    }
    @media ${devices.laptopL}{
        /* width:  */
        height: 47%;
    }
`