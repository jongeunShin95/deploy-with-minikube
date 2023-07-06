import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import axios from 'axios';

const App = () => {
  useEffect(() => {
    axios.get('/count').then(res => {
      setNumber(res.data);
    });
  }, []);
  const [number, setNumber] = useState(null);

  const handleClick = (type) => {
    axios.get(type).then(res => {
      setNumber(res.data);
    });
  }

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {number}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            현재 서버의 number
          </Typography>
        </CardContent>
        <CardActions>
          <Stack spacing={2} direction={"row"}>
            <Button variant="contained" onClick={() => handleClick('/count/plus')}>plus(+1)</Button>
            <Button variant="outlined" onClick={() => handleClick('/count/minus')}>minus(-1)</Button>
            <Button variant="contained" onClick={() => handleClick('/count/reset')}>reset(0)</Button>
          </Stack>
        </CardActions>
      </Card>
      </Container>
    </React.Fragment>
  );
}

export default App;

