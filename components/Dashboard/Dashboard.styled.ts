import styled from 'styled-components'
import colors from '../../styles/colors'
import { Box1 } from '../../styles/Components.styled'
import devices from '../../styles/devices'

export const ProfileContainer = styled.div`
    margin-top: 14vh;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    
    width: 100%;

    height: 80%;
    
`

export const ContentContainer = styled.div`
    padding: 1%;

    display: flex;
    flex-direction: row;    
    justify-content: space-around;
    align-items: start;
    
    width: 100%;
    height: 85%;
`
export const GamesTab = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    width: 100%;
    height: 100%;
`

export const GamesContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 70%;
    height: 100%;
`

export const NFTFilters = styled(Box1)`
    margin-left: 20px;
    
    width: 30%;
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