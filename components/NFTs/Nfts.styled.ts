import styled from 'styled-components'
import { Box2 } from '../../styles/Components.styled'
import devices from '../../styles/devices'


interface IItems {
    cols: string
}
export const Items = styled.div`
    margin-top: 10px;

    width: 100%;
    display: grid;
    grid-template-columns: ${(props: IItems) => props.cols || "1fr 1fr 1fr 1fr" };
    grid-template-rows: 1fr;
    @media ${devices.laptopXS}{
        grid-template-columns: 1fr 1fr 1fr 1fr;     
    }
    @media ${devices.laptopS}{
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media ${devices.laptopM}{
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media ${devices.laptopL}{
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`

export const NftsContainer = styled(Box2)`
    height: 95%;
    min-height: 95%; 
    min-width: 70%;
    width: 100%;
    z-index:0;
`