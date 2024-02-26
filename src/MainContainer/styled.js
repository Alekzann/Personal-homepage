import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 1089px;
  max-height: 384px;
  margin-top: 119px;
  margin-left: 353px;
  display: flex;
  align-items: center;
`;
export const H1 = styled.h1`
  line-height: 46px;
  font-weight: 900;
  font-size: 38px;
`;

export const Img = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 50%;
`;

export const InternalContainer = styled.div`
  width: 633px;
  height: 247px;
  margin-left: 72px;
`;

export const Caption = styled.p`
  width: 43px;
  height: 16px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15.6px;
  color: ${({ theme }) => theme.colors.slateGray};
`;

export const LeadParagraph = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.slateGray};
`;

export const ButtonHire = styled.button`
  width: 154px;
  height: 49px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24.28px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.mainBlue};
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
  letter-spacing: 5%;
`;
