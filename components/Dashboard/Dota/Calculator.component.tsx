//_______________GLOBAL-IMPORTS___________________
import styled from "styled-components"
import Image from "next/image"
//_______________LOCAL-IMPORTS____________________
//SERVICES________________________________________
import { useAppDispatch, useAppSelector } from "../../../redux/reduxHooks"
//STYLED-COMPONENTS_______________________________
import { Text } from "../../../styles/Components.styled"
const MinterContainer = styled.div`
    margin-top: 40px;
    padding: 0px 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:  space-between;

    width: 80%;
    height: 40px;

    border: 0.1px solid #555555;
    border-radius: 10px;

    background: rgba(53, 53, 53, 0.2);

`
export const MinterText = styled(Text)`
  font-size: 16px;
`
const Side = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 16px;
    font-family: Inter; 
    font-weight: 200;
`

export const Calculator = () => {
    const { match } = useAppSelector(state => state.DOTA)
    
    return (
      <MinterContainer>
        <Side>
          <MinterText>REWARD:</MinterText>
        </Side>
        <Side>
          {match ? match.award : 0}
          <Image src="/logo.svg" width={30} height={30}/>
        </Side>
      </MinterContainer>
    )
}