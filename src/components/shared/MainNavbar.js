import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { Navbar, Container, Link } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const MainNavbar = ( ) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  })

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  })

  return(
    <>
    <Navbar style={barAnimation}>
      <FlexContainer>
        <NavLinks style={linkAnimation}>
          <HashLink className='nav-links' to="/#home" smooth>Home</HashLink>
          <HashLink className='nav-links' to="/#about" smooth>About</HashLink>
          <HashLink className='nav-links' to="/#contact" smooth></HashLink>
        </NavLinks>
      </FlexContainer>
    </Navbar>
    </>
  )
}

export default MainNavbar;