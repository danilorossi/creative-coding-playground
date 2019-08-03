import CanvasSketchWrapper from './components/sketchWrapper/canvasSketchWrapper';

import { NUMERIC_RANGE } from './globals/payloadFieldTypes';

import AboutPage from './components/pages/aboutPage';

import { simpleGrid } from './renderers/examples/simpleGrid';
import { randomGrid } from './renderers/examples/randomGrid';
import { randomColorSizeGrid } from './renderers/examples/randomColorSizeGrid';
import { randomKonamiGrid } from './renderers/examples/randomKonamiGrid';
import { randomGridPainting } from './renderers/examples/randomGridPainting';

import { sentenceGrid } from './renderers/experiments/sentenceGrid';
import { generativeWallDrawing } from './renderers/experiments/generativeWallDrawing';

export const headSections = [{
  title: 'About',
  component: AboutPage
}]

export const examples = [{
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
  showRefresh: true,
  payload: {
    gridSize: 40
  },
  payloadSchema: [{
    field: 'gridSize',
    label: 'Grid size',
    defaultValue: 40,
    type: NUMERIC_RANGE,
    min: 4,
    max: 60,
    step: 5
  }]
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

export const experiments = [{
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
  payloadSchema: [{
    field: 'gridSize',
    label: 'Grid size',
    defaultValue: 10,
    type: NUMERIC_RANGE,
    min: 5,
    max: 100,
    step: 5
  }]
}]
