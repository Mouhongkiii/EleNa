import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchInput() {
  return (
    <FormGroup>
      <FormControlLabel disabled control={<Switch />} label="Disabled Output" onClick={props.outputCol} />
    </FormGroup>
  );
}