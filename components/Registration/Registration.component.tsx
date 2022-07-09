import { useMutation } from '@apollo/client';
import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { 
    SetStateAction, 
    useEffect, 
    useState 
} from 'react'
import { REGISTER_USER } from '../../graphql/mutations/User.mutations'
import { useWeb3 } from '../../services/web3.service';
import { Button1, GlowText } from '../../styles/Components.styled'
import { getAccount } from '../../web3/web3Utils';
import { 
    Input, 
    InputContainer, 
    Left, 
    RegistrationContainer, 
    RegistrationForm, 
    Right 
} from './Registration.styled'


//---------------------------------------------------------INPUT-COMPONENT:
interface RegData {
    publicAddress?: string;
    username?: string;
    email?: string;
    firstName?: string;
    surname?: string;
}
interface InputProps {
    label: string;
    name: string;
  
    setter: React.Dispatch<SetStateAction<RegData | null>>;
}
const InputField = ({label, name, setter}: InputProps) => {
    return (
    //   <InputContainer>
        <Input type="text" id={name} placeholder={label}
          onChange={(e) => {
            setter((prevState: RegData | null) => { return {...prevState, [name]: e.target.value}})
          }}
        />
    //   </InputContainer>
    )
}

//____________________________REGISTRATION-COMPONENT_________________________
const RegistrationComponent = () => {
  const Router = useRouter()
  const [regData, SetRegData] = useState<RegData | null>(null)
  const [signUp] = useMutation(REGISTER_USER)
  const {publicAddress} = useWeb3()
  useEffect(()=> {
    console.log("REG-DATA", regData)
  }, [regData])

  useEffect(() => {
    setAddress()
  }, [])

  const setAddress = async () => {
    // const addr = await getAccount()
    SetRegData({publicAddress: publicAddress})
  }

  return (
    <RegistrationContainer>
        <Left>
            <Image src="/reg_logo.svg" width={700} height={700}/>
        </Left>

        <Right>
            <GlowText size={50} m="50px 0px">
                REGISTRATION
            </GlowText>

            <RegistrationForm onSubmit={async (event) => {
              event.preventDefault()
              const newUser = await signUp({variables: {
                  publicAddress: regData?.publicAddress,
                  email: regData?.email,
                  firstName: regData?.firstName,
                  surname: regData?.surname,
                  username: regData?.username
              }})
              console.log("NEW USER", newUser);
              Router.push("/")
            }}>
                <InputField label='FIRST-NAME' name="firstName" setter={SetRegData}/>
                <InputField label='SURNAME' name="surname" setter={SetRegData}/>
                <InputField label='EMAIL' name="email" setter={SetRegData}/>
                <InputField label='STEAM USERNAME' name="username" setter={SetRegData}/>
           
                <Button1 width={180} height={60} mt={100} type="submit">SIGN UP</Button1>
            </RegistrationForm>
        </Right>
    </RegistrationContainer>
  )
}

export default RegistrationComponent