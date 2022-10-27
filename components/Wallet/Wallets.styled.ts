import styled from 'styled-components'
import { Box2, Button1, GlowText } from '../../styles/Components.styled'
import devices from '../../styles/devices'

export const WalletComponentContainer = styled.div`
    margin-top: 12vh;
    height: 80vh;
    /* margin-bottom: 30px; */
`
export const WalletsContainer = styled.div`
    margin-top: 2%;
    padding: 0px 30px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    /* width: 100vw; */
    /* height: 100%; */

`
export const WalletHeader = styled(GlowText)`
    font-size: 1.5vw;
`
export const TransferButton = styled(Button1)`
    font-size: 1vw;
    width: 10vw;
    height: 6vh;
`

export const WalletContainer = styled(Box2)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    width: 30vw;
    height: 70vh;
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
    position: relative;
    margin-top: 5%;


    height: 30vh;
    width: 20vw;
`

export const ExternalImage = styled.div`
    position: relative;
    margin-top: 4%;

    width: 20vw;
    height: 30vh;

`

// export const 