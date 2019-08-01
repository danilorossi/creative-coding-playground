import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  CssBaseline,
} from '@material-ui/core';

import CanvasSketchWrapper from './components/canvasSketchWrapper';
import SideMenu from './components/sideMenu';
import SiteHeader from './components/siteHeader';
import SketchView from './components/sketchView';
import AboutPage from './components/pages/aboutPage';

import { simpleGrid } from './renderers/examples/simpleGrid';
import { randomGrid } from './renderers/examples/randomGrid';
import { randomColorSizeGrid } from './renderers/examples/randomColorSizeGrid';
import { randomKonamiGrid } from './renderers/examples/randomKonamiGrid';
import { randomGridPainting } from './renderers/examples/randomGridPainting';

import { sentenceGrid } from './renderers/experiments/sentenceGrid';
import { generativeWallDrawing } from './renderers/experiments/generativeWallDrawing';

const headSections = [{
  title: 'About',
  component: AboutPage
}]

const examples = [{
  title: 'Simple Grid',
  fileName: 'simpleGrid.js',
  component: CanvasSketchWrapper,
  renderer: simpleGrid,
  showRefresh: false,
}, {
  title: 'Random Grid',
  fileName: 'randomGrid.js',
  component: CanvasSketchWrapper,
  renderer: randomGrid,
  showRefresh: true
}, {
  title: 'Random Color & Size Grid',
  fileName: 'randomColorSizeGrid.js',
  component: CanvasSketchWrapper,
  renderer: randomColorSizeGrid,
  showRefresh: true
}, {
  title: 'Random Konami Grid',
  fileName: 'randomKonamiGrid.js',
  component: CanvasSketchWrapper,
  renderer: randomKonamiGrid,
  showRefresh: true
}, {
  title: 'Random Grid Painting',
  fileName: 'randomGridPainting.js',
  component: CanvasSketchWrapper,
  renderer: randomGridPainting,
  showRefresh: true
}]

const experiments = [{
  title: 'Sentence Grid',
  fileName: 'sentenceGrid.js',
  component: CanvasSketchWrapper,
  renderer: sentenceGrid,
  showRefresh: true,
  payload: {
    sentence: 'Well, have you heard the great news?'
  }
}, {
  title: 'Generative Wall Drawing',
  fileName: 'generativeWallDrawing.js',
  component: CanvasSketchWrapper,
  renderer: generativeWallDrawing,
  showRefresh: true,
  payload: {
    gridSize: 20
  },
  uiMeta: [{
    field: 'gridSize',
    label: 'Grid size',
    defaultValue: 10,
    type: 'number',
    type: 'range',
    min: 5,
    max: 100,
    step: 5
  }]
}]

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
            ({ component, renderer, settings, fileName, showRefresh }, index) => {

              return <SketchView
                component={component}
                renderer={renderer}
                settings={settings}
                fileName={fileName}
                showRefresh={showRefresh}
                value={value}
                handleTabChange={handleTabChange}
                key={index}
              />

            })
          }

          {experiments
            .filter(({ title }) => title === selectedSection)
            .map(
              ({ component, renderer, settings, fileName, showRefresh, payload, uiMeta }, index) => {
                return <SketchView
                  component={component}
                  renderer={renderer}
                  settings={settings}
                  fileName={fileName}
                  showRefresh={showRefresh}
                  payload={payload}
                  uiMeta={uiMeta}
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
