import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
   <Nav>
      <Logo src = ""/>
      <NavMenu>

      </NavMenu>
   </Nav>
  )
}

export default Header

const Nav = styled.nav`
height: 70px;
  background: #090b13;
`

const Logo = styled.img`
    width: 80px;

`

const NavMenu = styled.div`

`