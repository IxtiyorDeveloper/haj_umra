import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppFrame from "../components/AppFrame";
import { css, Global, ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "../styles/theme";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/i18n";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <AppFrame>
        <ThemeProvider theme={theme}>
          <Global
            styles={css`
              @import url("https://fonts.googleapis.com/css2?family=Grape+Nuts&family=Mulish:wght@200&family=Smooch&display=swap");
            `}
          />
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AppFrame>
    </I18nextProvider>
  );
}
