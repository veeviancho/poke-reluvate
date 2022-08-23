import { Typography, Stack, Button, Box } from '@mui/material';

const StartContent = ({ handleClick }) => {
  const capture = JSON.parse(localStorage.getItem('capture'));

  return (
    <Stack direction="column" justifyContent="space-between" height="100%">
      <Typography variant="h6">
        Catch A Pokemon
      </Typography>
        { !capture ?
          <Typography variant="body2" sx={{ textTransform: 'uppercase', mb: '20px' }}>
            No item available for capture
          </Typography>
          :
          <Box>
            <Typography variant="body2" sx={{ textTransform: 'uppercase', mb: '20px' }}>
              Available for capture
            </Typography>
            <Typography variant="h4">
              {capture.name}
            </Typography>
          </Box>}
      
      { capture ?
          <Button 
            variant="outlined" 
            sx={{ px: 10, py: 2, mt: 5, color: 'white' }}
            onClick={handleClick}
          >
            Start
          </Button>
          :
          <Box></Box>
      }
    </Stack>
  );
}

export default StartContent;
