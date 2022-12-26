import { createTheme } from "@mui/material/styles";
import { Mulish } from "@next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const dark = "#383b3c";
export const light = "#98cde6";
export const textColor = "#2a3d56";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007436",
    },
    secondary: {
      main: "#8c8c8c",
    }
  },
  typography:mulish.style,
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#EFF8FD",
          fontFamily: mulish.style.fontFamily,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: `${mulish.style.fontFamily} !important`,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          borderRadius: 6,
          fontFamily: mulish.style.fontFamily,
        },
      },
    },
  },
});

export default theme;
