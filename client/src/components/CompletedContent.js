import { Stack, Typography, Box, Button } from '@mui/material'

import StartContent from '../components/StartContent'

const CompletedContent = ({ success, setComponent, handleClick, number }) => {
  return (
    <Stack direction="column" justifyContent="space-between" height="100%">
      <Typography variant="h6">
          Catch A Pokemon
      </Typography>
      <Box>
        <Typography variant="h4">
          { success ? `Congratulations! ${number} is the correct answer.` : `You have failed to capture the item. The correct number is ${number}.`}
        </Typography>
        <Typography variant="body1" mt={2}>
          { success ? "Item is successfully captured. It is now in your collections." : "Item has been released back into the wild."}
        </Typography>
      </Box>
      <Button
        variant="outlined" 
        sx={{ px: 10, py: 2, mt: 5, color: 'white' }}
        onClick={() => setComponent(<StartContent handleClick={handleClick}/>)}
      >
        { success ? "Capture again" : "Retry" }
      </Button>
    </Stack>
  )
}

export default CompletedContent