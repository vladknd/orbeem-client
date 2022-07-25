import React from "react"
import { IUser, IUserContext } from "../interfaces/user.interfaces"

const UserContextDefault = {
    user: null,
    setLoggedIn: () => {},
    setLoggedOut: () => {},
}
export const UserContext = React.createContext<IUserContext>(UserContextDefault)


export const UserProvider = (props: any) => {
    const [userState, setUserState] = React.useState<IUser | null>(null)
  
    const setLoggedIn = (user: IUser) => {
      setUserState({
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        surname: user.surname,
        publicAddress: user.publicAddress,
        steamId: user.steamId,
        balance: user.balance,
        verified: user.verified
      })
      
    }
  
    const setLoggedOut = () => {
      setUserState(null)
    }
  
    const value = {
      user: userState,
      setLoggedIn,
      setLoggedOut
    }
  
    return (
      <UserContext.Provider value={value}>
       {props.children}
      </UserContext.Provider>
    )
}