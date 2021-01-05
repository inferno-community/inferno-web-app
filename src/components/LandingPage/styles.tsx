import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.common.white,
  },
  main: {
    marginTop: '20px',
  },
  getStarted: {
    padding: '20px',
  },
  formControl: {
    minWidth: '250px',
  },
  inputGrid: {
    margin: '0',
  },
}));
