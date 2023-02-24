import React from "react";

import styled from "styled-components";

const StyledHeader = styled.div`
  text-align: center;
  h1 {
    font-weight: 400;
  }
`;
const Header: React.FC = () => {
  return (
    <StyledHeader>
      <h1>Simple Random User App</h1>
    </StyledHeader>
  );
};

export default Header;
