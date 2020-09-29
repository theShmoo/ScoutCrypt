import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

export function ANConfig({ method, configChange, classes }) {
  const { shift } = method.configState;
  return <>
    <InputLabel htmlFor="an">Shift</InputLabel>
    <TextField
      id="an"
      type="number"
      fullWidth
      className={classes.controlElement}
      onChange={configChange}
      defaultValue={shift}
    />
  </>
}
