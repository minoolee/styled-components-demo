import {NavbarStyled, NavH2, NavUl,NavList, NavLink} from '../Navbar.styles'
import React from 'react'

export const Navbar = ()=> {
  return (
    <div>
      <NavbarStyled>
      <NavH2>Logo</NavH2>
        <NavUl>
          <NavList><NavLink href="../Limks/About.html">About</NavLink></NavList>
         <NavList><NavLink href='Home.html'>Home</NavLink></NavList>
         <NavList><NavLink href="Acount.html">Acount</NavLink></NavList>
         <NavList><NavLink href="Contact.html">Contacts</NavLink></NavList>
         </NavUl>
      </NavbarStyled>
    </div>
  )
}
