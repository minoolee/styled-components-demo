
import React from 'react'
import {GoSearch} from 'react-icons/go'
import {FaUserAlt} from 'react-icons/fa'
import {BiSolidShoppingBags} from 'react-icons/bi'
import { Link } from 'react-scroll'
import { StyledHeader, StyledLi, StyledOl, StyledNavbar, StyledUl} from './Header.styles'


export const Header = () => {
  return (
    <StyledHeader>
        <StyledNavbar>
            <StyledUl>
            <StyledLi><Link to="home">Home</Link></StyledLi>
            <StyledLi><Link to='men'>Men</Link></StyledLi>
            <StyledLi><Link to='women'>Women</Link></StyledLi>
            <StyledLi><Link to='kids'>Kids</Link></StyledLi>
            </StyledUl>
            </StyledNavbar>
     <h1>
            Brillent
        </h1>
        <menu>
            <StyledOl >
                <li><GoSearch className='ml-2' /><span >Search</span></li> {/* onclick */}
                <li><FaUserAlt /><span >Sing in</span></li>
                <li><BiSolidShoppingBags /><span>Shopping Bag</span></li>
            </StyledOl>
        </menu>
        </StyledHeader>
  )
}
