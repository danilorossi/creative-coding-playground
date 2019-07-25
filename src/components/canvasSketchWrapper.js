import React, { useEffect, useState, useRef } from 'react';
import { makeStyles, Fab } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';
import canvasSketch from 'canvas-sketch';

const defaultSettings = {
  dimensions: [ 2048, 2048 ],
};

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function CanvasSketchWrapper({ key, renderer, settings = defaultSettings, showRefreshButton = false, payload = null }) {

  const classes = useStyles();
  const refCanvas = useRef(null);
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    const sketch = () => renderer(payload);
    canvasSketch(sketch, {
      ...settings,
      canvas: refCanvas.current
    } );
  }, [ renderer, settings, updateCount ]);

  const redraw = () => {
    setUpdateCount(updateCount + 1)
  };

  return (
    <div className="canvas-sketch-wrapper">
      <div style={{ textAlign: 'center', position: 'relative' }}>
        {showRefreshButton &&
          <Fab onClick={ redraw } aria-label="Reload"
            className={classes.fab} color='primary'>
            <Refresh title="Redraw"/>
          </Fab>
        }
        <canvas ref={refCanvas} />
      </div>

    </div>
  );
}

export default CanvasSketchWrapper;
