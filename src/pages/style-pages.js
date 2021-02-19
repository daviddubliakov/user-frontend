import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  home: {
    '& .avatar': {
      width: '35px',
      height: '35px',
    }
  },
  create: {
    width: '100%',
    height: '100% !important',
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
