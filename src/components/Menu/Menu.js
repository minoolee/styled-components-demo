import {MenuStyled, MenuH2, MenuUl,MenuList, MenuLink} from './Menu.styles'
import React from 'react'

export const Menu = ()=> {
  return (
    <div className='menu'>
      <MenuStyled>
      <MenuH2>Logo</MenuH2>
        <MenuUl>
          <MenuList><MenuLink href="../Limks/About.html">About</MenuLink></MenuList>
         <MenuList><MenuLink href='Home.html'>Home</MenuLink></MenuList>
         <MenuList><MenuLink href="Acount.html">Acount</MenuLink></MenuList>
         <MenuList><MenuLink href="Contact.html">Contacts</MenuLink></MenuList>
         </MenuUl>
      </MenuStyled>
    </div>
  )
}
