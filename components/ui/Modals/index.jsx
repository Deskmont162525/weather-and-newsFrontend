import { Button, Dialog, IconButton, Modal, Typography } from "@material-ui/core";
import { useStylesModal } from "./Modals.styles";
import CloseIcon from "@material-ui/icons/Close";

export const ModalResponseSearch = ({ isOpen, handleClose, searchWord }) => {
  const classes = useStylesModal();

  return (
    <Modal open={isOpen} style={{marginTop: '20%', display: "flex",justifyContent: 'center',}}>
      <div className={classes.containerModal}>
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
            No se encontraron resultados para :{" "}
            <span className={classes.textNumBlue}>{searchWord}</span>
            , <br /> Intenta con otra.
          </Typography>
          <Button className={classes.btnPrimary} onClick={handleClose}>
            Regresar
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export const ModalLazziLoading = ({ isOpen, handleClose, searchWord }) => {
  const classes = useStylesModal();

  return (
    <Modal open={isOpen} >
      <div className={classes.containerLoading}>
      <div className="container5">
        <div className="h1 Container5">
          <div className="cube h1 w1 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h1 w1 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h1 w1 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h1 w2 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h1 w2 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h1 w2 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h1 w3 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h1 w3 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h1 w3 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
        </div>

        <div className="h2Container">
          <div className="cube h2 w1 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h2 w1 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h2 w1 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h2 w2 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h2 w2 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h2 w2 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h2 w3 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h2 w3 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h2 w3 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
        </div>

        <div className="h3Container">
          <div className="cube h3 w1 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h3 w1 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h3 w1 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h3 w2 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h3 w2 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h3 w2 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h3 w3 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h3 w3 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <div className="cube h3 w3 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
        </div>
      </div>
      </div>
    </Modal>
  );
};
