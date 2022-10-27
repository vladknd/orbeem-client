import styled from 'styled-components'
import {Text} from '../../styles/Components.styled'
import devices from '../../styles/devices';


interface IFieldContainer {
    margin?: string;
    width: string;
    height: string;
    
}
export const FieldContainer = styled.div`
    margin: ${(props: IFieldContainer) => props.margin};
    padding: 2px 10px 0px 0px;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: ${(props: IFieldContainer) => props.width || "10vw"};
    height: ${(props: IFieldContainer) => props.height || "1vh"};

    border: 0.5px solid #494949;
    border-radius: 0.5vw;
    
    /* @media ${devices.laptopS} {
        width: 80%;
        height: 25%;
    }
    @media ${devices.laptopM} {
        width: 80%;
        height: 35px;
    }
    @media ${devices.laptopL} {
        width: 80%;
        height: 45px;
    }
    @media ${devices.laptopXL} {
        width: 80%;
        height: 50px;
    } */
   
`

export const Incrementer = styled.button`
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.5px solid white;
    background: transparent;
    width: 18px;
    height: 18px;
    font-size: 14px;
    color: white;
    cursor: pointer;

    &:hover{
        opacity: 0.6;
    }

    &:hover:active{
        opacity: 0.8;
    }
`

export const SideContainer = styled.div`
    padding: 10px 0px 10px 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const AttributeText = styled(Text)`
    font-size: 0.8vw;

`

export const AttributeValue = styled(Text)`
    font-size: 0.8vw;

`