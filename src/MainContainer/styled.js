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
  width: 633px;
  height: 57px;
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

export const Container = styled.div`
  margin: 73px 354px;
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.colors.boxShadow}, 0px -2px 50px 0px ${({ theme }) => theme.colors.boxShadow};
  border-radius: 4px;
  padding-top: 32px;
  `;

export const H2 = styled.h2`
font-weight: 900;
font-size: 30px;
border-bottom: 1px solid ${({ theme }) => theme.colors.iron};
padding-bottom: 13px;
margin:32px;
margin-top: 0;
`;

export const Ul = styled.ul`
  list-style-type: none;
  color: ${({ theme }) => theme.colors.slateGray};
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 15px;
  
`;

export const ListItem = styled.li`
  font-weight: 400;
  font-size: 18px;
  width: calc(33.33% - 8px);
  margin-bottom: 8px;

  &::before {
    content: "•";
    font-size: 18px;
    color: ${({ theme }) => theme.colors.mainBlue};
    margin-right: 16px;
  }
`;
