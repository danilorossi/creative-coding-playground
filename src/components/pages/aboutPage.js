import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Typography,
  Link
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  section: {
    paddingTop: theme.spacing(2), // = 8 * 2
  },
  link: {
    marginRight: theme.spacing(1),
  },
}));

const getLink = (url, clsName, text) => <Link target="_blank" rel="noopener" href={url} className={clsName}>{text}</Link>

function AboutPage(key) {
  const classes = useStyles();
  return (
    <div  key={key} className={classes.root}>
      <Typography variant="h5" gutterBottom>
        <b>About</b>
      </Typography>
      <Typography className={classes.section}  variant="body1" gutterBottom>
        "Creative Coding Playground" is a page I am developing in my free time as a learning tool for the {getLink('https://frontendmasters.com/courses/canvas-webgl/', classes.link, 'Creative Coding with Canvas & WebGL')}
        course by {getLink('https://github.com/mattdesl', classes.link, 'Matt DesLauriers')} on Frontend Masters
      </Typography>

      <br/>

      <Typography variant="h6" gutterBottom>
        <b>Spaghetti code warning!</b>
      </Typography>
      <Typography className={classes.section}  variant="body1" gutterBottom>
        This is a <b>work-in-progress proof of concept</b> and it's not meant (for now) to be a reference on any topic in any way - including React, the library I used to create this page.
        If you are still curious, you can check the code on {getLink('https://github.com/danilorossi/creative-coding-playground', classes.link, 'GitHub')}
      </Typography>

      <br/>

      <Typography variant="subtitle1" gutterBottom>
        Feel free to say hello anytime! {getLink('http://danilorossi.me', classes.link, 'http://danilorossi.me')}
      </Typography>
    </div>
  )
}

export default AboutPage;
