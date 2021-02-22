import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',

    '& input': {
      width: '300px',
      marginBottom: '7px',
    },
  }
});

export default useStyles;
