import styled from "styled-components";
export const TechCardsStyle = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: var(--color-grey-4);
  border: solid 1px var(--color-grey-4);
  border-radius: 4px;

  transition: all 0.5s;

  :hover {
    filter: brightness(2);
    cursor: pointer;
    border: solid 1px var(--color-default);
  }
`;
