import styled from "styled-components";
import { BaseDiv } from "../../styles/Components.styled";

export const GamesContainer = styled.div`
    padding: 2% 1%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items; center;

    width: 100%;
    height: 100%;
`
interface IGameContainer {
    img: string;
}
export const GameContainer = styled(BaseDiv)`
    width: 25%;
    height: 100%;

    border-radius: 40px;
    background-image: url(${(props:IGameContainer) => props.img});
    background-position: center center;
    background-size: cover;
    /* background-color: red; */

    

`

