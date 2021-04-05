import styled from "styled-components";
import { Box } from "@material-ui/core";

const StyledMenuItem = styled(Box)`
  background-color: #f7f7f7;
  width: 80%;
  height: 50px;
  padding: ${({ theme }) => theme.paddings.m};
  margin: ${({ theme }) => theme.margins.xs};
  font-weight: bold;
  border: 1px solid #ccc;
`;

export { StyledMenuItem };
