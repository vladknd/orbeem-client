//_______________________GLOBAL-IMPORTS__________________________
import { 
  getCookie, 
  setCookies 
} from 'cookies-next'
import { 
  useEffect, 
  useState 
} from "react"

//_______________________LOCAL-IMPORTS___________________________
//SERVICES:______________________________________________________
import { useUser } from "./user.service"
import { 
  signMessage, 
  useWeb3 
} from './web3.service'
//GRAPHQL________________________________________________________
import { useMutation } from "@apollo/client"
import { VERIFY_JWT } from "../graphql/mutations/User.mutations"
//CONFIGS________________________________________________________
import Router from 'next/router'
import { URIs } from '../config'




export const useAuthorize = () => {
    const { setLoggedIn } = useUser()
    const { publicAddress, chainId } = useWeb3()

    const [verifyJwt, {loading}] = useMutation(VERIFY_JWT)
    const [authorized, setAuthorized] = useState<boolean>(false)
    
    useEffect(() => {
      console.log("USE AUTHORIZED HERE");
      
      const jwt = getCookie("jwt")
      if(publicAddress && (chainId == 137 ) && jwt) {
        
        console.log("JWT-useAuthorize-cookies check", jwt)
        console.log("USE-AUTHORIZE: VERIFY JWT:", publicAddress, chainId)
        
          verifyJwt({variables: {token: jwt}}).then((result) => {
            console.log("VERIFY JWT REQUEST:",result);
            const user = result.data.verifyJwt
            console.log("JWT: USER VERIFIED", user);
            setLoggedIn(user)
            setAuthorized(true)
          }).catch((error) => {
            setAuthorized(false)
          })
      } else {
        connect()
      }
      
    },[publicAddress])

    async function connect() {
      console.log("STARTED CONNECT", {publicAddress, chainId});
      // const jwt = getCookie("jwt")
      if(publicAddress && (chainId == 137) ) {
        console.log("CONT CONNECT");
        login(publicAddress).then(user => {
          console.log("USER: LOGGED IN AGAIN", user);
          setLoggedIn(user)
          setAuthorized(true)
          // return true
        }).catch(error => {
          console.log("ERROR:", error);
          // return false
        })
      }
    }

    return {connect, authorized, loading } 
}


//_______________________________________LOGIN____________________________________________________
export const login = async (_publicAddress: string) => {
  console.log("LOGIN PROCEDURE INITIATED...")
  
  const checkUserRes = await fetch(`${URIs.apiURI}/graphql`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          query: `
              query FindUser($publicAddress: String!) {
                  findUser(publicAddress: $publicAddress) {
                      publicAddress
                      nonce
                  }
              }
          `,
          variables: {
              publicAddress: _publicAddress
          }
      })
  })
  console.log("LOGIN PROCEDURE: RESPONSE", checkUserRes)

  const checkUserData = await checkUserRes.json()
  console.log("LOGIN PROCEDURE: CHECK USER DATA", checkUserData);


  if(!checkUserData.data.findUser){
      console.log("LOGIN PROCEDURE: USER NOT FOUND")
      Router.push('/registration')
      throw new Error("USER DOES NOT EXIST")
  } else { 
      const { nonce, publicAddress } = checkUserData.data.findUser
      const sigMsg = await signMessage(nonce, publicAddress)
      console.log("LOGIN PROCEDURE: SIGNATURE",sigMsg)

      console.log("LOGIN PROCEDURE: USER VERIFICATION REQUEST")
      const verifyUserRes = await fetch(`${URIs.apiURI}/graphql`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              query: `
                  mutation Login($publicAddress: String!, $signature: String!) {
                      login(publicAddress: $publicAddress, signature: $signature) {
                          token,
                          user {
                              publicAddress
                              firstName
                              surname
                              email
                              verified
                              username
                          }
                      }
                  }
              `,
              variables: sigMsg
  
          })
      })

      const verifyUserData = await verifyUserRes.json()
      console.log("LOGIN PROCEDURE: VERIFY USER DATA", verifyUserData)

      const { token, user } = verifyUserData.data.login
      console.log("LOGIN PROCEDURE:TOKEN", token);
      console.log("LOGIN PROCEDURE:USER", user);
      
      setCookies("jwt", token)
      console.log("LOGIN PROCEDURE: COOKIES SET")
      
      return user
  }
}
//_________________________________________________________________________________________________




//____________________________CHECK-ADMIN_______________________________________
export const checkAdmin = async (_address: string) => {
  if(_address === "0x16bD38012725eFEc123C31338Ab724573813e36C") return true
  return false
}
//______________________________________________________________________________