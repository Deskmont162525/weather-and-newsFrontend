import { makeStyles } from "@material-ui/core";

export const useStyleButtonPrimary = makeStyles((theme) => ({
  btnPrimary: {
    color: "white",
    background: "transparent",
    border: "2px solid white",
    borderRadius: "0px",
    width: 200,
    height: 50,
    fontWeight: 300,
    fontSize: 20,
    textTransform: "initial",
    "&:hover": {
      background: "#1C67D4",
      border: "1px solid #1C67D4",
      color: "white",
    },
    [theme.breakpoints.down(768)]: {
      width: "100%",
    },
  },
}));
