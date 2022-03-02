import styled from "styled-components";
import { theme } from "./theme";

export const TileWrapper = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: ${({ theme, status }) => {
    if (status === "matched") return theme.colors.lightGrey;
    if (status === "active") return theme.colors.orange;
    return theme.colors.darkGrey;
  }};
  border-radius: 50%;
  border: none;
  font-size: 56px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background-color 150ms;
  @media (max-width: 800px) {
    font-size: 44px;
  }
  &:hover {
    background-color: ${({ theme, status }) => !status && theme.colors.blue};
  }
`;
