import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    '& .avatar': {
      width: '35px',
      height: '35px',
    }
  },
});

export default useStyles;
