import styled from "styled-components";

export const Container = styled.div`
  margin: 73px 354px;
  box-shadow: 0px 16px 58px 0px #090a3308, 0px -2px 50px 0px #090a3308;
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