import Image from 'next/image'
import React from 'react'
import { NewsContainer, NewsDateText, NewsHeader, NewsItemButton, NewsItemContainer, NewsItemDate, NewsItemHeader, NewsItemImage, NewsItemText } from './News.styled'


const NewsItem = () => {
    return (
        <NewsItemContainer>
            <NewsItemHeader>
                FIRST ORBEEM NFT COLLECTION <br/> 
                HAS BEEN RELEASED!
            </NewsItemHeader>

            <NewsItemText>
                To Start earning rewards and buy Our nfts, <br/>
                the players have to link their steam account <br/>
                to orbeem ECosystem. This is done by minting <br/>
                a unique avatar nft. please enter the following <br/>
                data into the corresponding fields.
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