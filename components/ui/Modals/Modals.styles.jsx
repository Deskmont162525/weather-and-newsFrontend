import { makeStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

export const useStylesModal = makeStyles((theme) => ({

    container: {
        width:"350px",
        borderRadius: '0px !important',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
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
}));