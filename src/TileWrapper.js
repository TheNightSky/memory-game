import styled from "styled-components";

const TileWrapper = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  background-color: ${({ status }) => {
    if (status === "matched") return "grey";
    if (status === "active") return "orange";
    return "black";
  }};
  border-radius: 50%;
  border: none;
  font-size: 56px;

  font-weight: 700;
  color: white;
  cursor: pointer;
  transition: background-color 150ms;
  @media (max-width: 800px) {
    font-size: 44px;
  }
  &:hover {
    background-color: ${({ status }) => !status && "blue"};
  }
`;

export default TileWrapper;
