import { useRoutes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";


// ALL CONTEXTS
// import { AuthProvider } from "./contexts/JWTAuthContext";
import SettingsProvider from "./contexts/SettingsContext";
// ROUTES
// import routes from "./routes";
// FAKE SERVER
import "../fake-db";
import MatxTheme from "./components/MatxTheme/MatxTheme";
import { AuthProvider } from "./contexts/JWTAuthContext";
import routes from "./routes";

export default function App() {
  const content = useRoutes(routes);

  return (
    <SettingsProvider>
      <AuthProvider>
        <MatxTheme>
          <CssBaseline />
          {content}
          </MatxTheme>      
          </AuthProvider>
    </SettingsProvider>
  );
}
