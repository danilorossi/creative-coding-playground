import CanvasSketchWrapper from './components/sketchWrapper/canvasSketchWrapper';

import { NUMERIC_RANGE } from './globals/payloadFieldTypes';

import AboutPage from './components/pages/aboutPage';

import { simpleGridSketchMeta } from './renderers/examples/simpleGrid';
import { randomGridSketchMeta } from './renderers/examples/randomGrid';
import { randomColorSizeGridSketchMeta } from './renderers/examples/randomColorSizeGrid';
import { randomKonamiGridSketchMeta } from './renderers/examples/randomKonamiGrid';
import { randomGridPaintingSketchMeta } from './renderers/examples/randomGridPainting';

import { sentenceGridSketchMeta } from './renderers/experiments/sentenceGrid';
import { generativeWallDrawingSketchMeta } from './renderers/experiments/generativeWallDrawing';

export const headSections = [{
  title: 'About',
  component: AboutPage
}];

export const examples = [{
  ...simpleGridSketchMeta,
  component: CanvasSketchWrapper,
}, {
  ...randomGridSketchMeta,
  component: CanvasSketchWrapper,
}, {
  ...randomColorSizeGridSketchMeta,
  component: CanvasSketchWrapper,
}, {
  ...randomKonamiGridSketchMeta,
  component: CanvasSketchWrapper,
}, {
  ...randomGridPaintingSketchMeta,
  component: CanvasSketchWrapper,
}];

export const experiments = [{
  ...sentenceGridSketchMeta,
  component: CanvasSketchWrapper,
}, {
  ...generativeWallDrawingSketchMeta,
  component: CanvasSketchWrapper,
}];
