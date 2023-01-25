import { makeStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

export const useStylesModal = makeStyles((theme) => ({

    container: {
        borderRadius: '0px !important',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
      },

      containerModal: {
        width: "50%",
        height: "65%",
        backgroundColor: "azure",
      },

      containerClose: {
        display: 'flex',
        marginRight: 0,
        position: 'relative',
        justifyContent: 'flex-end',
      },

      containerMROk: {
        padding: '0px 20px 0px',
        width: '100%',
        height: 'auto',
        borderRadius: '0px !important',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },

      btnPrimary: {
        margin: '40px 0px',
        color: 'white',
        background: '#6EC1E4',
        borderRadius: '0px',
        width: '100%',
        height: 40,
        fontWeight: 400,
        fontSize: 20,
        textTransform: 'initial',
        '&:hover': {
          background: '#6EC1E4',
          color: 'white',
        },
        [theme.breakpoints.down(768)]: {
          width: '100%',
        },
      },

      textTooltip: {
        fontSize: 18,
        color: '#000000',
      },

      // loadin inicio
      containerLoading: {
        marginTop: "20%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      // loading fin

       //modal nuevo

  modalNewStyle: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.7)",
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
  },

  modalNewStyle2: {
    position: "fixed",
    top: "10%",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.7)",
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
  },
  //fin modal nuevo
}));