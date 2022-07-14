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
import { Text } from '../../styles/Components.styled'

//ITEM-COMPONENT:________________________________________________________________________________________________________
interface INFTComponent {
    id: number;
    level: number;
    power: number;
    durability: number;
    price: string;
    image: string;
}
const ItemComponent = (props: INFTComponent) => {
  return (
    <Link  href={`/nft/${props.id}`} passHref>
    <ItemContainer image={props.image} style={{cursor:"pointer"}}>
        <ItemInfo>
            <ItemText  m="8px">LEVEL: {props.level}</ItemText>
            <ItemText  m="8px">POWER: {props.power}</ItemText>
            <ItemText  m="8px">DURABILITY: {props.durability}</ItemText>
            <ItemText  m="8px">PRICE: {props.price}</ItemText>
        </ItemInfo>
    </ItemContainer>
    </Link>
  )
}

export default ItemComponent
//__________________________________________________________________________________________________________________________