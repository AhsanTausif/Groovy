import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 335,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '25px',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));