import { ApolloClient, InMemoryCache } from '@apollo/client'

const apiURI = "http://localhost:4000/graphql"

export const graphClient = new ApolloClient({
    uri: apiURI,
    cache: new InMemoryCache()
})