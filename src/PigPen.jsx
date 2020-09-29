import React from 'react';
import ScoutSelect from './ScoutSelect.jsx'

function PigPenSelect({ pigpen, onChange }) {
  return <ScoutSelect
    title="choose"
    id="choose"
    options={[{ name: "1" }, { name: "2" }, { name: "3" }]}
    option={pigpen}
    onChange={onChange} />
};

export function PigPenConfig({ method, configChange }) {
  return <PigPenSelect
    onChange={
      event => { configChange({ method: method.name, state: { name: event.target.value } }); }
    }
    pigpen={method.configState} />
}
