declare let window: any

//________________________GLOBAL-IMPORTS________________
import '../styles/globals.css'
import type { AppProps } from 'next/app'


import { useRouter } from 'next/router'
import {ApolloProvider} from '@apollo/client'
import { graphClient } from '../graphql'
//PROVIDERS______________________________________________
import { UserProvider } from '../context/user.context'
import { Web3Provider } from '../context/web3.context'
//COMPONENTS_____________________________________________
import Layout from '../components/Layout/Layout.component'


function MyApp({ Component, pageProps }: AppProps) {
  const Router = useRouter()

  return (
    <Web3Provider>
      <UserProvider>
        <ApolloProvider client={graphClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </UserProvider>
    </Web3Provider>
  )

}

export default MyApp
