
import { url } from 'inspector';
import Image from 'next/image'
import styled from 'styled-components'
import colors from '../../../styles/colors'
import { Box1, Box2, Button1, Button2, GlowText } from '../../../styles/Components.styled';
import devices from '../../../styles/devices';


interface IGameBoxContainer {
    dev: boolean;
    // hidden: boolean;
    clicky: boolean;
}
export const GameBoxContainer = styled(Box2)`
    margin: 10px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    font-size: 25px;
    font-family: Inter;
    font-weight: 200;
    letter-spacing: 5px;

    width: 95%;
    height: 30%;
  

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
export const NFTBoxContainer = styled(Box1)`
    margin: 10px 10px;

    align-self: center;
    justify-self: center;

    text-align: center;
    background-image: ${(props:INFTBoxContainer) => `url(${props.image})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

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
        height: 80px;
    }
    @media ${devices.laptopS} {
        width: 80px;
        height: 80px;
    }
    @media ${devices.laptopM} {
        width: 100px;
        height: 100px;
    }
    @media ${devices.laptopL} {
        width: 120px;
        height: 120px;
    }
`

export const GameLogo = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   height: 20%;
   width: 20%;

   transition: all 0.8s;
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
export const DotaContainer = styled(Box2)`
    margin: 1%;
    padding: 2% 2%;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: start;

    opacity: ${(props: GameContainer) => props.opacity || 1};

    transition: height 1s;

`

export const FirstColumn = styled.div`
    dispaly: flex;
    flex-firection: column;
    justify-content: start;
    align-items: center;

    width: 40%;
    height: 100%;
`

export const DotaLogo = styled.div`
    margin-bottom: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 40%;
    height: 100%;
`

export const BackButton = styled(Button2)`
    width: 60px;
    height: 60px;

    justify-self: start;
`
//___________________________DOTA-HEADER_______________________________
export const DotaHeader = styled.div`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 15%;
`
//_____________________________________________________________________


//___________________________DOTA-NFTs_________________________________
export const DotaNFTsContainer = styled(Box1)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr ;
    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    
    width: 100%;
    height: 85%;
    
`
// export const DotaItem = styled.div`


// `
// export const DotaItems = styled.div`


// `
export const NFTInfo = styled(Box1)`
    margin: 0px 30px;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: start;

    width: 30%;
    height: 100%;
`

export const GameInfo = styled(Box1)`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: start;

    width: 30%;
    height: 100%;
`



















//_____________________________________________________________________
export const SelectItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
`

export const NoData = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
`


//________________________ATTRIBUTES____________________________:

//_______________________________________________________________

export const NFTInfoContainer = styled(Box1)`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 80%;
    width: 30%;
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
