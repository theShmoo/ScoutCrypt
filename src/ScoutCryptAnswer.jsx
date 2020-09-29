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
  },
  answer: {
    fontFamily: "Monospace",
    whiteSpace: "pre-line",
    lineHeight: 1.2
  }
}));

function encrypt(text, method) {
  return text.split('').map((c) => {
    if (method.canBeEncrypted(c))
      return method.encrypt(c, method.configState)
    else if (c === ' ')
      return '␣';
    else
      return c;
  }).map(c => c + " ").join("");
}

export default function ScoutCryptAnswer({ text, method }) {

  const encryptedText = encrypt(text, method)
  const classes = useStyles();
  return <Paper square elevation={4} className={classes.root}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" component="h5">
          Verschlüsselter Text
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="body1"
          className={classes.answer}
          style={method.configState.style}>
          {encryptedText}
        </Typography>
      </Grid>
    </Grid>
  </Paper>
}
