import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

export function A1Config({ method, configChange, classes }) {
  const { shift } = method.configState;

  return <>
    <InputLabel htmlFor="a1">Shift</InputLabel>
    <TextField
      id="a1"
      type="number"
      fullWidth
      className={classes.controlElement}
      onChange={configChange}
      defaultValue={shift}
    />
  </>
}
