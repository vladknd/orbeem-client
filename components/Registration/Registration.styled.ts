import { Field, Form } from "formik";
import styled from "styled-components";
import { Button1, GlowText } from "../../styles/Components.styled";
// import { MyField } from './Registration.component'
export const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100vh;
`;
export const RegistrationHeader = styled(GlowText)`
  font-size: 40px;
`;

export const SignupButton = styled(Button1)`
  margin-top: 30px;

  width: 30%;
  height: 70px;
`;
export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  background-image: linear-gradient(
    to right top,
    #4d227a,
    #432072,
    #3a1e6b,
    #311c63,
    #291a5b,
    #282162,
    #272869,
    #262f70,
    #284189,
    #2755a3,
    #1f69bd,
    #007ed7
  );
  background-position: center;
  background-repeat: repeat;
  background-size: fill;
`;

export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 15px 0px;
  display: flex;
  flex-direction: row;

  width: 80%;
  height: 30px;
`;

export const Input = styled.input`
  margin: 10px;

  width: 70%;
  padding: 10px 10px;
  background: transparent;

  color: white;
  font-size: 25px;
  font-family: Inter;
  font-weight: 200;
  letter-spacing: 3px;

  border: 0.1px solid white;
  /* border-radius: 2%; */
  outline: none;

  &:focus {
    border: 0.1px solid #6d52d1;
  }
`;

export const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const ErrorContainer = styled.div`
  margin-top: 5%;
  border: 0.5px solid red;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 60%;
  height: 60px;

  color: white;
  font-size: 20px;
  font-family: Inter;
  font-weight: 200;
  letter-spacing: 3px;
`;
