import { getCookie } from 'cookies-next'
import { useEffect, useState } from "react"
import { useMutation } from "@apollo/client"
import { VERIFY_JWT } from "../graphql/mutations/User.mutations"
import { login } from "../web3/web3Utils"
import { useUser } from "./user.service"
import { useWeb3 } from './web3.service'
import {connect} from '../web3/web3Utils'


export const useAuthorize = () => {
    const [authorized, setAuthorized] = useState<boolean>(false)
    const {setLoggedIn} = useUser()
    const [verifyJwt, {loading}] = useMutation(VERIFY_JWT)
    const { publicAddress, chainId, setWeb3} = useWeb3()
    
    useEffect(() => {

      connect().then(_promise => {
        setWeb3(
            _promise.chainId,
            _promise.address
        )
      })
      
      if(publicAddress && chainId == 80001 ) {
        const jwt = getCookie("jwt")
        console.log("JWT-useAuthorize-cookies check", jwt)
        
        verifyJwt({variables: {token: jwt}}).then((result) => {
          console.log("VERIFY JWT REQUEST:",result);
          const user = result.data.verifyJwt
          console.log("JWT: USER VERIFIED", user);
          setLoggedIn(user)
          setAuthorized(true)
        }).catch((error) => {
          setAuthorized(false)
          login().then(user => {
            console.log("USER: LOGGED IN AGAIN", user);
            setLoggedIn(user)
            setAuthorized(true)
          }).catch(error => {
            console.log("ERROR:", error);
          })
        })
      }
      
    },[publicAddress, chainId])

    // async function connect() {
    //   const jwt = getCookie("jwt")
    //   console.log("JWT-useAuthorize-cookies check", jwt)
      
    //   verifyJwt({variables: {token: jwt}}).then((result) => {
    //     console.log("VERIFY JWT REQUEST:",result);
    //     const user = result.data.verifyJwt
    //     console.log("JWT: USER VERIFIED", user);
    //     setLoggedIn(user)
    //     setAuthorized(true)
    //   }).catch((error) => {
    //     setAuthorized(false)
    //     login().then(user => {
    //       console.log("USER: LOGGED IN AGAIN", user);
    //       setLoggedIn(user)
    //       setAuthorized(true)
    //     }).catch(error => {
    //       console.log("ERROR:", error);
    //     })
    //   })
    // }
    
    return [connect, authorized, loading]
}


