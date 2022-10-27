import styled from "styled-components"
import colors from "../../styles/colors"
import { GlowText, Text } from "../../styles/Components.styled"

export const TitleContainer = styled.div`
    padding: 0% 5%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    background-color: ${colors.color2};
    width: 100%;
    height: 15%;
`
export const TitleSide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items:center;

    width: 30%;
    height: 100%;
    
    /* font-size: 3vw; */
    
`
export const TitleText = styled(GlowText)`
    margin: 0% 10%;
    font-size: 2vw;
    text-align: center;
    width: 20%;
`

