import React, { useEffect, useState, useRef } from 'react';
import { makeStyles, Fab, Typography, Slider, Divider, Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { Refresh, Loop, Tune } from '@material-ui/icons';
import canvasSketch from 'canvas-sketch';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

const DynamicSlider = ({ setTemporaryPayload, uiController, payload }) => {
    const {
      label,
      field,
      defaultValue,
      min,
      max,
      step
    } = uiController;
    const onSliderChange = (evt, value) => {
      setTemporaryPayload({...payload, [field]:value})
    }
    const value = payload[field] || defaultValue
    return (<>
      <Typography id="discrete-slider" gutterBottom>
        { label }
      </Typography>
      <Slider
        valueLabelDisplay="on"
        defaultValue={ payload[field] || defaultValue }
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={ step }
        onChangeCommitted={onSliderChange}
        marks
        min={ min }
        max={ max }
      />
    </>)

}

function CanvasSketchWrapper({
  key,
  renderer,
  settings = defaultSettings,
  showRefreshButton = false,
  payload = null,
  uiMeta = null,
}) {

  const dynamicUIRefs = {}

  const classes = useStyles();
  const refCanvas = useRef(null);
  const [updateCount, setUpdateCount] = useState(0);

  const [nextPayload, setNextPayload] = useState(payload ? {...payload} : {});
  const [temporaryPayload, setTemporaryPayload] = useState(nextPayload);

  let uiControls = null;

  if(uiMeta && uiMeta.length > 0) {

    uiControls = uiMeta.map((uiController, idx) => {

      switch(uiController.type) {
        case 'range':
          const { label } = uiController
          return (<div key={idx} style={{ width: '100%'}}>

            <DynamicSlider
              setTemporaryPayload={setTemporaryPayload}
              uiController={uiController}
              payload={payload}
            />
          </div>);
      }
    })
  }


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
  return (
    <>

    <div className="canvas-sketch-wrapper">

      <div style={{ textAlign: 'center', position: 'relative' }}>

        {uiControls &&
          <ExpansionPanel  style={{ marginBottom: 40, marginTop: 0 }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            > <Tune fontSize="small" style={{marginRight: 10}}/>
              <Typography className={classes.heading}>Parameters</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div style={{ width: '100%'}}>{uiControls}</div>

            </ExpansionPanelDetails>
          </ExpansionPanel>


      }
      {showRefreshButton &&
        <Fab  size="small" onClick={ uiControls ? generate : redraw } aria-label="Reload"
          className={classes.fab} color='secondary'>
          <Loop title="Redraw"/>
        </Fab>
      }
        <canvas ref={refCanvas} />
      </div>

    </div>
    </>
  );
}

export default CanvasSketchWrapper;
