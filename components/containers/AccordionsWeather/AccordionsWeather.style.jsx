import { makeStyles } from "@material-ui/core";

export const useStyleAccordionsWeather = makeStyles((theme) => ({
  container: {
    maxWidth: 1260,
    margin: "auto",
    padding: "0px 62px",
    width: "100%",
    [theme.breakpoints.down(500)]: {
      padding: "0px 10px",
    },
    paddingBottom: "10px",
  },

  title: {
    height: "27px",
    fontSize: 25,
    color: "#7ec117",
    padding: "20px 60px",
    margin: "15px 0px",
    fontFamily: "BMWTypeNext",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "27px",
    [theme.breakpoints.down(500)]: {
      fontSize: 20,
    },
  },
}));
