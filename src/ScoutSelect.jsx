import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  controlElement: {
    margin: theme.spacing(4),
  }
}));

export default function ScoutSelect({ id, title, options, option, onChange }) {
  const classes = useStyles();

  const optionItems = options.map(o => <MenuItem value={o.name} key={o.name}>{o.name}</MenuItem>);

  return <>
    <InputLabel htmlFor={id}>{title}</InputLabel>
    <Select
      value={option.name}
      onChange={onChange}
      className={classes.controlElement}
      fullWidth
      inputProps={{
        name: id,
        id: id,
      }}
    >
      {optionItems}
    </Select>
  </>
}
