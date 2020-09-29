import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    marginTop: theme.spacing(3),
  }
}));


export default function ScoutCryptAnswer({
  text }) {

  const classes = useStyles();
  return <Paper square elevation={4} className={classes.root}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" component="h5">
          Verschlüsselter Text
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {text}
      </Grid>
    </Grid>
  </Paper>
}
