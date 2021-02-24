import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  table: {
    width: '100%',
    border: '1px solid #f0f0f0',

    '& td, th': {
      padding: '16px',
    },
    '& thead > tr': {
      backgroundColor: '#fafafa',
      borderBottom: '1px solid #f0f0f0',
    },
    '& td > span': {
      cursor: 'pointer',
    }
  }
});

export default useStyles;
