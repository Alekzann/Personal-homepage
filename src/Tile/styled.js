import styled from "styled-components";

export const TilesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  
`;

export const Tile = styled.div`
  width: 592px;
  height: 322px;
  padding: 20px 60px;
  border: 6px solid #D1D5DA4D;
  background-color: ${({ theme }) => theme.colors.white};
  
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
`;

export const TileHeader = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0.05em;
  text-align: left;
  color: ${({ theme }) => theme.colors.mainBlue};
`;

export const TileContent = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.05em;
  text-align: left;
  color: ${({ theme }) => theme.colors.slateGray};
`;

export const TileDemo = styled.p`
font-size: 18px;
font-weight: 400;
line-height: 25px;
letter-spacing: 0.05em;
text-align: left;
color: ${({ theme }) => theme.colors.slateGray};
`;

export const TileCode = styled.p`
font-size: 18px;
font-weight: 400;
line-height: 25px;
letter-spacing: 0.05em;
text-align: left;
color: ${({ theme }) => theme.colors.slateGray};
`;
