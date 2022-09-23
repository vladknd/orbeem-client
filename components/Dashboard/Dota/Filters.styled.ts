import styled from "styled-components";
import { BaseDiv, Box1, GlowText } from "../../../styles/Components.styled";

export const ComponentContainer = styled(Box1)`
    margin-left: 20px;
    
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 30%;
    height: 100%;
`
export const FiltersContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
`
export const FiltersHeader = styled(GlowText)`
    font-size: 30px;

`

export const FilterContainer = styled(BaseDiv)`
    /* margin: 10px 0px; */
    padding: 0% 4%;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 90%;
    /* height: 10%; */

    transition: all ease;

    border: solid 0.5px white;
    border-radius: 5px;


`
export const FilterHeader = styled.div`
    margin: 5%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    width: 100%;
    /* height: 100%; */
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


export const FilterElement = styled(BaseDiv)`
    margin: 3% 0%;
    padding: 0% 4%;
    width: 90%;
    height: 40px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: #4C4C4C;

    border-radius: 10px;
    

    &:hover {
        opacity: 0.8;
    }
`