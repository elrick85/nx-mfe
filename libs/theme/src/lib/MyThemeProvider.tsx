import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

export const MyThemeProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}