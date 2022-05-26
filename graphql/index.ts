import { ApolloClient, InMemoryCache } from '@apollo/client'

export const graphClient = new ApolloClient({
    uri: 'https://ec2-52-37-206-149.us-west-2.compute.amazonaws.com:4000/graphql',
    cache: new InMemoryCache()
})