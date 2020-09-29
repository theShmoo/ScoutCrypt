import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

function validate(value) {
  return value && value.length === 5;
}

function validateBoth(gundl, spezl) {
  return validate(gundl) && validate(spezl);
}

export function GundlSpezlConfig({ method, configChange, classes }) {

  const { gundl, spezl, validGundl, validSpezl, valid } = method.configState;
  return <>

    <FormControl error={!valid} className={classes.formControl}>
      <TextField
        id="gundl"
        label="Key 1"
        className={classes.controlElement}
        error={!validGundl}
        onChange={
          event => {
            const { value } = event.target;
            configChange({
              method: method.name,
              state: {
                gundl: value,
                spezl: spezl,
                validGundl: validate(value),
                validSpezl: validate(spezl),
                valid: validateBoth(value, spezl)
              }
            });
          }
        }
        helperText={!validGundl ? "Muss genau 5 Buchstaben haben" : ""}
        value={gundl}
      />
    </FormControl>
    <FormControl className={classes.formControl}>
      <TextField
        id="spezl"
        label="Key 2"
        className={classes.controlElement}
        error={!validSpezl}
        onChange={
          event => {
            const { value } = event.target;
            configChange({
              method: method.name,
              state: {
                gundl: gundl,
                spezl: value,
                validGundl: validate(gundl),
                validSpezl: validate(value),
                valid: validateBoth(gundl, value)
              }
            });
          }
        }
        helperText={!validSpezl ? "Muss genau 5 Buchstaben haben" : ""}
        value={spezl}
      />
    </FormControl>
  </>
}
