import Image from "next/image";
import Router, { useRouter } from "next/router";
import React from "react";
import {
  InfoButton,
  InfoButtonsGroup,
  ParticipateButton,
  TournamentContainer,
  TournamentContent,
  TournamentHeader,
  TournamentImage,
  TournamentText,
} from "./Tournament.styled";

const TournamentComponent = () => {
  const router = useRouter();
  return (
    <TournamentContainer>
      <TournamentContent>
        <TournamentImage>
          <Image src="/tournament.png" layout="fill" />
        </TournamentImage>
        <TournamentHeader>ORBEEM TOURNAMENT</TournamentHeader>
        <TournamentText>
          To promote esports games and attract audience, Orbeem hosts a Best Of
          1 tournament with a 1v1 knockout game. The tournament will take 2
          days. The prize of $500 will be divided between 1st, 2nd and the 3rd
          place. All participants will receive ORB tokens.
        </TournamentText>
        <InfoButtonsGroup>
          <InfoButton
            onClick={() => {
              router.push(
                "https://documentcloud.wondershare.com/clientShare/review/bpcFVoayn8Msp0rtjRcN4QNX9rI_t24M1M9OGDMuGKbUVLTU0jCmEskxj0OdtslB7o7eoSKfgClV6IXzgJSTyg"
              );
            }}
          >
            RULES
          </InfoButton>
          <InfoButton
            onClick={() => {
              router.push(
                "https://drive.google.com/file/d/1gJ0g_nwGfucbs9NlgJHpVBZ9ObAdjEFs/view"
              );
            }}
          >
            INSTRUCTIONS
          </InfoButton>
          <InfoButton
            onClick={() => {
              router.push(
                "https://documentcloud.wondershare.com/clientShare/review/bpcFVoayn8Msp0rtjRcN4TifKrgB1NssvUgwtklgEhUpUzK9pQyYyrBl-x1SBMpaTNJnFa566limIf4NCQO-4w"
              );
            }}
          >
            FAQ
          </InfoButton>
        </InfoButtonsGroup>
        <ParticipateButton
          onClick={() => {
            router.push(
              "https://docs.google.com/forms/d/e/1FAIpQLScv8MzNgtr0LFo43EcB9q9sKZnIGo89ujmlgKzBkViI5ZLivg/viewform"
            );
          }}
        >
          PARTICIPATE
        </ParticipateButton>
      </TournamentContent>
    </TournamentContainer>
  );
};

export default TournamentComponent;
