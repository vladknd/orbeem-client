import styled from 'styled-components'
import colors from '../../styles/colors'
import { Box2 } from '../../styles/Components.styled'

export const MarketplaceContainer = styled.div`
    margin-top: 13vh;
    /* padding: 0% 2%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    width: 100%;
    height: 100%;
`

export const ContentContainer = styled(Box2)`
    margin: 1% 2% 0px 2%;
    margin-left: 2%;
    margin-right: 2%;
    width: 98%;
    height: 80%;
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
