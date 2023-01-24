import React from "react";
import Router from "next/router";
import { parseCookies } from "nookies";
import NoSession from "../components/ui/NoSession";

export function requireAuthentication(Component, codeComponent) {
  return class AuthenticatedComponent extends React.Component {
    state = {
      isAuthenticated: false,
    };

    componentDidMount() {
      const { userWeatherNews } = parseCookies();
      if (userWeatherNews) {
        this.setState({ isAuthenticated: true });
      } else {
        this.redirectLogin();
      }
    }

    redirectLogin = () => {
      Router.push("/");
    };

    render() {
      return (
        <>
          {this.state.isAuthenticated === true ? (
            <Component {...this.props} />
          ) : (
            <NoSession />
          )}
        </>
      );
    }
  };
}
