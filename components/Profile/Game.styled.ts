
import { url } from 'inspector';
import Image from 'next/image'
import styled from 'styled-components'
import colors from '../../styles/colors'

// 

interface INFTBoxContainer {
    image?: string;
}
export const NFTBoxContainer = styled.div`
    margin: 0px 10px;
    display; flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    padding: 40px 0px;
    vertical-align: center;;
    width: 120px;
    height: 120px;

    background-image: ${(props:INFTBoxContainer) => `url(${props.image})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    /* background-color: rgba(92,92,92, 0.1); */
    color: white;
    font-size: 30px;

    border: 0.1px solid white;

    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
    &:hover:active {
        opacity: 0.9;
    }
`

// export const EmptyBox = styled.div` 
// `   
interface IGameLogo {
    ml: string; //FOR ANIMATION
}
export const GameLogo = styled.div`
   margin-left: ${(props: IGameLogo) => props.ml ? props.ml : "0px"};
   transition: all 0.8s;
   height: 100px;
   width: 100%;
`

export const NFTContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
`

export const ActionsContainer = styled.div`
    display: flex;
    flex-direction: row;
`

interface GameContainer {
    
    opacity?: number;
}
export const GameContainer = styled.div`
    opacity: ${(props: GameContainer) => props.opacity || 1};
    transition: all 1s ease;
`

export const Attributes = styled.div`
display: flex;
flex-direction: column;
align-items: center;
    width: 100%;
`

export const MinterContainer = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:  space-between;

    width: 80%;
    height: 50px;

    border: 0.1px solid #FFFFFF;
    border-radius: 10px;

    background: rgba(53, 53, 53, 0.2);



`

export const Claim = styled.div`
    text-align: center;
    padding: 12px;

    width: 120px;
    height: 100%;

    background: linear-gradient(265.75deg, rgba(34, 71, 202, 0.37) 1.59%, rgba(129, 71, 204, 0.37) 97.34%);
    box-shadow: 0px 4px 38px 10px rgba(0, 0, 0, 0.25);

    border-radius: 10px;

    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
    &:hover:active {
        opacity: 1;
    }
`

export const BalanceContainer = styled.div`
    margin-left: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const HeaderContainer = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
`