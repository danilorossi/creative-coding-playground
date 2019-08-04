import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Chip,
  IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


function SiteHeader({ title, onMenuIconClick }) {

  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton onClick={onMenuIconClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
        { title }  <Chip color="secondary" size="small" label="alpha" />
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default SiteHeader;
