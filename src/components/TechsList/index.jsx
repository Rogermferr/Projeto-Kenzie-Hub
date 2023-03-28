import { TechsCards } from "./TechsCards";
import { TechListStyle } from "./styles";
import { useContext } from "react";
import { TechsContext } from "../../providers/TechsContext";

export function TechsList() {
  const { techsList } = useContext(TechsContext);

  return (
    <TechListStyle>
      {techsList.length === 0 ? (
        <p>Você ainda não possui uma tecnologia</p>
      ) : (
        <TechsCards />
      )}
    </TechListStyle>
  );
}
