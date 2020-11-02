import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  header: {
    color: theme.palette.primary.main,
    height: '5em',
    padding: '0 0 1em 1em',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    objectFit: 'contain',
    height: '4em',
  },
}));
