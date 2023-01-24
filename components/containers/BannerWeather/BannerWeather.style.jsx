import { makeStyles } from "@material-ui/core";

export const useStyleBannerWeather = makeStyles((theme) => ({
  container: {
    padding: "0 2.2rem",
    width: "100%",
    position: "relative",
  },

  error: {
    borderBottom: "5px solid #D55D43",
  }
  
}));
