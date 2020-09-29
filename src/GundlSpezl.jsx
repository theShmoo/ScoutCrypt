import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

export function GundlSpezlConfig({ method, configChange, classes }) {

  const { gundl, spezl } = method.configState;
  return <>
    <InputLabel htmlFor="gundl">Key 1</InputLabel>
    <TextField
      id="gundl"
      className={classes.controlElement}
      fullWidth
      onChange={
        event => {
          configChange({
            method: method.name,
            state: { gundl: event.target.value, spezl: spezl }
          });
        }
      }
      defaultValue={gundl}
    />
    <InputLabel htmlFor="spezl">Key 2</InputLabel>
    <TextField
      id="spezl"
      className={classes.controlElement}
      fullWidth
      onChange={
        event => {
          configChange({
            method: method.name,
            state: { gundl: gundl, spezl: event.target.value }
          });
        }
      }
      defaultValue={spezl}
    />
  </>
}
