import React from 'react';
import {
  makeStyles,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Tune } from '@material-ui/icons';
import { NUMERIC_RANGE } from '../../globals/payloadFieldTypes';
import RangeSlider from './sketchConfigElements/rangeSlider';

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

const createConfigUIElements = (sketchConfiPanelgMeta, sketchPayload, onFieldValueChange) => {
  return (sketchConfiPanelgMeta && sketchConfiPanelgMeta.length > 0) ?
    sketchConfiPanelgMeta.map((uiController, idx) => {
      let uiElement = null;
      switch(uiController.type) {
        case NUMERIC_RANGE:
          uiElement = (<div key={idx} style={{ width: '100%'}}>
            <RangeSlider
              onFieldValueChange={onFieldValueChange}
              uiControlMeta={uiController}
              originalPayload={sketchPayload}
            />
          </div>);
          break;
        default:
          uiElement = null;
          break;
      }
      return uiElement;
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
