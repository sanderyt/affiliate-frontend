import styled from "styled-components";
import { Box } from "@material-ui/core";

const StyledCard = styled(Box)`
  border-radius: ${({ theme }) => theme.borderRadius.l};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: ${({ theme }) => theme.paddings.xs};
`;

export { StyledCard };
