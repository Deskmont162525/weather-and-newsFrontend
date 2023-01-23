import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/globals.scss";
import authReducer from "../reducers/authReducer";
import uiReducer from "../reducers/uiReducer";

import { authState } from "../states/authState";
import { uiState } from "../states/uiState";
import { uiContext } from "../context/uiContext";
import { authContext } from "../context/authContext";

const SiteApp = (props) => {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#1C69D4",
        light: "#5A407E",
      },
      secondary: {
        main: "#F2F2F2",
        dark: "#1C0280",
      },
      info: {
        main: "#000000",
        dark: "#1C0280",
      },
      text: {
        primary: "#262626",
        secondary: "#ffffff",
      },
      error: {
        main: red.A400,
      },
      background: {
        default: "#ffffff",
      },
    },
    typography: {
      fontFamily: "Exo, sans-serif !important",
    },
  });

  const [auth, dispatchAuth] = React.useReducer(authReducer, authState);
  const [ui, dispatchUi] = React.useReducer(uiReducer, uiState);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <uiContext.Provider value={{ ui, dispatchUi }}>
          <authContext.Provider value={{ auth, dispatchAuth }}>
            <CssBaseline />
            <Component {...pageProps} />
          </authContext.Provider>
        </uiContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default SiteApp;
