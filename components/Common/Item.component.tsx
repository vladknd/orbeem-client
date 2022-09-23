//_______________GLOBAL-IMPORTS___________________
import React from 'react'
import Link from 'next/link';
//_______________LOCAL-IMPORTS____________________
//STYLED-COMPONENTS_______________________________
import { 
  ItemContainer, 
  ItemInfo, 
  ItemText
} from './Item.styled'

//ITEM-COMPONENT:________________________________________________________________________________________________________
interface INFTComponent {
    id: number;
    mode: string;
    nftAddress: string;
    level: number;
    power: number | null;
    durability: number | null;
    intelligence: number | null;
    price?: string;
    image: string;
}
const ItemComponent = (props: INFTComponent) => {
  return (
    <Link  href={`/nft/${props.id}-${props.nftAddress}`} passHref>
    <ItemContainer image={props.image} style={{cursor:"pointer"}}>
        <ItemInfo>
            <ItemText m="0px">LEVEL: {props.level}</ItemText>
            {props.power !== null ? <ItemText m="0px">POWER: {props.power}</ItemText> : null}
            {props.power !== null ?<ItemText m="0px">DURABILITY: {props.durability}</ItemText>: null}
            {props.power !== null ?<ItemText>INTELLIGENCE: {props.intelligence}</ItemText>: null}
            {props.mode === "marketplace" ? <ItemText m="0px">PRICE: {props.price}</ItemText> : null}
        </ItemInfo>
    </ItemContainer>
    </Link>
  )
}

export default ItemComponent
//__________________________________________________________________________________________________________________________