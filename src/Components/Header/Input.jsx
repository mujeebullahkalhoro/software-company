import React from 'react'
import TextField from '@mui/material/TextField';

function Input({placeholder}) {
  return (
    <>
      <TextField id="outlined-basic" label={placeholder} variant="outlined" />
    </>
  )
}

export default Input
