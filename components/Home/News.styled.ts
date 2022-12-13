import Image from "next/image";
import styled from "styled-components";
import {
  Box1,
  Box2,
  Button2,
  GlowText,
  Text,
} from "../../styles/Components.styled";

//________________NEWS-COMPONENT_____________________
export const NewsContainer = styled(Box1)`
  margin: 4%;
  padding-bottom: 3%;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 90%;
`;

export const NewsHeader = styled(GlowText)`
  font-size: 3vw;
`;

export const NewsContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
`;
export const NewsImage = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 60vh;
`;

//___________________NEWS-ITEM________________________
export const NewsItemContainer = styled(Box2)`
  /* position: relative; */

  margin-bottom: 50px;
  padding: 3%;

  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 90%;
  /* height: 100%; */
`;

export const NewsItemHeader = styled(Text)`
  width: 70%;
  font-size: 2vw;
  line-height: 160%;
  letter-spacing: 8px;
`;

export const NewsItemText = styled(Text)`
  padding-top: 1%;
  padding-left: 10px;
  font-size: 1.2vw;
  opacity: 0.6;

  width: 80%;
  height: 100%;
`;

export const AegisImage = styled.div`
  position: absolute;
  z-index: -1;
  right: 1px;
  bottom: 20px;

  width: 60%;
  height: 60%;

  background: radial-gradient(
      42.56% 48.88% at 62.44% 50.08%,
      #0a090d 0%,
      rgba(13, 13, 14, 0.32) 0%,
      rgba(13, 13, 14, 0.35) 74.26%,
      #0a090d 100%
    ),
    url("aegis.jpeg");
  background-size: cover;
`;

export const LaunchImage = styled.div`
  position: absolute;
  z-index: -1;
  right: 0%;
  bottom: 10px;

  width: 40vw;
  height: 65vh;

  background: url("dashboard.svg");
  background-size: fit;
  background-repeat: no-repeat;

  /* @media  */
`;

export const PromotionImage = styled.div`
  position: absolute;
  z-index: -1;
  top: 5%;
  right: 5%;
  /* bottom: 50px; */

  width: 550px;
  height: 300px;

  background: url("promotion.webp");
  background-size: cover;
  background-repeat: no-repeat;

  /* @media  */
`;

export const NewsItemButton = styled(Button2)`
  margin: 30px 0px;
  /* bottom: 20%; */
  /* left: 6%; */
  font-size: 1.2vw;
  width: 18vw;
  height: 9vh;
`;

export const NewsItemDate = styled.div`
  bottom: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const NewsDateText = styled(Text)`
  margin-top: 0.5%;
  margin-left: 10px;

  font-size: 1vw;

  opacity: 0.85;
`;
