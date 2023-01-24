import { Button, Dialog, IconButton, Typography } from "@material-ui/core";
import { useStylesModal } from "./Modals.styles";
import CloseIcon from "@material-ui/icons/Close";

export const ModalResponseSearch = ({ isOpen, handleClose, searchWord }) => {
  const classes = useStylesModal();

  return (
    <Dialog open={isOpen}>
      <div>
        <div className={classes.container}>          
          {handleClose && (
            <div className={classes.containerClose}>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
          )}
        </div>

        <div className={classes.containerMROk}>
          <Typography className={classes.textTooltip}>
            <br />
            No se encontraron resultados para : {" "}
            <span className={classes.textNumBlue}>{searchWord}</span>
            , <br /> Intenta con otra.
          </Typography>
          <Button className={classes.btnPrimary} onClick={handleClose}>
            Regresar
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
