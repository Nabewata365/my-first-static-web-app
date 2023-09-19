import React from 'react';
import Button from '@mui/material/Button'
import { Typography } from '@mui/material';
import { getFromUrl } from './data';

function App() {
  const value = 'World'
  return (
    <div>
      <Typography>Hello! {value} TEST</Typography>
      <Button onClick={async () => { await getFromUrl(''); }}>Google</Button>
      <Button onClick={async () => { await getFromUrl('https://nabewata365.sharepoint.com/_api/lists'); }}>SPO</Button>
    </div>
  );
}

export default App;
