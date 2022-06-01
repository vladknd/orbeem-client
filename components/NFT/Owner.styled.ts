import styled from 'styled-components'
import { BaseDiv } from '../../styles/Components.styled'

export const OwnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


`

export const Row = styled(BaseDiv)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

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
    width: 80%;
    height: 40px;

    background: rgba(165,165,165, 0.1);
    border-radius: 16px;

    /* background-color: black; */
`