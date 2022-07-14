import styled from 'styled-components'
import devices from '../../styles/devices';
import {Text} from '../../styles/Components.styled'
export const ItemInfo = styled.div`
    display
    width: 100%;
    height: 100%; 
    display: none;
`

interface IItemContainer {
    image: string;
}
export const ItemContainer = styled.div`
    margin: 30px 40px;
    width: 180px;
    height: 180px;
    background-image: ${(props: IItemContainer) => `url("${props.image}")`};
    background-position: center;
    background-size: cover;
    transition: 0.5s;
    &:hover{
        margin: 30px 40px 30px 40px;
        box-shadow: 0 0px 20px #6626ad;
        ${ItemInfo} {
            display: flex;
            flex-direction: column;
            justify-content: end;
            background: linear-gradient(0deg, rgba(65,24,144,0.7695553563222164) 0%, rgba(255,255,255,0.10849093055190828) 100%);
        }
        
    }
    &:hover:active {
        margin: 20px 20px 0px 40px;
        opacity: 0.2;
        box-shadow: 0 0px 20px #6626ad;
        ${ItemInfo} {
            display: flex;
            flex-direction: column;
            justify-content: end;
            background: linear-gradient(0deg, rgba(65,24,144,0.7695553563222164) 0%, rgba(255,255,255,0.10849093055190828) 100%);
        }
    }

    @media ${devices.laptopXS} {
        width: 120px;
        height: 120px;
    }
    @media ${devices.laptopS} {
        /* font-size: 15px; */
    }
    @media ${devices.laptopM} {
        /* font-size: 10px; */
    }
    @media ${devices.laptopL} {
        /* font-size: 10px; */
    }
`

export const ItemText = styled(Text)`
    @media ${devices.laptopXS} {
        font-size: 12px;
    }
    @media ${devices.laptopS} {
        /* font-size: 15px; */
    }
    @media ${devices.laptopM} {
        /* font-size: 10px; */
    }
    @media ${devices.laptopL} {
        /* font-size: 10px; */
    }
`