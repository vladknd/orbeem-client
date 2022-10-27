import React from 'react'
import { useRouter } from 'next/router'
import { ContentContainer, LayoutContainer } from './Layout.styled'
import HeaderComponent from '../Header/Header.component'

const Layout = (props: any) => {
  const Router = useRouter()
  return ( 
    <LayoutContainer>
        {Router.pathname === "/registration" ? null : <HeaderComponent/>}
        <ContentContainer>
          {props.children}
        </ContentContainer>
            
        {/* {Router.pathname === "/registration" ? null : <FooterComponent/>} */}
    </LayoutContainer>
  )
}

export default Layout