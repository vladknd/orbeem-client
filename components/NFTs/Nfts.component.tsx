import Image from 'next/image'
//_______________LOCAL-IMPORTS____________________
//STYLED-COMPONENTS_______________________________
import { Items, NftsContainer } from './Nfts.styled'
//COMPONENTS______________________________________
import LoadingComponent from "../Loading/Loading.component"
import ItemComponent from "./Item.component"
//WEB3____________________________________________
import { INFT } from '../../interfaces/nft.interfaces'
import { URIs } from '../../config'


//NFTs-COMPONENT____________________________________________________________________________________________________________
interface INftsComponent {
    items: INFT[] | null;
    loading: boolean;
    gridSize?: string;
}
const NftsComponent = (props: INftsComponent) => {
    //BODY__________________________________________________________________________________________________________________
    return (
        <NftsContainer mb={20} mr={30} ml={30} pb="40px" jc={props.loading ? "center" : "start"} al="center">
            {props.loading ? <LoadingComponent/> : 
            props.items ? 
            <Items cols={props.gridSize ? props.gridSize : "1fr 1fr 1fr 1fr 1fr 1fr"}>
                {props.items.map((item, index) => {
                    return (<ItemComponent
                        key={index}
                        id={item?.tokenId}
                        level={item?.level}
                        power={item?.power}
                        durability={item?.durability}
                        price={item?.price}
                        image={URIs.ipfsGateway + item?.image}
                    />)
                })}
            </Items>
            : null}
        </NftsContainer>
    )
}

export default NftsComponent
//_________________________________________________________________________________________________________________________