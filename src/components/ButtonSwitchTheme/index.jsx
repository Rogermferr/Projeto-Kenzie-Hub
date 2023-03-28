import { useContext } from "react";
import { SwitchThemeContext } from "../../providers/SwitchTheme";
import { FaSun, FaMoon } from "react-icons/fa";
import { ButtonSwitchThemeStyle } from "./styles";

export function ButtonSwitchTheme() {
  const { darkMode, setDarkMode } = useContext(SwitchThemeContext);

  return (
    <ButtonSwitchThemeStyle
      onClick={() =>
        setDarkMode(() => (darkMode === "TRUE" ? "FALSE" : "TRUE"))
      }>
      {darkMode === "TRUE" ? (
        <FaSun color="#fff" size={35} />
      ) : (
        <FaMoon size={30} />
      )}
    </ButtonSwitchThemeStyle>
  );
}
