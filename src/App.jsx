import { AppRoutes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { SwitchThemeContext } from "./providers/SwitchTheme";
import { DarkTheme, LightTheme } from "./styles/themes";
import { ButtonSwitchTheme } from "./components/ButtonSwitchTheme";

function App() {
  const { darkMode } = useContext(SwitchThemeContext);

  return (
    <div>
      {darkMode === "TRUE" ? <DarkTheme /> : <LightTheme />}
      <ButtonSwitchTheme />
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
