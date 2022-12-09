import Image from 'next/image'
import React from 'react'
import { 
  InfoButton,
  InfoButtonsGroup,
  ParticipateButton,
    TournamentContainer, 
    TournamentContent, 
    TournamentHeader, 
    TournamentImage,
    TournamentText
} from './Tournament.styled'

const TournamentComponent = () => {
  return (
    <TournamentContainer>
        <TournamentContent>
            <TournamentImage>
                <Image src="/tournament.svg" layout='fill'/>
            </TournamentImage>
            <TournamentHeader>
              ORBEEM TOURNAMENT
            </TournamentHeader>
            <TournamentText>
              To promote esports games and attract audience, 
              Orbeem hosts a Best Of 1 tournament with a 1v1 knockout game. 
              The tournament will take 2 days. The prize of $500 will be divided between 1st, 2nd and the 3rd place. 
              All participants will receive ORB tokens.
            </TournamentText>
            <InfoButtonsGroup>
              <InfoButton>RULES</InfoButton>
              <InfoButton>INSTRUCTIONS</InfoButton>
              <InfoButton>FAQ</InfoButton>
            </InfoButtonsGroup>
            <ParticipateButton>
              PARTICIPATE
            </ParticipateButton>
        </TournamentContent>
    </TournamentContainer>
  )
}

export default TournamentComponent