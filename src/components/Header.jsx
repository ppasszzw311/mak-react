import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #000;
`;

const HeaderStyle = styled.header`
  background-color: #a53232;
  color: #fff;
  padding: 10px 20px;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Button>Click me</Button>
    </HeaderStyle>
  );
};

export default Header;
