import React, { useContext } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useStylesTableWeather } from "./TableWeather.style";
import { historyContext } from "../../../context/historyContext";

export default function TableWeather() {
  const classes = useStylesTableWeather();
  const { history } = React.useContext(historyContext);
  const [payments, setPayments] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  React.useEffect(() => {
    if (history?.length > 0) {
      setPayments(history);
    }
  }, [history]);

  return (
    <>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" className={classes.header}>
                Nombre de la Ciudad
              </TableCell>
              <TableCell align="left" className={classes.header}>
                Información
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, key) => (
                <TableRow key={key}>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.cell}
                  >
                    {row.city}
                  </TableCell>
                  <TableCell align="left" className={classes.cell}>
                    {row.info}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
