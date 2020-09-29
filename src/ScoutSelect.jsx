import React from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(4),
    minWidth: 150,
  },
  label: {
    margin: theme.spacing(1),
  }
}));

export default function ScoutSelect({
  id, title, options, option, onChange, error, errorMsg }) {
  const classes = useStyles();

  const optionItems = options.map(o => <MenuItem value={o.name} key={o.name}>{o.name}</MenuItem>);

  return <FormControl className={classes.formControl} error={error}>
    <Select
      value={option.name}
      onChange={onChange}
      inputProps={{
        name: id,
        id: id,
      }}
      error={error}
      variant="outlined"
    >
      {optionItems}
    </Select>
    {error ? <FormHelperText
    > {errorMsg ? errorMsg : "Error"} </FormHelperText> : title}
  </FormControl>
}
