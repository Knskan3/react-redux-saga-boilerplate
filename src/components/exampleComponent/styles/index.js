import styled from 'styled-components';

import wowImg from './img/wow.png';

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
export const Wrapper = styled.div`
  font-family: Circular-Pro-Black,Helvetica Neue,Arial,Helvetica,sans-serif;
  font-weight: 400;
  background: url(${wowImg}) no-repeat center center;
  color: #f05e5e;
  background-color: #ffdf9f;
  text-rendering: optimizelegibility;
  text-align: center;
  padding: 100px;
`;

export const Title = styled.h2`
  font-size: 32px;
  letter-spacing: 16px;
  text-transform: uppercase;
  margin: 0;
`;
