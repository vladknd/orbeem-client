import styled from 'styled-components'
import { BaseDiv, Button1, Button2 } from '../../styles/Components.styled'
import devices from '../../styles/devices'

export const OwnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 90%;
    height: 30%;
`
export const ActionsContainer = styled(BaseDiv)`
    margin: 2% 0%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 40%;
`

export const SellingContainer = styled(BaseDiv)`
    margin: 2% 0%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 30%;
`
export const Row = styled(BaseDiv)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 30%;
    

`
export const ButtonContainer = styled(BaseDiv)`
    position: relative;

    width: 100%;
    height: 100%;
    &:hover{
        opacity: 0.4;
    }
    &:hover:active{
        opacity: 0.6;
    }
`

export const PriceInput = styled.input`
    background: transparent;
    border: none;
    outline: none;
    color: white;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    width: 70%;

    font-size: 1vw;
`
export const AmountContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0px 10px 20px;
    margin-right: 10px; 
/* position: relative; */
    width: 15vw;
    height: 5vh%;

    background: rgba(165,165,165, 0.1);
    border-radius: 8px;
`

export const PolygonImage = styled.div`
    position: relative;

    width: 3vw;
    height: 3vh;
`

export const ImageContainer = styled.div`
    box-shadow: inset 0px 0px 6px #AD6CFF;
    filter: drop-shadow(0px -4px 27px #7735B9);
`

export const SellButton = styled(Button1)`
    width: 30%;
    height: 80%;

    font-size: 15px;

    border-radius: 5px;

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