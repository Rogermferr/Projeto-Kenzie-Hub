import { Link } from "react-router-dom";
import { NotFoundStyle } from "./styles";

export function NotFoundPage() {
  document.title = "NotFound";

  return (
    <NotFoundStyle>
      <h1>Error 404</h1>
      <p>Página não encontrada :(</p>
      <Link to={"/"}>Retorne para Home</Link>
    </NotFoundStyle>
  );
}
