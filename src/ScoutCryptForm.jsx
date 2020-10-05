import React from 'react';

import { Methods } from './ScoutMethods.jsx'
import ScoutSelect from './ScoutSelect.jsx'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  fullWidth: {
    margin: theme.spacing(4),
    width: "100%"
  },
  formControl: {
    margin: theme.spacing(4),
    minWidth: 150,
  }
}));

function ScoutTextField({ text, onChange }) {
  const classes = useStyles();
  return <FormControl
    className={classes.fullWidth}>
    <TextField
      id="text"
      label="Der zu verschlüsselnde Text"
      onChange={onChange}
      multiline
      rows={4}
      fullWidth
      value={text}
      variant="outlined"
    />
  </FormControl >
};

function ScoutMethodSelect({ method, onChange }) {
  return <ScoutSelect
    title="Verschlüsselungsmethode"
    id="method"
    options={Methods}
    option={method}
    onChange={onChange} />
};

/* not yet used
function ScoutFormatSelect({ format, onChange }) {
  return <ScoutSelect
    title="Ausgabeformat"
    id="method"
    options={Formats}
    option={format}
    onChange={onChange} />
};
*/

export default function ScoutCryptForm({
  text, method, format,
  textChange, methodChange, configChange, formatChange }) {

  const classes = useStyles();
  return <Paper square elevation={4} className={classes.root}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" component="h5">
          Scout Crypt
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <form className={classes.form} autoComplete="off">
          <ScoutTextField text={text} onChange={textChange} />
          <ScoutMethodSelect method={method} onChange={methodChange} />
          {method.config ? method.config({ method, configChange, classes }) : ""}
          {/*<ScoutFormatSelect format={format} onChange={formatChange} />*/}
        </form>
      </Grid>
    </Grid>
  </Paper>
}
