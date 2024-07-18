import { ThemeProvider } from "@mui/material";

export default function SecondarySidenavTheme({ theme, children } :any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
