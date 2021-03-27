import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.palette.layout.footer};
  margin-top: ${({ theme }) => theme.margins.xl};
  color: white;
`;

export { StyledFooter };
