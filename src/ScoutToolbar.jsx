import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  flex: {
    flex: 1,
  },
  menuButton: {

  }
}));

export default function ScoutToolbar() {
  const [anchor, setAnchor] = useState(null);

  let handleClick = event => {
    setAnchor(event.currentTarget);
  };

  let handleClose = (page) => (event) => {
    setAnchor(null);
  };

  const classes = useStyles();

  return <AppBar position="static">
    <Toolbar>
      <IconButton
        className={classes.menuButton}
        color="inherit"
        aria-label="Menu"
        aria-owns={anchor ? 'simple-menu' : null}
        aria-haspopup="true"
        onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        <MenuItem component={Typography} to="#" onClick={handleClose("#")}>Home</MenuItem>
      </Menu>
      <Typography variant="h6" color="inherit" className={classes.flex}>
        ScoutCrypt
      </Typography>
    </Toolbar>
  </AppBar>
}
