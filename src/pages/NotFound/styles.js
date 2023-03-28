import styled from "styled-components";

export const NotFoundStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  height: 90vh;
  width: 90vw;
  margin: 0 auto;

  h1 {
    text-align: center;
    font-size: 5rem;
    color: var(--color-primary);
    line-height: 150%;
  }

  p {
    text-align: center;
    font-size: 2rem;
    color: var(--color-primary);
    line-height: 150%;
  }

  a {
    color: #fff;

    border: solid 1px var(--color-primary);
    border-radius: 4px;
    background-color: var(--color-primary);
    padding: 4px 8px;
  }
`;
