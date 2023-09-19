import React from 'react';
import Button from '@mui/material/Button'
import { Typography } from '@mui/material';

function App() {
  const value = 'World'
  return (
    <div>
      <Typography>Hello! {value} TEST</Typography>
      <Button onClick={() => {alert('test')}}>TEST</Button>
    </div>
  );
}

export default App;
