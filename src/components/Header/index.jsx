import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import useStyles from '../style-component';

const Header = () => {
  const classes = useStyles();

  return (
    <Menu className={classes.headerMenu} theme="dark">
      <Menu.Item>
        <Link to='/'>Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/create'>Create</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
