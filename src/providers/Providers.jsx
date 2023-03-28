import { SwitchThemeProvider } from "./SwitchTheme";
import { UserProvider } from "./UserContext";

export function Providers({ children }) {
  return (
    <UserProvider>
      <SwitchThemeProvider>{children}</SwitchThemeProvider>
    </UserProvider>
  );
}
