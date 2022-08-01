
import { url } from 'inspector';
import Image from 'next/image'
import styled from 'styled-components'
import colors from '../../styles/colors'
import { Box1, Box2, GlowText } from '../../styles/Components.styled';
import devices from '../../styles/devices';


interface IGameBoxContainer {
    dev: boolean;
    hidden: boolean;
    clicky: boolean;
}
export const GameBoxContainer = styled(Box2)`
    margin: 10px 20px;

    color: white;
    font-size: 25px;
    font-family: Inter;
    font-weight: 200;
    letter-spacing: 5px;
    width: 95%;
    display: ${(props: IGameBoxContainer) => props.hidden ? "none" : "flex" }; 

    opacity: ${(props: IGameBoxContainer) => props.dev ? 0.6 : 1 }; 
    &:hover{
        opacity: ${(props: IGameBoxContainer) => !props.clicky ? 1 : (props.dev  ? 0.6 : 0.8)}; 
        cursor: ${(props: IGameBoxContainer) => !props.clicky ? "auto" : props.dev ? "auto" : "pointer"}; ;
    }
    &:hover:active{
        opacity: ${(props: IGameBoxContainer) => !props.clicky ? 1 : (props.dev ? 0.6 : 0.6)}; 
        cursor: ${(props: IGameBoxContainer) => !props.clicky ? "auto" : (props.dev ? "auto" : "pointer")}; ;
    }
`


interface INFTBoxContainer {
    image?: string;
}
export const NFTBoxContainer = styled.div`
    margin: 0px 10px;
    display; flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    padding: 25px 0px 60px 0px;
    vertical-align: center;
    /* width: 120px; */
    /* height: 120px; */

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

    @media ${devices.laptopXS} {
        width: 80px;
        height: 40px;
    }
    @media ${devices.laptopS} {
        width: 80px;
        height: 40px;
    }
    @media ${devices.laptopM} {
        width: 80px;
        height: 40px;
    }
    @media ${devices.laptopL} {
        width: 80px;
        height: 40px;
    }
`

// export const EmptyBox = styled.div` 
// `   
interface IGameLogo {
    ml: string; //FOR ANIMATION
    mt: string; //FOR ANIMATION
}
export const GameLogo = styled.div`
   margin-left: ${(props: IGameLogo) => props.ml ? props.ml : "0px"};
   margin-top: ${(props: IGameLogo) => props.mt ? props.mt : "0px"};
   display: flex;
   align-items: center;
   justify-content: center;
   transition: all 0.8s;
   height: 20%;
   width: 20%;
`

export const NFTContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
`

export const ActionsContainer = styled.div`
    display: flex;
    flex-direction: row;

    width: 90%;
    height: 80%;
`

interface GameContainer {
    
    opacity?: number;
}
export const GameContainer = styled.div`

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

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
    height: 40px;

    border: 0.1px solid #FFFFFF;
    border-radius: 10px;

    background: rgba(53, 53, 53, 0.2);



`

export const Claim = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 9px;

    width: 120px;
    height: 100%;

    font-size: 15px;
    font-family: Inter;
    font-weight: 200;
    letter-spacing: 3px;

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
    padding: 0px 20px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
`

export const MatchContainer = styled(Box1)`
    margin-right: 20px;
    
    display: flex;
    flex-direction: column;
    justify-content: start;

    width: 30%;
    height: 95%;

`

export const MatchHeader = styled(GlowText)`
    margin-top: 4%;
    margin-bottom: 4%;
    font-size: 25px;
`

export const Close = styled.div`
    margin-bottom: 20px;
    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }
    &:hover:active{
        opacity: 0.9;
        cursor: pointer;
    }
`
