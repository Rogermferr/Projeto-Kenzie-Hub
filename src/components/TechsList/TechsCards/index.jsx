import { useContext } from "react";
import { TechsContext } from "../../../providers/TechsContext";
import { TechCardsStyle } from "./styles";

export function TechsCards() {
  const { techsList, showModalCards } = useContext(TechsContext);

  return (
    <>
      {techsList.map((tech) => (
        <TechCardsStyle
          key={tech.id}
          id={tech.id}
          onClick={(event) => showModalCards(event.target.id)}>
          <h3>{tech.title}</h3>
          <span>{tech.status}</span>
        </TechCardsStyle>
      ))}
    </>
  );
}
