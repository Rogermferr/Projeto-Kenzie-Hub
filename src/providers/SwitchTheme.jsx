import { useEffect } from "react";
import { createContext, useState } from "react";

export const SwitchThemeContext = createContext({});

export function SwitchThemeProvider({ children }) {
  const localTheme = localStorage.getItem("@DARKMODE");

  const [darkMode, setDarkMode] = useState(localTheme ? localTheme : "FALSE");

  useEffect(() => {
    localStorage.setItem("@DARKMODE", darkMode);
  }, [darkMode]);

  return (
    <SwitchThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </SwitchThemeContext.Provider>
  );
}
