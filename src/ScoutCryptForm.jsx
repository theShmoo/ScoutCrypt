import React from 'react';

import { Methods } from './ScoutMethods.jsx'
import { Formats } from './ScoutFormats.jsx'
import ScoutSelect from './ScoutSelect.jsx'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
  },
  controlElement: {
    margin: theme.spacing(4),
  }
}));

function ScoutTextField({ text, onChange }) {
  const classes = useStyles();
  return <>
    <InputLabel htmlFor="text">Der zu verschlüsselnde Text</InputLabel>
    <TextField
      id="text"
      onChange={onChange}
      className={classes.controlElement}
      multiline
      rows={4}
      fullWidth
      defaultValue={text}
      variant="outlined"
    />
  </>
};

function ScoutMethodSelect({ method, onChange }) {
  return <ScoutSelect
    title="Verschlüsselungsmethode"
    id="method"
    options={Methods}
    option={method}
    onChange={onChange} />
};

function ScoutFormatSelect({ format, onChange }) {
  return <ScoutSelect
    title="Ausgabeformat"
    id="method"
    options={Formats}
    option={format}
    onChange={onChange} />
};

export default function ScoutCryptForm({ text, textChange, method, methodChange, format, formatChange }) {

  const classes = useStyles();
  return <Paper square elevation={4} className={classes.root}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <form className={classes.form} autoComplete="off">
          <ScoutTextField text={text} onChange={textChange} />
          <ScoutMethodSelect method={method} onChange={methodChange} />
          {method.config ? method.config({ method, methodChange, classes }) : ""}
          <ScoutFormatSelect format={format} onChange={formatChange} />
        </form>
      </Grid>
    </Grid>
  </Paper>
}
