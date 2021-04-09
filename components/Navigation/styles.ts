import styled from "styled-components";
import { Box } from "@material-ui/core";

const StyledNavigation = styled(Box)`
  height: 100%;
`;

const NavigationList = styled.ul`
  display: flex;
  list-style-type: none;
`;

const NavigationItem = styled.li`
  font-size: 1rem;
  margin: ${({ theme }) => theme.margins.xs};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.palette.primary};
  }
`;

export { StyledNavigation, NavigationList, NavigationItem };
