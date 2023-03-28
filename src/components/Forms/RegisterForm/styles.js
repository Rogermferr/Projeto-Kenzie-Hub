import styled from "styled-components";

export const FormRegisterStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 70%;
  max-width: 350px;

  margin: 0 auto 80px auto;
  padding: 32px;
  border-radius: 4px;

  background-color: var(--color-grey-3);
  color: var(--color-grey-0);

  h2 {
    color: var(--color-default);
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0 auto;
  }

  p {
    font-size: 0.75rem;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      font-size: 1rem;
      color: var(--color-default);
    }

    input {
      font-size: 1rem;
      color: var(--color-default);
      background-color: var(--color-grey-1);
      padding: 10px;

      border: none;
      border-radius: 4px;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;

      background-color: var(--color-grey-1);

      border: none;
      border-radius: 4px;

      input {
        font-size: 1rem;
        color: var(--color-default);
        background-color: transparent;
        border: none;
        width: 90%;
      }

      button {
        padding: 0 10px 0 0;
        border: none;
        background-color: transparent;
        width: 10%;
        color: var(--color-default);
      }
    }

    span {
      font-size: 0.75rem;
      color: #e83f5b;
    }

    select {
      background-color: var(--color-grey-1);
      border: solid 1px var(--color-grey-1);
      border-radius: 4px;

      padding: 10px;
      color: var(--color-grey-0);
      font-size: 1rem;
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
