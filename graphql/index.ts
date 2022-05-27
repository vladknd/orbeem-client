import { ApolloClient, InMemoryCache } from '@apollo/client'

export const graphClient = new ApolloClient({
    uri: 'https://orbeem-api.herokuapp.com/graphql',
    cache: new InMemoryCache()
})