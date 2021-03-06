import React, { useEffect, useState, useRef } from 'react';
import { makeStyles, Fab, Tooltip } from '@material-ui/core';
import { Loop } from '@material-ui/icons';
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
  renderer,
  // settings = defaultSettings,
  settings,
  // TODO make panel config view only if false?
  showRefreshButton = false,
  payload = null,
  payloadSchema = null,
}) {

  const classes = useStyles();
  const refCanvas = useRef(null);
  const [updateCount, setUpdateCount] = useState(0);
  const [nextPayload, setNextPayload] = useState(payload ? {...payload} : {});
  const [temporaryPayload, setTemporaryPayload] = useState(nextPayload);

  useEffect(() => {
    const sketch = () => renderer(nextPayload, refCanvas.current);
    const sets = {...defaultSettings, ...(settings||{})};
    canvasSketch(sketch, {
      ...sets,
      canvas: refCanvas.current
    } );
  }, [ settings, updateCount, nextPayload ]);

  const redraw = (useUpdatedPayload = false) => {
    useUpdatedPayload && setNextPayload(temporaryPayload)
    setUpdateCount(updateCount + 1)
  };
  const onFieldValueChange = (fieldKey, nextValue) => {
    setTemporaryPayload({...payload, [fieldKey]:nextValue})
  }
  const showConfigPanel = payloadSchema && payloadSchema.length > 0;

  return (
    <>
      <div className="canvas-sketch-wrapper">

        <div style={{ textAlign: 'center', position: 'relative' }}>

          {showConfigPanel &&
          <SketchConfigPanel
            sketchPayload={payload}
            sketchConfiPanelgMeta={payloadSchema}
            onFieldValueChange={onFieldValueChange}
          />}

          {showRefreshButton &&
          <Tooltip title="Redraw sketch" aria-label="add">
            <Fab size="small" onClick={() => redraw(showConfigPanel) } aria-label="Reload"
              className={classes.fab} color='secondary'>
              <Loop title="Redraw"/>
            </Fab>
          </Tooltip>}

          <canvas ref={refCanvas} />
        </div>

      </div>
    </>
  );
}

export default CanvasSketchWrapper;
