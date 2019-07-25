import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText, ListSubheader
} from '@material-ui/core';

const drawerWidth = 200;

function SideMenu({ headSections, examples, experiments, selected, onSelect }) {

  const classes = useStyles();

  const getMenuItem = (title, key, selected) => (
    <ListItem selected={ title === selected }
      onClick={ () => onSelect(title) }  button key={key}>
      <ListItemText primary={title} />
    </ListItem>
  );

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
        open={true}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>
        {headSections.map(({ title }, index) => getMenuItem(title, index, selected))}
      </List>

      <Divider />
      <ListSubheader component="div">
        Course examples
      </ListSubheader>
      <Divider />

      <List>
        {examples.map(({ title, filename }, index) => getMenuItem(title, index, selected))}
      </List>

      <Divider />
      <ListSubheader component="div">
        Experiments
      </ListSubheader>
      <Divider />

      <List>
        {experiments.map(({ title, filename }, index) => getMenuItem(title, index, selected))}
      </List>

    </Drawer>
  );
}


const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));


export default SideMenu;
