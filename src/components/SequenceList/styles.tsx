import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  tabs: {
    minheight: 'auto',
    padding: 0,
  },
}));
