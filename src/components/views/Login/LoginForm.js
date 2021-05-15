import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function BasicTextFields() {

  return (
    <form noValidate autoComplete="off">
      <TextField style={{marginRight: '10px'}} id="filled-basic" label="Username" variant="filled" />
      <TextField id="filled-basic" label="Password" variant="filled" />
    </form>
  );
}
