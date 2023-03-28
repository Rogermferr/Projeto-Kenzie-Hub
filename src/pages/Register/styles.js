import styled from "styled-components";

export const RegisterStyle = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;

  nav {
    display: flex;
    justify-content: space-between;
    width: 80%;
    max-width: 400px;
    margin: 80px auto 0 auto;

    img {
      width: 150px;
    }

    a {
      color: var(--color-default);
      font-size: 0.75rem;
      font-weight: bold;

      border: solid 1px var(--color-grey-2);
      border-radius: 4px;

      background-color: var(--color-grey-2);

      padding: 8px 24px;

      transition: all 0.5s;

      :hover {
        filter: brightness(2);
        border: solid 1px var(--color-default);
      }
    }
  }
`;
