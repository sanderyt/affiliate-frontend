import styled from "styled-components";

const TextfieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.margins.s};
`;

const Label = styled.span`
  font-weight: bold;
  font-size: 0.75rem;
`;

const StyledTextfield = styled.input`
  outline: none;
  padding: ${({ theme }) => theme.paddings.m};
  border-radius: ${({ theme }) => theme.borderRadius.l};
  border: 1px solid ${({ theme }) => theme.palette.grey.medium};
  transition: 250ms;
  font-size: 1rem;
  height: 50px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.primary};
  }
`;

export { TextfieldWrapper, Label, StyledTextfield };
