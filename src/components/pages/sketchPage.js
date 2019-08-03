import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Highlight from 'react-highlight.js';

import { Code, Visibility } from '@material-ui/icons';

import {
  Paper,
  Tabs,
  Tab,
  Typography,
  Link
} from '@material-ui/core';

function SketchPage({ sketchMeta, value, handleTabChange, key }) {
  const {
    component, renderer, settings, fileName, showRefresh, payload, payloadSchema,
  } = sketchMeta;

  const classes = useStyles();
  return (
    <div key={Date.now()}>

      <Paper className={classes.root}>
       <Tabs
         value={value}
         onChange={handleTabChange}
         indicatorColor="primary"
         textColor="primary"
         centered
       >
          <Tab icon={<Visibility />} aria-label="View"  label="Sketch"/>
          <Tab icon={<Code />} aria-label="Code"  label="Code"/>

       </Tabs>
     </Paper>


     {value === 0 &&
       <div style={{ padding: 25, marginTop: 10, background: 'white' }}>
        {React.createElement(component, {
             key,
             renderer,
             settings,
             showRefreshButton: showRefresh,
             payload,
             payloadSchema,
         })}
      </div>
     }
     {value === 1 &&
       <div style={{ padding: 25, marginTop: 10, background: 'white' }}>
        <Highlight language={'javascript'}>
          {renderer.toString()}
        </Highlight>
        {false && <Typography>
           <Link target="_blank" rel="noopener" href={`//TODO/${fileName}`} className={classes.link}>
             View this file on GitHub
           </Link>
       </Typography>}
       </div>
     }

    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  link: {
    margin: theme.spacing(1),
  },
}));

export default SketchPage;
