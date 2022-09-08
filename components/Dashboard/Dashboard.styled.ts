import styled from 'styled-components'
import colors from '../../styles/colors'
import { Box1, Box2 } from '../../styles/Components.styled'
import devices from '../../styles/devices'

export const ProfileContainer = styled.div`
    margin-top: 12vh;
    
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    
    width: 100%;

    height: 100%;
    
`

export const ContentContainer = styled.div`
    padding: 1% 1% 1% 1%;

    display: flex;
    flex-direction: row;    
    justify-content: space-around;
    align-items: start;
    
    width: 100%;
    min-height: 70vh;
    max-heigth: 100%;
    height: 75vh;

`
export const GamesTab = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;

    width: 100%;
    height: 100%;
    /* max-height: 100%; */
    /* overflow: hidden; */
`

export const GamesContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 70%;
    height: 100%;
`



export const NFTTab = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;

    width: 100%;
    height: 100%;
`

export const MyNFTContainer = styled(Box2)`
width: 100%;
height: 100%;

`