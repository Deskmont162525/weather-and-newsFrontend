import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import { changeRoute } from "../../../helpers/routes";
import { useStyleButtonPrimary } from "./ButtonPrimary.style";

const ButtonPrimary = ({ text, onChangeButtom }) => {
  const classes = useStyleButtonPrimary();

  return (
    <Button
      className={classes.btnPrimary}
      onClick={onChangeButtom}
    >
      {text}
    </Button>
  );
};

export default ButtonPrimary;
