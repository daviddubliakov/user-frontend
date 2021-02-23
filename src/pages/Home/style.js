import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    '& .avatar': {
      width: '35px',
      height: '35px',
    }
  },
  spiner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default useStyles;
