import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import TableWeather from "../TableWeather";
import { useStyleAccordionWeather } from "./AccordionWeather.style";

const AccordionWeather = ({
  dataVistos,
  expanded,
  handleChange,
  id,
  ...item
}) => {
  const classes = useStyleAccordionWeather();
  const { titulo, contenido } = item;
  return (
    <Grid item md={12} xs={12}>
      <Accordion
        className={
          expanded === false || expanded === ""
            ? classes.summary2
            : classes.summary
        }
        expanded={expanded === `panel${id}`}
        onChange={handleChange(`panel${id}`)}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel1" ? (
              <img
                src={`/${process.env.NEXT_PUBLIC_BASE_PATH}/imagesIcons/IconAccordeonplus.svg`}
                alt="AccordionIcon"
              />
            ) : (
              <img
                src={`/${process.env.NEXT_PUBLIC_BASE_PATH}/imagesIcons/IconAccordeonnoplus.svg`}
                alt="AccordionIcon"
                width="24.6px"
              />
            )
          }
        >
          <Typography className={classes.title}>{titulo}</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            padding: "8px 0px 0px",
            borderTop: "1px solid #E6E6E6",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className={classes.requirementsContent}>           
              <TableWeather dataTable={dataVistos} />
            </div>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default AccordionWeather;
