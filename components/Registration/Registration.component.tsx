import { useMutation } from '@apollo/client';
import { Formik, useField, useFormik, useFormikContext } from 'formik';
import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { 
    SetStateAction, 
    useEffect, 
    useState 
} from 'react'
import { REGISTER_USER } from '../../graphql/mutations/User.mutations'
import { registerUser } from '../../services/user.service';
import { useWeb3 } from '../../services/web3.service';
import { Button1, GlowText } from '../../styles/Components.styled'
// import { getAccount } from '../../web3/web3Utils';
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
  const {publicAddress, connectWeb3}= useWeb3()

  useEffect(()=> {
      connectWeb3().then((_promise: any)=> {
        formik.setFieldValue("publicAddress", publicAddress)
      })
  }, [publicAddress])
  

  const formik = useFormik({
    initialValues: {
      publicAddress: '',
      email: '',
      steamId: '',
      firstName: '',
      surname: ''
    },
    onSubmit: async values => {
      console.log("VALUES", values);
      const user = await registerUser({
        publicAddress: values.publicAddress,
        firstName: values.firstName,
        surname: values.surname,
        email: values.email,
        steamId: values.steamId
      })
      console.log("REGISTERED USER", user);
      if(user) Router.push("/")
    }
  })

  
  return (
    <RegistrationContainer>
        <Left>
            <Image src="/reg_logo.svg" width={700} height={700}/>
        </Left>

        <Right>
            <GlowText size={50} m="50px 0px">
                REGISTRATION
            </GlowText>

            <RegistrationForm 
              onSubmit={formik.handleSubmit}
            >
                <Input id="firstName" placeholder='FIRST-NAME'  type="text" name="firstName" 
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                <Input id="surname" placeholder='LAST-NAME'  type="text" name="surname" 
                  onChange={formik.handleChange}
                  value={formik.values.surname}
                />
                <Input id="email" placeholder='EMAIL' type="text" name="email" 
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <Input id="steamId" placeholder='Steam ID'  type="text" name="steamId" 
                  onChange={formik.handleChange}
                  value={formik.values.steamId}
                />
                {/* <InputField label='SURNAME' name="surname" setter={SetRegData}/>
                <InputField label='EMAIL' name="email" setter={SetRegData}/>
                <InputField label='STEAM USERNAME' name="username" setter={SetRegData}/> */}
            
                <Button1 width={180} height={60} mt={100} type="submit">SIGN UP</Button1>
            </RegistrationForm>
            
        </Right>
    </RegistrationContainer>
  )
}

export default RegistrationComponent