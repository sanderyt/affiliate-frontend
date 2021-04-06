import styled from "styled-components";

const StyledHeader = styled.header`
  height: 75px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 3;
`;

export { StyledHeader };
