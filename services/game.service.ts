import { URIs } from "../config";

export const claimTokens = async (tokenID: number, publicAddress: string) => {
    const res = await fetch(`${URIs.apiURI}/graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query:`
                query Query($publicAddress: String!, $tokenId: Int!) {
                    claimTokens(publicAddress: $publicAddress, tokenID: $tokenId){
                        award 
                        kills
                        deaths
                        assists
                    }
                }
            `,
            variables: {
                publicAddress,
                tokenId: Number(tokenID)
            }
        }),
        
    })
    const resData = await res.json()

    return resData
    console.log("MATCH RESULTS", resData);
    
}

export const mintTokens = async (tokenID: number, publicAddress: string) => {
    const res = await fetch(`${URIs.apiURI}/graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query:`
                mutation Mutation($publicAddress: String!, $tokenId: Int!) {
                    mintTokens(publicAddress: $publicAddress, tokenID: $tokenId)
                }
            `,
            variables: {
                publicAddress,
                tokenId: Number(tokenID)
            }
        }),
        
    })
    const resData = await res.json()

    return resData
    console.log("MATCH RESULTS", resData);
    
}