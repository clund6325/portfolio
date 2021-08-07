import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import {Link} from 'react-router-dom';
import { HashLink } from "react-router-hash-link";


import Brand from './Brand';

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand to='/'/>
          <NavLinks style={linkAnimation}>
             <HashLink className='nav-links' to="/#home" smooth>Home</HashLink>
             <HashLink className='nav-links' to="/#about" smooth>About</HashLink>
             <HashLink className='nav-links' to="/#contact" smooth>Contact</HashLink>
             
          </NavLinks>
        </FlexContainer>
      </NavBar>
      
   </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  /* background: #e7fffd; */
  background: #34F5D7;
  z-index: 1;
  font-size: 1.4rem;
  
  box-shadow: 0px 8px 16px 0px rgba(214, 213, 213, 0.2);
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0rem 2rem 0rem 0rem;
  justify-content: space-between;
  height: 7rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & .nav-links {
    color: #374140;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: grey;
      border-bottom: 1px solid #1BBC9B;
      // box-shadow: 0px 0px 2px 0px rgba(214, 213, 213, 0.9);
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      
    }


    @media (max-width: 768px) {
      display: none;
    }
  }
`;

