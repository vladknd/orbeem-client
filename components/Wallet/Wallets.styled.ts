import styled from 'styled-components'
import { Box2 } from '../../styles/Components.styled'

export const WalletComponentContainer = styled.div`
    margin-top: 100px;
    margin-bottom: 30px;
`
export const WalletsContainer = styled.div`
    padding: 0px 30px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    width: 100%;
    height: 100%;

`

export const WalletContainer = styled(Box2)`
    display: flex;
    flex-direction: column;
    align-items: center;

    /* width: 500px;
    height: 800px; */
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