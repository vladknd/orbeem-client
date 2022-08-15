import styled from 'styled-components'
import colors from '../../styles/colors'

export const MarketplaceContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const Illustration = styled.div`
    width: 100%;
    height: 100vh;

    background-image: url("/dotaBG.jpg");
    background-repeat: repeat;
    background-position: center;
    backgrouns-size: auto;
`

export const Market = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    
`

export const Items = styled.div`
    margin-top: 50px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
`

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: ${colors.container_bg};
    width: 100%;
    height: 100px;
`

export const CollectionContainer = styled.div`
    margin: 10px 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 80vh;
    width: 98%;

`
