import styled from "styled-components";
import { Text } from "../../styles/Components.styled";

export const SortingContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;


`

export const SortingText = styled(Text)`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    width: 100%;
    height: 100%;

    font-size: 1vw;
    font-weight: 400;
`

interface ISortingItem {
    active?: boolean;
}
export const SortingItem = styled(Text)`
    margin-left: 10%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    width: 100%;
    height: 100%;

    font-size: 1vw;
    font-weight: 400;

    background: ${(props: ISortingItem) => props.active ? 
        "-webkit-linear-gradient(90.89deg, #416CCA -1.34%, #7852CB 118.01%)" : 
        ""
    };
    -webkit-background-clip: ${(props: ISortingItem) => props.active ? 
        "text" :
        ""
    };
    -webkit-text-fill-color: ${(props: ISortingItem) => props.active ? 
        "transparent":
        ""
    };
    text-shadow: ${(props: ISortingItem) => props.active ? 
        "4px 10px 21px rgba(0, 0, 0, 0.85)":
        ""
    };

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
`