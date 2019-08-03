import React, { useEffect, useState, useRef } from 'react';
import { makeStyles, Fab, Typography, Divider, Button } from '@material-ui/core';
import { Refresh, Loop } from '@material-ui/icons';
import canvasSketch from 'canvas-sketch';
import SketchConfigPanel from './sketchConfigPanel';

const defaultSettings = {
  dimensions: [ 2048, 2048 ],
};

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    top: -15,
    left: -15,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function CanvasSketchWrapper({
  key,
  renderer,
  settings = defaultSettings,
  // TODO make panel config view only if false?
  showRefreshButton = false,
  payload = null,
  uiMeta = null,
}) {

  const classes = useStyles();
  const refCanvas = useRef(null);
  const [updateCount, setUpdateCount] = useState(0);
  const [nextPayload, setNextPayload] = useState(payload ? {...payload} : {});
  const [temporaryPayload, setTemporaryPayload] = useState(nextPayload);

  useEffect(() => {
    const sketch = () => renderer(nextPayload);
    canvasSketch(sketch, {
      ...settings,
      canvas: refCanvas.current
    } );
  }, [ renderer, settings, updateCount, nextPayload ]);

  const redraw = () => {
    setUpdateCount(updateCount + 1)
  };
  const generate = () => {
    setNextPayload(temporaryPayload)
    setUpdateCount(updateCount + 1)
  };
  const onFieldValueChange = (fieldKey, nextValue) => {
    setTemporaryPayload({...payload, [fieldKey]:nextValue})
  }
  const showConfigPanel = uiMeta && uiMeta.length > 0;

  return (
    <>
      <div className="canvas-sketch-wrapper">

        <div style={{ textAlign: 'center', position: 'relative' }}>

          {showConfigPanel &&
          <SketchConfigPanel
            sketchPayload={payload}
            sketchConfiPanelgMeta={uiMeta}
            onFieldValueChange={onFieldValueChange}
          />}

          {showRefreshButton &&
          <Fab size="small" onClick={ showConfigPanel ? generate : redraw } aria-label="Reload"
            className={classes.fab} color='secondary'>
            <Loop title="Redraw"/>
          </Fab>}

          <canvas ref={refCanvas} />
        </div>

      </div>
    </>
  );
}

export default CanvasSketchWrapper;
