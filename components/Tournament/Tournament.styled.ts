import styled from "styled-components";
import {
  Box2,
  Button1,
  Button2,
  GlowText,
  Text,
} from "../../styles/Components.styled";

export const TournamentContainer = styled.div`
  margin-top: 12vh;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 85vh;
`;
export const TournamentContent = styled(Box2)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 95%;
  height: 100%;
`;

export const TournamentImage = styled.div`
  position: relative;
  width: 40%;
  height: 40%;
`;

export const TournamentHeader = styled(GlowText)`
  margin: 1%;
  font-size: 2.5vw;
`;

export const TournamentText = styled(Text)`
  width: 60%;
`;
export const InfoButtonsGroup = styled.div`
  margin: 2% 0%;
  display: flex;
  flex-direction: row;

  width: 50%;
  height: 6%;
`;
export const InfoButton = styled(Button2)`
  margin: 0% 2%;
  height: 100%;
  /* width: 20%; */
`;
export const ParticipateButton = styled(Button1)`
  /* margin: 1%; */
  width: 15%;
  height: 7%;
`;
