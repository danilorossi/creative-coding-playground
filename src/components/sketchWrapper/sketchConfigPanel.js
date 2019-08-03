import React from 'react';
import {
  makeStyles,
  Typography,
  Slider,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Tune } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 40,
    marginTop: 0,
  },
  tuneIcon: {
    marginRight: theme.spacing(1),
  },
  uiControlsContainer: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


const DynamicSlider = ({ onFieldValueChange, uiController, payload }) => {
    const {
      label,
      field,
      defaultValue,
      min,
      max,
      step
    } = uiController;
    const onSliderChange = (evt, value) => {
      onFieldValueChange(field, value)
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

const createConfigUIElements = (sketchConfiPanelgMeta, sketchPayload, onFieldValueChange) => {
  return (sketchConfiPanelgMeta && sketchConfiPanelgMeta.length > 0) ?
    sketchConfiPanelgMeta.map((uiController, idx) => {
      switch(uiController.type) {
        case 'range':
          const { label } = uiController
          return (<div key={idx} style={{ width: '100%'}}>

            <DynamicSlider
              onFieldValueChange={onFieldValueChange}
              uiController={uiController}
              payload={sketchPayload}
            />
          </div>);
      }
    }) : [];
}

function SketchConfigPanel({
  sketchPayload,
  sketchConfiPanelgMeta,
  onFieldValueChange
}) {

  const classes = useStyles();
  const uiControls = createConfigUIElements(sketchConfiPanelgMeta, sketchPayload, onFieldValueChange);

  return (
    <ExpansionPanel className={classes.root}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
      <Tune fontSize="small" className={classes.tuneIcon}/>
        <Typography className={classes.heading}>Parameters</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className={classes.uiControlsContainer}>
          { uiControls }
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default SketchConfigPanel;
