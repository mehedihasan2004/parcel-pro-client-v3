import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    primary: {
      text: "#212121",
      main: "#0076BE",
      light: "#AEE2FF",
    },
    secondary: {
      main: "#FEDEFF",
      light: "#FEDEFF",
    },
  },
});
export const darkTheme = createTheme({
  palette: {
    primary: {
      text: "#ffffff",
      main: "#B9F3FC",
      light: "#AEE2FF",
    },
    secondary: {
      main: "#FEDEFF",
      light: "#FEDEFF",
    },
  },
});
