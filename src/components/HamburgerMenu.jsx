import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PiFilmSlateDuotone as Logo} from "react-icons/pi";


// Contenedor del menú
const MenuContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Línea del menú
const MenuLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${({ open }) => (open ? 'transparent' : '#FFF')};
  transition: all 0.3s ease;
  position: relative;

  &:before, &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #FFF;
    transition: all 0.3s ease;
  }

  &:before {
    top: ${({ open }) => (open ? '0' : '-10px')};
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }

  &:after {
    top: ${({ open }) => (open ? '0' : '10px')};
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;

// Contenedor del menú desplegable
const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  right: 0;
  border: var(--border-primary);
  display: ${({ open }) => (open ? 'block' : 'none')};
  z-index: 100;

  @media (min-width: 769px) {
    position: static;
    display: flex;
    flex-direction: row;
    box-shadow: none;
    border: none;
  }
`;

// Elementos del menú
const MenuItem = styled(Link)`
  display: block;
  padding: 10px 20px;
  color: #FFF;
  text-decoration: none;
  background-color: #000;
  
  &:hover{
    color: lightblue;
  }
  
  @media (min-width: 769px) {
    padding: 10px 15px;
    
  }
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
`;

const LinkHome = styled(Link)`
  display: flex;
  color: #FFF;
  align-items: center;
  text-decoration: none;
  gap: 4px;

  h4{
    margin: 0;
  }
`

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavBar>
      <LinkHome to={"/"}>
          <Logo size="28px" color="#FFF"/>
          <h4>SENAPRIME</h4>
      </LinkHome>
      <MenuContainer onClick={toggleMenu}>
        <MenuLine open={isOpen} />
      </MenuContainer>
      <DropdownMenu open={isOpen}>
        <MenuItem to="/ficcion">Ficción</MenuItem>
        <MenuItem to="/comedia">Comedia</MenuItem>
        <MenuItem to="/animadas">Animadas</MenuItem>
      </DropdownMenu>
    </NavBar>
  );
};

export default HamburgerMenu;
