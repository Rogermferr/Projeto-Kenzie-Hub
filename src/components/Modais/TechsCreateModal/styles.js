import styled from "styled-components";

export const TechsCreateModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: #0008;

  position: fixed;
  top: 0;
  color: var(--color-default);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-2);

    border-radius: 4px 4px 0 0;

    width: 350px;
    padding: 8px 16px;

    h2 {
      font-weight: bold;
    }

    button {
      border: none;
      background-color: transparent;
      color: var(--color-default);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    border-radius: 0 0 4px 4px;
    width: 350px;
    padding: 16px;

    background-color: var(--color-grey-4);

    div {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 0;
      background-color: transparent;

      input,
      select {
        background-color: var(--color-grey-1);
        padding: 10px;

        border: none;
        border-radius: 4px;
        font-size: 1rem;
        color: var(--color-default);
      }

      span {
        font-size: 0.75rem;
        color: #e83f5b;
      }
    }
  }

  button {
    border: solid 1px var(--color-primary);
    border-radius: 4px;

    background-color: var(--color-primary);
    padding: 10px;

    color: #fff;
    font-size: 1rem;
    transition: all 0.5s;

    :hover {
      filter: brightness(0.7);
    }
  }
`;
