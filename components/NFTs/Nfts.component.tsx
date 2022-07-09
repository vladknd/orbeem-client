import Image from 'next/image'
//_______________LOCAL-IMPORTS____________________
//STYLED-COMPONENTS_______________________________
import { Items, NftsContainer } from './Nfts.styled'
//COMPONENTS______________________________________
import LoadingComponent from "../Loading/Loading.component"
import ItemComponent from "./Item.component"
//WEB3____________________________________________
import { INFT } from '../../web3/web3Utils'

//NFTs-COMPONENT____________________________________________________________________________________________________________
interface INftsComponent {
    items: INFT[] | null;
    loading: boolean;
    gridSize?: string;
}
const NftsComponent = (props: INftsComponent) => {
    //BODY__________________________________________________________________________________________________________________
    return (
        <NftsContainer mb={20} mr={40} ml={40} pb={40} jc="start">
            {props.loading ? <LoadingComponent/> : 
            props.items ? 
            <Items cols={props.gridSize ? props.gridSize : "1fr 1fr 1fr 1fr"}>
                {props.items.map((item, index) => {
                    return (<ItemComponent
                        key={index}
                        id={item?.tokenId}
                        level={item?.level}
                        power={item?.power}
                        durability={item?.durability}
                        price={item?.price}
                        image={item?.imageURI}
                    />)
                })}
            </Items>
            : null}
        </NftsContainer>
    )
}

export default NftsComponent
//_________________________________________________________________________________________________________________________