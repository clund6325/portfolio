import styled from 'styled-components';

export const HeadingMob = styled.div`
  font-weight: bold;
  font-size: 4em;
  color: black;
  padding-top:  .4em;
  margin-bottom: .6em;
  text-align: center;

  /* iPad */
  @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    font-size: 5em;
    margin-bottom: 1em;
  }

`;