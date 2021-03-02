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
  testListItemAlternateRow: {
    backgroundColor: theme.palette.common.blueGray,
  },
  sequenceList: {
    backgroundColor: theme.palette.background.paper,
    margin: '10px 0',
  },
  testSuite: {
    paddingTop: '25px',
  },
  testIcon: {
    minWidth: '30px',
  },
  testGroupCard: {
    margin: '10px 0',
  },
}));
