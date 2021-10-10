import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',   
    marginLeft: '37%',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '10px',
    },
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '10px',
    },
    [theme.breakpoints.up('xs')]: {
      marginLeft: '35px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '10px',
    },
    [theme.breakpoints.up('xs')]: {
      marginLeft: '35px',
    },
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));