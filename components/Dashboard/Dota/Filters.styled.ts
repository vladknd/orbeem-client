import styled from "styled-components";
import { Box1, GlowText } from "../../../styles/Components.styled";

export const FiltersContainer = styled(Box1)`
    margin-left: 20px;
    
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 30%;
    height: 100%;
`

export const FiltersHeader = styled(GlowText)`
    font-size: 30px;

`

export const FiltersGame = styled.div`
    margin: 10px 0px;
    padding: 0% 4%;

    width: 90%;
    height: 10%;

    font-family: Inter;
    font-weight: 200;
    font-size: 20px;
    letter-spacing: 8px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border: solid 1px white;


`

export const FiltersArrow = styled.div`
    position: relative;
    /* transform: 
        scale(var(--ggs,1));

    width: 22px;
    height: 17px;

    border-left: 3px solid transparent;
    border-bottom: 3px solid; */

    /* &::before {
        display: block;
        box-sizing: border-box;
        border-right: 3px solid transparent
    }
    &::before {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border-left: 3px solid;
        border-top: 3px solid;
        border-bottom: 3px solid transparent;
        transform: rotate(45deg) skew(10deg,10deg);
        left: -2px;
        bottom: -13px
    } */

`