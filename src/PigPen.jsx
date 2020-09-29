import React from 'react';
import ScoutSelect from './ScoutSelect.jsx'

const Options = [{ name: "1" }, { name: "2" }, { name: "3" }]

function PigPenSelect({ pigpen, ...rest }) {
  return <ScoutSelect
    title="Wähle"
    id="choose"
    options={Options}
    option={pigpen}
    {...rest} />
};

function validate(value) {
  const found = Options.find(o => o.name === value);
  return found !== undefined;
}

export function PigPenConfig({ method, configChange }) {
  return <PigPenSelect
    onChange={
      event => {
        const { value } = event.target;
        configChange({
          method: method.name,
          state: {
            name: value,
            valid: validate(value)
          },
        });
      }
    }
    pigpen={method.configState}
    error={!method.configState.valid}
    errorMsg="Ungültige Methode" />
}
