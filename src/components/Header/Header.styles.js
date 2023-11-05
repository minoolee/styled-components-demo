import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    position: sticky;
    top: 0;
    background-color: white;
    flex-direction: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border-bottom: 1px solid #333;
    margin-bottom: 1rem;

`
export const StyledNavbar = styled.nav`
flex-basis:30%
   
    `
export const StyledUl = styled.ul`
 display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
export const StyledLi = styled.li`
    list-style-type: none;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
    `

export const StyledOl = styled.ol`
display: flex;
li{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    margin: 0.5rem;

}

`