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

  const [value, setValue] = React.useState(0);

  function handleTabChange(event, newValue) {
    setValue(newValue);
  }

  return (

    <div className={classes.root}>
      <CssBaseline />
      <SiteHeader
        title="Creative Coding playground"
      />
      <SideMenu
        selected={selectedSection}
        headSections={headSections}
        examples={examples}
        experiments={experiments}
        onSelect={(title) => {
          setValue(0);
          setSelectedSection(title)
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
                value={value}
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
                  value={value}
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
