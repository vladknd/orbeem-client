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
    level: number;
    power: number;
    durability: number;
    intelligence: number;
    price?: string;
    image: string;
}
const ItemComponent = (props: INFTComponent) => {
  return (
    <Link  href={`/nft/${props.id}`} passHref>
    <ItemContainer image={props.image} style={{cursor:"pointer"}}>
        <ItemInfo>
            <ItemText m="0px">LEVEL: {props.level}</ItemText>
            <ItemText m="0px">POWER: {props.power}</ItemText>
            <ItemText m="0px">DURABILITY: {props.durability}</ItemText>
            <ItemText>INTELLIGENCE: {props.intelligence}</ItemText>
            {props.mode === "marketplace" ? <ItemText m="0px">PRICE: {props.price}</ItemText> : null}
        </ItemInfo>
    </ItemContainer>
    </Link>
  )
}

export default ItemComponent
//__________________________________________________________________________________________________________________________