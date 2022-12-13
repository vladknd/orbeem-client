import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {
  NewsContainer,
  NewsContent,
  NewsDateText,
  NewsHeader,
  NewsImage,
  NewsItemButton,
  NewsItemContainer,
  NewsItemDate,
  NewsItemHeader,
  NewsItemText,
} from "./News.styled";

interface INewsItem {
  header: string;
  text: string;
  medium: string;
  img: string;
  date: string;
}
const NewsItem = (props: INewsItem) => {
  const Router = useRouter();
  return (
    <NewsItemContainer>
      <NewsContent>
        <NewsItemHeader>{props.header}</NewsItemHeader>

        <NewsItemText>{props.text}</NewsItemText>
        <NewsItemButton
          onClick={() => {
            Router.push(props.medium);
          }}
        >
          READ MORE
        </NewsItemButton>
        <NewsItemDate>
          <Image src="/cal.svg" width={20} height={0} />
          <NewsDateText>{props.date}</NewsDateText>
        </NewsItemDate>
      </NewsContent>
      {/* <NewsItemImage img={props.img}/> */}
      {/* <props.img/> */}
      <NewsImage>
        <Image src={props.img} layout="fill" />
      </NewsImage>
    </NewsItemContainer>
  );
};

const NewsComponent = () => {
  return (
    <NewsContainer>
      <NewsHeader>ORBEEM NEWS</NewsHeader>

      <NewsItem
        header="ORBEEM LAUNCHES ITS FIRST DOTA-2 TOURNAMENT!"
        text="
          We present to your attention the Orbeem DotA 2 tournament.
          The tournament is held in a 1v1 format. An unforgettable experience awaits you. many valuable prizes, such as ORB tokens for all tournament participants, NFTs from a unique collection and real money for the top 3.
          Hurry up to register for the tournament, the number of places is limited.
          Become the best of the best, show what you are capable of.
          DECEMBER 22-23, 2022
        "
        medium="https://www.orbeem.store/tournament"
        img="/tournament.png"
        date="10 December, 2022"
      />
      <NewsItem
        header="FIRST ORBEEM NFT COLLECTION HAS BEEN RELEASED!"
        text="
                AEGIS - is the first ORBEEM NFT collection. It is inspired by Dota 2,
                and shows the ultimate symbol of victory in the game - Aegis. 
                Each NFT in the collection has attributes which affect 
                the final reward you can get. Depending on the number
                of kills, deaths, assists and your NFT attributes, 
                you will be able to get ORB tokens once every 24 hours. 
            "
        medium="https://medium.com/@orbeem.info/orbeem-nfts-aegis-collection-9a3013fc478e"
        img="/1.png"
        date="20 SEPTEMBER, 2022"
      />

      <NewsItem
        header="ORBEEM METAVERSE HAS BEEN LAUNCHED!"
        text="
                We are happy to annouce that our platform has been successfully launched!
                 
            "
        medium="https://medium.com/@orbeem.info/introducing-orbeem-game-fi-metaverse-4ad97860d618"
        img="/dashboard.svg"
        date="1 SEPTEMBER, 2022"
      />
    </NewsContainer>
  );
};

export default NewsComponent;
