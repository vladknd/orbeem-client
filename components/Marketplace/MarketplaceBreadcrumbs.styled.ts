import styled from "styled-components"
import { Text } from "../../styles/Components.styled"

export const BreadcrumbsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    /* width: 100%; */
    height: 100%;

    

`

interface IBreadcrumbsText{
    arrow?: boolean;
}
export const BreadcrumbsText = styled(Text)`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    width: 100%;
    height: 100%;

    font-size: 18px;
    font-weight: 400;
    
    &:last-child {
        background: -webkit-linear-gradient(90.89deg, #416CCA -1.34%, #7852CB 118.01%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 4px 10px 21px rgba(0, 0, 0, 0.85);
    }

    &:hover {
        background: -webkit-linear-gradient(90.89deg, #416CCA -1.34%, #7852CB 118.01%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        cursor: pointer;

    }
    &:hover:active {
        background: -webkit-linear-gradient(90.89deg, #416CCA -1.34%, #7852CB 118.01%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        cursor: pointer;
        opacity: 0.7;
    }

    &::before {
        content: ${(props: IBreadcrumbsText) => props.arrow ? "url(forward.svg)" : null};
        /* padding-top: 10px; */
        padding: 10px 10px 0px 10px;
        opacity: 0.5;
        /* position: relative; */
        /* display: inline-block; */
        /* top: 50%; */
        /* bottom: 5%; */
        /* left: 40px; */
        
    }
`