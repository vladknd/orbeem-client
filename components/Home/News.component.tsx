import Image from 'next/image'
import React from 'react'
import { 
    NewsContainer, 
    NewsDateText, 
    NewsHeader, 
    NewsItemButton, 
    NewsItemContainer, 
    NewsItemDate, 
    NewsItemHeader, 
    NewsItemImage, 
    NewsItemText 
} from './News.styled'


const NewsItem = () => {
    return (
        <NewsItemContainer>
            <NewsItemHeader>
                FIRST ORBEEM NFT COLLECTION <br/> 
                HAS BEEN RELEASED!
            </NewsItemHeader>

            <NewsItemText>
                AEGIS - is the first ORBEEM NFT collection. It is inspired by Dota 2,<br/>
                and shows the ultimate symbol of victory in the game - Aegis. <br/>
                Each NFT in the collection has attributes which affect <br/>
                the final reward you can get. Depending on the number<br/>
                of kills, deaths, assists and your NFT attributes, <br/>
                you will be able to get ORB tokens once every 24 hours. <br/>
            </NewsItemText>
            <NewsItemButton>
                EXPLORE NOW
            </NewsItemButton>
            <NewsItemDate>
                    <Image src="/cal.svg"
                        width={20}
                        height={30}
                    />
                <NewsDateText>
                    10 SEPTEMBER, 2022
                </NewsDateText>
            </NewsItemDate>
            <NewsItemImage/>
        </NewsItemContainer>
    )
}

const NewsComponent = () => {
  return (
    <NewsContainer>
        <NewsHeader>
            ORBEEM NEWS
        </NewsHeader>
        <NewsItem/>

     
    </NewsContainer>
  )
}

export default NewsComponent