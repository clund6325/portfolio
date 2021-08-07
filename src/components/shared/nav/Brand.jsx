import React from 'react'
import styled from "styled-components";

const Brand = () => {

  return(
    <Image src="https://res.cloudinary.com/dz7yojyef/image/upload/v1628369154/portfolio/Screen_Shot_2021-08-07_at_2.44.09_PM_wy34et.png" alt='Company Logo'/>
  )
}

export default Brand;

const Image= styled.img`
  width: 90px;
  /* height: 100%; */
  margin: auto 0;
  // border: 1px solid red;
`;
