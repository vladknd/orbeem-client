import styled from "styled-components";
import { BaseDiv, Text } from "../../styles/Components.styled";

export const CollectionsContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;    
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 100%;


`

interface ICollectionContainer {
    img: string;
}
export const CollectionContainer = styled(BaseDiv)`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    width: 90%;
    height: 90%;

    border: solid 1px rgba(255, 255, 255, 0.3);
    border-radius: 10px;

    background-image: url(${(props:ICollectionContainer) => props.img});
    background-position: center center;
    background-size: cover;
`

export const CollectionHeader = styled(Text)`
    font-size: 40px;
    font-family: Inter;
    font-weight: 200;
`

export const CollectionText = styled(Text)`
    padding: 20px 0px 0px 15px;
    font-size: 20px;
    font-family: Inter;
    font-weight: 200;

    opacity: 0.8;
`