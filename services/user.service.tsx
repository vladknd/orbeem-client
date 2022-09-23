import { setCookies } from 'cookies-next';
import { useContext } from 'react';
import { URIs } from '../config';
import { UserContext } from '../context/user.context';
import { IUser } from '../interfaces/user.interfaces';
  
export const useUser = () => {
  return useContext(UserContext)
}

export const registerUser = async (_user: IUser) => {
  const registerUserRes = await fetch(`${URIs.apiURI}/graphql`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        query: `
        mutation Mutation($publicAddress: String!, $email: String!, $firstName: String!, $surname: String!, $steamId: String!) {
          register(publicAddress: $publicAddress, email: $email, firstName: $firstName, surname: $surname, steamId: $steamId) {
            __typename
            ... on AuthSuccess {
              user {
                email
              }
              token
            }
            ... on AuthError {
              type
              message
            }
          }
        }
        `,
        variables: {
          publicAddress: _user.publicAddress,
          email: _user.email,
          firstName: _user.firstName,
          surname: _user.surname,
          steamId: _user.steamId
        }
    })
  })
  console.log("REGISTER-USER-SERVICE: RESPONSE", registerUserRes)

  const registerUserData = await registerUserRes.json()
  console.log("REGISTER-USER-SERVICE: DATA", registerUserData);
  return registerUserData.data.register
  // const {user, token} = registerUserData.data.register
  // setCookies("jwt", token)
  // return user
}