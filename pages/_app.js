import React, { useEffect } from "react";
import App, { Container } from "next/app";
import Router from "next/router";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import authReducer from "../reducers/authReducer";
import uiReducer from "../reducers/uiReducer";
import usersReducer from "../reducers/usersReducer";

import { authState } from "../states/authState";
import { uiState } from "../states/uiState";
import { uiContext } from "../context/uiContext";
import { authContext } from "../context/authContext";
import { userState } from "../states/usersState";
import { usersContext } from "../context/usersContext";
import { beneficiosContext } from "../context/beneficiosContext";

import { companiesState } from "../states/companiesState";
import { companiesContext } from "../context/companiesContext";
import companiesReducer from "../reducers/companiesReducer";
import { profileContext } from "../context/profileContext";
import { profileState } from "../states/profileState";
import profileReducer from "../reducers/profileReducer";
import { permissionsContext } from "../context/permissionContext";
import permissionsReducer from "../reducers/permissionsReducer";
import { permissionState } from "../states/permissionState";
import beneficioReducer from "../reducers/beneficiosReducer";
import { beneficiosState } from "../states/beneficios";

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
      fontFamily: "bmw-regular !important",
      // fontFamily: 'Exo, sans-serif !important',
    },
  });

  const [beneficio, dispatchBeneficio] = React.useReducer(
    beneficioReducer,
    beneficiosState
  );
  const [auth, dispatchAuth] = React.useReducer(authReducer, authState);
  const [ui, dispatchUi] = React.useReducer(uiReducer, uiState);
  const [users, dispatchUsers] = React.useReducer(usersReducer, userState);
  const [companies, dispatchCompanies] = React.useReducer(
    companiesReducer,
    companiesState
  );
  const [profiles, dispatchProfiles] = React.useReducer(
    profileReducer,
    profileState
  );
  const [permissions, dispatchPermissions] = React.useReducer(
    permissionsReducer,
    permissionState
  );

  return (
    <div>
      <ThemeProvider theme={theme}>
        <uiContext.Provider value={{ ui, dispatchUi }}>
          <authContext.Provider value={{ auth, dispatchAuth }}>
            <usersContext.Provider value={{ users, dispatchUsers }}>
              <companiesContext.Provider
                value={{ companies, dispatchCompanies }}
              >
                <profileContext.Provider value={{ profiles, dispatchProfiles }}>
                  <permissionsContext.Provider
                    value={{ permissions, dispatchPermissions }}
                  >
                    <beneficiosContext.Provider
                      value={{ beneficio, dispatchBeneficio }}
                    >
                      <CssBaseline />
                      <Component {...pageProps} />
                    </beneficiosContext.Provider>
                  </permissionsContext.Provider>
                </profileContext.Provider>
              </companiesContext.Provider>
            </usersContext.Provider>
          </authContext.Provider>
        </uiContext.Provider>
      </ThemeProvider>
    </div>
  );
};

//  SiteApp.getInitialProps = async ({ Component, router, ctx }) => {
//   let pageProps = {}

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx)
//   }

//   return { pageProps }
// }

export default SiteApp;
