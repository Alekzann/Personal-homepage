import styled from "styled-components";

export const Portfolio = styled.div`
  margin: 72px 352px;
`;

export const PortfolioSectionName = styled.h2`
  color: ${({ theme }) => theme.colors.mineShaft};
  font-size: 30px;
  font-weight: 900;
  line-height: 36px;
  letter-spacing: 0.05em;
  text-align: center;
`;

export const PortfoliosHeader = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.mineShaft};
`;
