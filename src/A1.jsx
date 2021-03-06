import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

function validate(value) {
  const v = Number.parseInt(value);
  return !isNaN(v) && v >= 0 && v <= 26;
}

export function A1Config({ method, configChange, classes }) {
  const { shift, valid } = method.configState;

  return <FormControl error={!valid} className={classes.formControl}>
    <TextField
      id="a1"
      type="number"
      label="Shift"
      onChange={
        event => {
          const { value } = event.target;
          configChange({
            method: method.name,
            state: {
              shift: value,
              valid: validate(value)
            },
          });
        }
      }
      error={!valid}
      value={shift}
      helperText={!valid ? "Shift muss zwischen 0 und 26 liegen" : ""}
      variant="outlined"
    />
  </FormControl >
}

export function A1CanBeEncrypted(c) {
  return c.match(/[a-z]/i);
}

export function A1Encrypt(c, config) {
  // alphabet letters amount
  const { shift } = config;
  const n = 26;
  const code = c.charCodeAt();
  const twist = code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97 : 0;
  return 1 + (code - twist + shift) % n;
}
