import styled from "styled-components";

export const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-default);
  margin: 80px auto;

  nav {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-grey-4);

    width: 90vw;
    padding: 32px 0;

    position: fixed;
    top: 0;

    button {
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

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    width: 90vw;
    padding: 64px 0;

    h1 {
      font-size: 1.25rem;
      font-weight: bold;
      color: var(--color-default);
    }

    p {
      font-size: 0.75rem;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 32px;

    width: 90vw;

    section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        font-size: 1rem;
        font-weight: bold;
        color: var(--color-default);
      }

      button {
        border: solid 1px var(--color-grey-2);
        border-radius: 4px;

        background-color: var(--color-grey-2);
        color: var(--color-default);

        padding: 8px 16px;

        transition: all 0.5s;

        :hover {
          filter: brightness(2);
          border: solid 1px var(--color-default);
        }
      }
    }
  }

  @media (min-width: 900px) {
    nav {
      width: 60vw;
    }

    header {
      width: 60vw;
    }

    main {
      width: 60vw;
    }
  }
`;

export const ProfileLoadingStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70vw;
  height: 90vh;
  margin: auto;

  h1 {
    color: var(--color-primary);
    font-size: 2rem;
    font-weight: bold;
  }

  @media (min-width: 900px) {
    h1 {
      font-size: 5rem;
    }
  }
`;
