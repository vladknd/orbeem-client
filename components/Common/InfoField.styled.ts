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

    width: ${(props: IFieldContainer) => props.width};
    /* width: 200px; */
    width: 90%;
    height: ${(props: IFieldContainer) => props.height};

    border: 0.5px solid white;

    @media ${devices.laptopXS} {
        height: 30px;
    }
    @media ${devices.laptopS} {
        /* width: 170px; */
        height: 25px;
    }
    @media ${devices.laptopM} {
        
        height: 30px;
    }
    @media ${devices.laptopL} {
        /* width: 300px; */
        height: 34px;
    }
    @media ${devices.laptopXL} {
        /* width: 260px; */
        height: 30px;
    }
    @media ${devices.laptopXL} {
        /* width: 330px; */
        height: 35px;
    }
    @media ${devices.laptopXXL} {
        /* width: 380px; */
        height: 40px;
    }
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
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const AttributeText = styled(Text)`
    @media ${devices.laptopXS} {
        font-size: 10px;
    }
    @media ${devices.laptopS} {
        font-size: 11px;
    }
    @media ${devices.laptopM} {
        font-size: 10px;
    }
    @media ${devices.laptopL} {
        font-size: 12px;
    }
    @media ${devices.laptopXL} {
        font-size: 14px;
    }
    @media ${devices.laptopXXL} {
        font-size: 15px;
    }
`

export const AttributeValue = styled(Text)`
    padding-right: 2%;

    @media ${devices.laptopXS} {
        font-size: 10px;
    }
    @media ${devices.laptopS} {
        font-size: 11px;
    }
    @media ${devices.laptopM} {
        font-size: 10px;
    }
    @media ${devices.laptopL} {
        font-size: 12px;
    }
    @media ${devices.laptopXL} {
        font-size: 14px;
    }
    @media ${devices.laptopXXL} {
        font-size: 15px;
    }
`