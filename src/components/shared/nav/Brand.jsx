import React from 'react'
import styled from "styled-components";

const Brand = () => {

  return(
    <Image src="https://res.cloudinary.com/dz7yojyef/image/upload/v1628186120/portfolio/Screen_Shot_2021-08-05_at_11.54.15_AM_qchrob.png" alt='Company Logo'/>
  )
}

export default Brand;

const Image= styled.img`
  width: 90px;
  /* height: 100%; */
  margin: auto 0;
  // border: 1px solid red;
`;
