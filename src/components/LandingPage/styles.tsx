import { createStyles, Theme } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.common.white,
    },
    main: {
      marginTop: '20px',
    },
    descriptionText: {
      width: '85%',
    },
    getStarted: {
      marginTop: '25px',
      padding: '20px',
    },
    formControl: {
      minWidth: '250px',
      width: '100%',
      paddingBottom: '10px',
    },
    inputGrid: {
      margin: '0',
      padding: '10px 0',
    },
    divider: {
      margin: '10px auto',
    },
  });

export default styles;
