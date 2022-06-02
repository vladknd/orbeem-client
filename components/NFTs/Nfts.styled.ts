import styled from 'styled-components'
import { Box2 } from '../../styles/Components.styled'

export const Items = styled.div`
    margin-top: 50px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    grid-template-rows: 1fr;
`

export const NftsContainer = styled(Box2)`
    min-height: 700px; 
    min-width: 1300px;
    
    z-index:0;
`