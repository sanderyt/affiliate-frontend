import styled from "styled-components";
import { Box } from "@material-ui/core";

const StyledContentBox = styled(Box)`
  background-color: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
  width: 80%;
  padding: ${({ theme }) => theme.paddings.m};
  margin: ${({ theme }) => theme.margins.l};
  border-radius: ${({ theme }) => theme.borderRadius.m};
`;

export { StyledContentBox };
