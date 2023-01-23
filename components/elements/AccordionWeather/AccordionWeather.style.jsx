import { makeStyles } from "@material-ui/core";

export const useStyleAccordionWeather = makeStyles((theme) => ({
  container: {
    padding: "30px",
  },
  grid: {
    margin: "10px 0px",
    // paddingRight: 20,
  },
  title: {
    fontSize: 15,
    // margin: "10px 0px",
    fontWeight: 700,
    color: "#61CE70",
    paddingLeft: "2px",
  },
  containerText: {
    padding: 30,
    [theme.breakpoints.down(500)]: {
      padding: "30px 10px",
      fontSize: 11,
    },
  },
  parrafo: {
    fontSize: 20,
    margin: "5px 0px",
  },
  summary: {
    "& .MuiAccordionSummary-root": {
      display: "flex",
      flexDirection: "unset",
      padding: "0px 0px",
    },
    "& .MuiAccordionSummary-root.Mui-expanded": {
      display: "flex",
      flexDirection: "unset",
    },
    "& .MuiIconButton-edgeEnd": {
      marginRight: 12,
      padding: "0px 0px",
    },
    boxShadow: "none",
    // background: "#152a80"
  },
  summary2: {
    "& .MuiAccordionSummary-root": {
      display: "flex",
      flexDirection: "unset",
      padding: "0px 0px",
    },
    "& .MuiAccordionSummary-root.Mui-expanded": {
      display: "flex",
      flexDirection: "unset",
    },
    "& .MuiIconButton-edgeEnd": {
      marginRight: 12,
      padding: "0px 0px",
    },
    boxShadow: "none",
    borderBottom: "1px solid #E6E6E6",
    // background: "#152a80"
  },
  text: {
    [theme.breakpoints.down(500)]: {
      fontSize: 11,
    },
  },

  titleCardR: {
    textTransform: "uppercase",
    color: "hsl(0, 0%, 15%)",
    paddingTop: "15px",
    fontSize: 20,
  },

  requirementsDetails: {
    textAlign: "center",
    width: "100%",
    maxWidth: "200px",
  },

  requirementsImg: {
    width: "48px",
  },

  requirementsContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    [theme.breakpoints.down(768)]: {
      flexDirection: "column",
    },
  },
  dialog: {
    "& .MuiDialog-paperWidthSm": {
      background: "transparent",
      boxShadow: "none",
    },
  },
}));
