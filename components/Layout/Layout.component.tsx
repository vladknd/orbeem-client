import React from 'react'
import { useRouter } from 'next/router'
import { LayoutContainer } from './Layout.styled'
import HeaderComponent from '../Header/Header.component'
import FooterComponent from '../Footer/Footer.component'

const Layout = (props: any) => {
  const Router = useRouter()
  return (
    <LayoutContainer>
        {Router.pathname === "/registration" ? null : <HeaderComponent/>}
            {props.children}
        {Router.pathname === "/registration" ? null : <FooterComponent/>}
    </LayoutContainer>
  )
}

export default Layout