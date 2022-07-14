import styled from 'styled-components'
import { BaseDiv, Button1, Button2 } from '../../styles/Components.styled'
import devices from '../../styles/devices'

export const OwnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
`

export const Row = styled(BaseDiv)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    @media ${devices.laptopXS} {
        width: 80%;
    }
    @media ${devices.laptopS} {
        width: 85%;
    }
    @media ${devices.laptopM} {
        width: 80%;
        /* height: 1000px; */
    }
    @media ${devices.laptopL} {
        width: 80%;
        /* height: 1000px; */
    }

`
export const ButtonContainer = styled(BaseDiv)`
    
    &:hover{
        opacity: 0.4;
    }
    &:hover:active{
        opacity: 0.6;
    }
`

export const Input = styled.input`
    background: transparent;
    border: none;
    outline: none;
    color: white;
`
export const AmountContainer = styled.div`
    display: flex;
    padding: 10px 0px 10px 20px;
    margin-right: 10px; 
/* position: relative; */
    width: 60%;
    height: 40px;

    background: rgba(165,165,165, 0.1);
    border-radius: 8px;

    /* background-color: black; */

    @media ${devices.laptopXS} {
        width: 130px;
        height: 35px;
    }
    @media ${devices.laptopS} {
        width: 130px;
        height: 35px;
    }
    @media ${devices.laptopM} {
        /* width: 500px; */
        /* height: 1000px; */
    }
    @media ${devices.laptopL} {
        /* width: 600px; */
        /* height: 1000px; */
    }
`

export const ImageContainer = styled.div`
    box-shadow: inset 0px 0px 6px #AD6CFF;
    filter: drop-shadow(0px -4px 27px #7735B9);
`

export const SellButton = styled(Button1)`
    /* width: 100px; */
    height: 35px;

    font-size: 15px;

    border-radius: 5px;

    @media ${devices.laptopXS} {
        width: 250px;
        height: 35px;
    }
    @media ${devices.laptopS} {
        width: 130px;
        height: 35px;
    }
    @media ${devices.laptopM} {
        /* width: 500px; */
        /* height: 1000px; */
    }
    @media ${devices.laptopL} {
        /* width: 600px; */
        /* height: 1000px; */
    }
`