import { makeStyles } from '@material-ui/core'

export const useStylesTableWeather = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    margin: '30px 0px',
  },
  btn: {
    color: '#1C69D4',
    fontWeight: 700,
    textTransform: 'initial',
  },
  header: {
    color: '#7ec117',
    background: '#F2F2F2',
    fontWeight: 700,
    padding: '10px 16px',
  },
  cell: {
    padding: '14px 15px',
  },
  cell2: {
    padding: '27.05px',
  },
  containerBtn: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  btnReload: {
    background: '#1C69D4',
    color: 'white',
    textTransform: 'initial',
    borderRadius: 0,
    fontWeight: 700,
    fontSize: 16,
    height: '44px',
    '&:hover': {
      color: '#1C69D4',
      border: '2px solid #1C69D4',
      background: 'transparent',
    },
  },
  dialog: {
    '& .MuiDialog-paperWidthSm': {
      background: 'transparent',
      boxShadow: 'none',
    },
  },
  paymentDialog: {
    '& .MuiDialog-paperWidthSm': {
      background: 'transparent',
      boxShadow: 'none',
      minWidth: '50%',
    },
  },
  containerSearch: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  divDownload2: {
    display: 'flex',
    justifyContent: 'flex-start',
    cursor: 'pointer',
    paddingRight: '20px',
    '&:hover': {
      textDecoration: 'underline',
      background: 'transparent',
      color: '#1C69D4',
    },
  },
  divDownload3: {
    display: 'flex',
    justifyContent: 'flex-start',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
      background: 'transparent',
      color: '#1C69D4',
    },
  },
  typographyDownload: {
    width: '70px',
    height: '20px',
    fontWeight: '700',
    fontSize: '15px',
    lineHeight: '20px',
    color: '#1C69D4',    
  },
}))
