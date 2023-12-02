// Header.js
import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: rgb(70, 19, 160);
  color: white;
  padding: 2rem;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Phạm Hà Minh QUyên</h1>
      <p>BA</p>
    </HeaderWrapper>
  );
};

export default Header;
