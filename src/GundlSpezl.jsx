import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

export function GundlSpezlConfig({ method, onChange, classes }) {

  const { gundl, spezl } = method.configState;
  return <>
    <InputLabel htmlFor="gundl">Key 1</InputLabel>
    <TextField
      id="gundl"
      className={classes.controlElement}
      fullWidth
      onChange={onChange}
      defaultValue={gundl}
    />
    <InputLabel htmlFor="spezl">Key 2</InputLabel>
    <TextField
      id="spezl"
      className={classes.controlElement}
      fullWidth
      onChange={onChange}
      defaultValue={spezl}
    />
  </>
}
