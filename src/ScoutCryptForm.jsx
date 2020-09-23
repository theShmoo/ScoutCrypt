import React from 'react';

import { Methods } from './ScoutMethods.jsx'
import { Formats } from './ScoutFormats.jsx'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
  const classes = useStyles();

  const methodItems = Methods.map(m => <MenuItem value={m.name} key={m.name}>{m.name}</MenuItem>);

  return <>
    <InputLabel htmlFor="method">Verschlüsselungsmethode</InputLabel>
    <Select
      value={method.name}
      onChange={onChange}
      className={classes.controlElement}
      fullWidth
      inputProps={{
        name: 'method',
        id: 'method',
      }}
    >
      {methodItems}
    </Select>
  </>
};

function ScoutFormatSelect({ format, onChange }) {
  const classes = useStyles();

  const formatItems = Formats.map(m => <MenuItem value={m.name} key={m.name}>{m.name}</MenuItem>);

  return <>
    <InputLabel htmlFor="format">Ausgabeformat</InputLabel>
    <Select
      value={format.name}
      onChange={onChange}
      className={classes.controlElement}
      fullWidth
      inputProps={{
        name: 'format',
        id: 'format',
      }}
    >
      {formatItems}
    </Select>
  </>
};

export default function ScoutCryptForm({ text, textChange, method, methodChange, format, formatChange }) {

  const classes = useStyles();

  return <Paper square elevation={4} className={classes.root}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <form className={classes.form} autoComplete="off">
          <ScoutTextField text={text} onChange={textChange} />
          <ScoutMethodSelect method={method} onChange={methodChange} />
          <ScoutFormatSelect format={format} onChange={formatChange} />
        </form>
      </Grid>
    </Grid>
  </Paper>
}
