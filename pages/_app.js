import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/noSesion.css";
import authReducer from "../reducers/authReducer";
import uiReducer from "../reducers/uiReducer";
import climaReducer from "../reducers/climaReducer";
import historyReducer from "../reducers/historyReducer";

import { authState } from "../states/authState";
import { uiState } from "../states/uiState";
import { climaState } from "../states/climaState";
import { historyState } from "../states/hisoryState";

import { uiContext } from "../context/uiContext";
import { authContext } from "../context/authContext";
import { climaContext } from "../context/climaContext";
import { historyContext } from "../context/historyContext";

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
  const [clima, dispatchClima] = React.useReducer(climaReducer, climaState);
  const [history, dispatchHistory] = React.useReducer(
    historyReducer,
    historyState
  );

  return (
    <div>
      <ThemeProvider theme={theme}>
        <historyContext.Provider value={{ history, dispatchHistory }}>
          <climaContext.Provider value={{ clima, dispatchClima }}>
            <uiContext.Provider value={{ ui, dispatchUi }}>
              <authContext.Provider value={{ auth, dispatchAuth }}>
                <CssBaseline />
                <Component {...pageProps} />
              </authContext.Provider>
            </uiContext.Provider>
          </climaContext.Provider>
        </historyContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default SiteApp;
