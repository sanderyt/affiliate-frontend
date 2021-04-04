import styled from "styled-components";

const FromPrice = styled.span`
  color: ${({ theme }) => theme.palette.error};
  margin: ${({ theme }) => theme.margins.xs};
  text-decoration: line-through;
  font-weight: 700;
  font-size: 1rem;
`;

const Price = styled.span`
  color: ${({ theme }) => theme.palette.secondary};
  margin: ${({ theme }) => theme.margins.xs};
  font-weight: 700;
  font-size: 1.5rem;
`;

const DeliveryTime = styled.span`
  color: ${({ theme }) => theme.palette.grey.veryDark};
  font-weight: 700;
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.margins.m} 0;
`;

export { FromPrice, Price, DeliveryTime };
