import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  CssBaseline,
} from '@material-ui/core';

import SideMenu from './components/sideMenu';
import SiteHeader from './components/siteHeader';
import SketchPage from './components/pages/sketchPage';

import {
  headSections,
  examples,
  experiments,
} from './playgroundContent';

function App() {

  const classes = useStyles();

  const [ selectedSection, setSelectedSection ] = useState(headSections[0].title);

  const [ selectedIndex, setSelectedIndex ] = React.useState(0);

  const [ drawerOpen, setDrawerOpen ] = React.useState(false);

  function handleTabChange(event, newValue) {
    setSelectedIndex(newValue);
  }

  return (

    <div className={classes.root}>
      <CssBaseline />
      <SiteHeader
        title="Creative Coding playground"
        onMenuIconClick={() => setDrawerOpen(true)}
      />
      <SideMenu
        open={drawerOpen}
        selected={selectedSection}
        headSections={headSections}
        examples={examples}
        experiments={experiments}
        onOverlayClick={() => setDrawerOpen(false)}
        onSelect={(title) => {
          setSelectedIndex(0);
          setSelectedSection(title)
          setDrawerOpen(false)
        }}
      />

      <main className={classes.content}>
        <div className={classes.toolbar} />

        {headSections
          .filter(({ title }) => title === selectedSection)
          .map(
            ({ component }, index) => {
              return React.createElement(component, { key: index });
            }
          )}

        {examples
          .filter(({ title }) => title === selectedSection)
          .map(
            (sketchMeta, index) => {

              return <SketchPage
                sketchMeta={sketchMeta}
                value={selectedIndex}
                handleTabChange={handleTabChange}
                key={index}
              />

            })
          }

          {experiments
            .filter(({ title }) => title === selectedSection)
            .map(
              (sketchMeta, index) => {

                return <SketchPage
                  sketchMeta={sketchMeta}
                  value={selectedIndex}
                  handleTabChange={handleTabChange}
                  key={index}
                />

              })
            }

      </main>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

export default App;
