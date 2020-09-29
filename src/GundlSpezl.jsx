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

function findValue(c, gundl, spezl) {
  const value1 = Math.floor(c / 5);
  const value2 = c % 5;
  return gundl[value2] + spezl[value1];
}

export function GundlSpezlCanBeEncrypted(c) {
  return c.match(/[a-z]/i);
}

export function GundlSpezlEncrypt(c, config) {
  const { gundl, spezl } = config;
  const code = c.toUpperCase().charCodeAt();
  if (code >= 65 && code <= 72) {
    return findValue(code - 65, gundl, spezl);
  }
  else if (code === 73 || code === 74) {
    return findValue(8, gundl, spezl);
  }
  else if (code >= 75 && code <= 90) {
    return findValue(code - 66, gundl, spezl);
  }
  return c;
}
