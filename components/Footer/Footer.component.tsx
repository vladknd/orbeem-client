import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { 
    FooterContainer, 
    FooterContent, 
    FooterCopyrights, 
    FooterLine,  
    IconContainer, 
    SocialMedias 
} from './Footer.styled'
import data from './Footer.data'

interface IIcon {
    to: string;
    image: string;
}
const Icon = (props: IIcon) => {
    return (
        <IconContainer>
            <Link href={props.to}>
                <Image src={props.image} width={30} height={30}/>
            </Link>
        </IconContainer>
    )
}

const FooterComponent = () => {
  return (
    <FooterContainer>
        <FooterContent>
            <Image src="/logo_vertical.svg"
                width={100}
                height={90}
            />
        </FooterContent>
        <FooterLine/>
        <SocialMedias>
            {data.map((item,index) => {
                return <Icon to={item.to} image={item.image} key={index}/>
            })}
        </SocialMedias>
        <FooterCopyrights>
            @Copyright. All Rights reserved
        </FooterCopyrights>
    </FooterContainer>
  )
}

export default FooterComponent