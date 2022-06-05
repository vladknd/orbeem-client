import styled from 'styled-components'

interface IFieldContainer {
    margin?: string;
    width: string;
    height: string;
    
}
export const FieldContainer = styled.div`
    margin: ${(props: IFieldContainer) => props.margin};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: ${(props: IFieldContainer) => props.width};
    height: ${(props: IFieldContainer) => props.height};

    border: 0.5px solid white;
`

export const Incrementer = styled.button`
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    background: transparent;
    width: 22px;
    height: 22px;
    font-size: 15px;
    color: white;
    cursor: pointer;
    &:hover{
        opacity: 0.6;
    }

    &:hover:active{
        opacity: 0.8;
    }
`

export const SideContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;


`