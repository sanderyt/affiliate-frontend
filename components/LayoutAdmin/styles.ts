import styled from "styled-components";
import { Box } from "@material-ui/core";

const ActionsBar = styled(Box)`
  background-color: ${({ theme }) => theme.palette.grey.light};
  padding: ${({ theme }) => theme.paddings.m};
`;

export { ActionsBar };
