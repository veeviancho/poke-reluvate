import * as React from 'react';
import { Typography, Stack, Button, Box } from '@mui/material';

const StartContent = ({handleClick}) => {
  return (
    <Stack direction="column" justifyContent="space-between" height="100%">
      <Typography variant="h6">
        Catch A Pokemon
      </Typography>
      <Box>
        <Typography variant="body2" sx={{ textTransform: 'uppercase', mb: '20px' }}>
          Available for capture
        </Typography>
        <Typography variant="h4">
          Bulbasaur
        </Typography>
      </Box>
      <Button 
        variant="outlined" 
        sx={{ px: 10, py: 2, mt: 5, color: 'white' }}
        onClick={handleClick}
      >
        Start
      </Button>
    </Stack>
  );
}

export default StartContent;
