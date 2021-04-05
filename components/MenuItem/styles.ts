import styled from "styled-components";
import { Box } from "@material-ui/core";

const StyledMenuItem = styled(Box)`
  background-color: #f7f7f7;
  width: 80%;
  height: auto;
  padding: ${({ theme }) => theme.paddings.m};
  margin: ${({ theme }) => theme.margins.xs};
  color: ${({ theme }) => theme.palette.grey.dark};
  font-weight: bold;
  border: 1px solid #ccc;
  cursor: move;
`;

export { StyledMenuItem };
