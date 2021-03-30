import styled from "styled-components";

const StyledSidebar = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.grey.veryDark};
  color: white;
`;

const SidebarItem = styled.div`
  background-color: ${({ theme }) => theme.palette.grey.dark};
  height: 40px;
  font-weight: 700;
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => theme.paddings.s};
  cursor: pointer;

  &:hover {
    background-color: #aaa;
  }
`;

export { StyledSidebar, SidebarItem };
