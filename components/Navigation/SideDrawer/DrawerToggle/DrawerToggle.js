import React from 'react';
import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (
  <div className={classes.MenuBtn} onClick={props.clicked}>
    <span className={classes.MenuBtn__burger}></span>
  </div>
);
 
export default drawerToggle;