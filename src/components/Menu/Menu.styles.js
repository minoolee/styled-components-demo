import styled from 'styled-components'


export const MenuStyled = styled.menu`
border: 2px solid #333;
  border-radius: 2rem;
  margin: 0 auto 1rem;
  max-width: 600px;
  font-size: 3rem;
  line-height: 7rem;
`

export const MenuH2 = styled.h2`
padding: 1rem;
background-color: forestgreen;
border-radius: 2rem 2rem 0 0;
`

export const MenuUl = styled.ul`
list-style-type: none;
`
export const MenuList = styled.li`
a{
  display: block;
}
&:last-child a {
  border-radius: 0 0 2rem 2rem
}
border-top: 1px solid #333;
`
export const MenuLink = styled.a`
text-decoration: none;
 color: #333;
 &:visited {
  color: red;
 }
 &:hover, focus {
  background: #333;
  color: whitesmoke;
  cursor: pointer;
 }
`


/* export const NavbarStyled = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index: 999;
background-color: ${props => props.theme.colors.primary};
box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
transition: all .3s ease-in-out;
transform: translateY(${({ isOpen }) => (isOpen ? "0" : "-80px")});
@media screen and (max-width: 768px) {
  padding: 1rem;
}
` */
