import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px 100px 50px;
  span {
    color: ${({ theme }) => theme.colors.black};
    font-size: 40px;
    font-weight: 700;
  }
  button {
    margin-left: 8px;
    padding: 12px 20px;
  }
`;
