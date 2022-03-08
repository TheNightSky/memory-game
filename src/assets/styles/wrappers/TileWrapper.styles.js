import styled from "styled-components";

export const TileWrapper = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => {
    if (size === 4) return `${120}px`;
    return `${80}px`;
  }};
  height: ${({ size }) => {
    if (size === 4) return `${120}px`;
    return `${80}px`;
  }};
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
  transition: background-color 200ms;
  @media (max-width: 800px) {
    font-size: 40px;
  }
  &:hover {
    background-color: ${({ theme, status }) => !status && theme.colors.blue};
  }

  svg {
    transform: ${({ size }) => {
      if (size === 4) return `scale(${1.1})`;
      if (size === 6) return `scale(${1.0})`;
    }};
  }
`;
