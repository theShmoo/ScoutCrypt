import React from 'react';
import ScoutSelect from './ScoutSelect.jsx';

import FormControl from '@material-ui/core/FormControl';

const Options = [{ name: "1" }, { name: "2" }, { name: "3" }]

function PigPenSelect({ pigpen, classes, ...rest }) {
  return <>
    <ScoutSelect
      title="Wähle"
      id="choose"
      options={Options}
      option={pigpen}
      {...rest} />
    <FormControl className={classes.formControl}>
      <img
        src={"img/eckal" + pigpen.name + "_small.png"}
        alt={"Version " + pigpen.name}
        className={classes.controlElement}
      />
    </FormControl>
  </>
};

function validate(value) {
  const found = Options.find(o => o.name === value);
  return found !== undefined;
}

export function PigPenConfig({ method, configChange, classes }) {
  return <PigPenSelect
    onChange={
      event => {
        const { value } = event.target;
        configChange({
          method: method.name,
          state: {
            name: value,
            valid: validate(value),
            style: method.configState.style
          },
        });
      }
    }
    pigpen={method.configState}
    classes={classes}
    error={!method.configState.valid}
    errorMsg="Ungültige Methode" />
}

const Alphabets = {
  "1": {
    'a': 'A',
    'b': 'J',
    'c': 'B',
    'd': 'K',
    'e': 'C',
    'f': 'L',
    'g': 'D',
    'h': 'M',
    'i': 'E',
    'j': 'N',
    'k': 'F',
    'l': 'O',
    'm': 'G',
    'n': 'P',
    'o': 'H',
    'p': 'Q',
    'q': 'I',
    'r': 'J',
    's': 'S',
    't': 'W',
    'u': 'U',
    'v': 'Y',
    'w': 'V',
    'x': 'Z',
    'y': 'T',
    'z': 'X'
  },
  "2": {
    'a': 'A',
    'b': 'J',
    'c': 'B',
    'd': 'K',
    'e': 'C',
    'f': 'L',
    'g': 'D',
    'h': 'M',
    'i': 'E',
    'j': 'N',
    'k': 'F',
    'l': 'O',
    'm': 'G',
    'n': 'P',
    'o': 'H',
    'p': 'Q',
    'q': 'I',
    'r': 'J',
    's': 'S',
    't': 'W',
    'u': 'V',
    'v': 'Z',
    'w': 'T',
    'x': 'X',
    'y': 'U',
    'z': 'Y'
  },
  "3": {
    'a': 'A',
    'b': 'B',
    'c': 'C',
    'd': 'D',
    'e': 'E',
    'f': 'F',
    'g': 'G',
    'h': 'H',
    'i': 'I',
    'j': 'J',
    'k': 'K',
    'l': 'L',
    'm': 'M',
    'n': 'N',
    'o': 'O',
    'p': 'P',
    'q': 'Q',
    'r': 'R',
    's': 'S',
    't': 'T',
    'u': 'U',
    'v': 'V',
    'w': 'W',
    'x': 'X',
    'y': 'Y',
    'z': 'Z'
  }
}

export function PigPenCanBeEncrypted(c) {
  return c.match(/[a-z]/i);
}

export function PigPenEncrypt(c, config) {
  return Alphabets[config.name][c.toLowerCase()];
}
