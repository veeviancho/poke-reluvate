import { useEffect, useState } from 'react';
import { Stack, Typography, Box } from '@mui/material'

import StartContent from '../components/StartContent';
import fetchData from '../utils/fetchData';

const CompletedContent = ({ success, setComponent, handleClick, number }) => {

  const [count, setCount] = useState(3);

  const timer = setInterval(() => {
    if (count > 1) setCount(count - 1)
    else {
      setCount(0);
      clearInterval(timer)
    }
    return () => {
      clearInterval(timer)
    };
  }, 1000)

  useEffect(() => {
    const getCapture = async () => {
      const data = await fetchData('/pokemon');
      if (data) {
        const pokemon = data.filter(item => item.userId === null)
        const len = pokemon.length;
        const randomNo = Math.floor(Math.random() * len);
        setTimeout(() => {
          setComponent(<StartContent capture={pokemon[randomNo]} handleClick={handleClick}/>)
        }, 3000)
      }
    }
    getCapture();
  }, [])

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
      <Typography>Page refreshing in {count}</Typography>

      {/* <Button
        variant="outlined" 
        sx={{ px: 10, py: 2, mt: 5, color: 'white' }}
        onClick={() => setComponent(<StartContent handleClick={handleClick}/>)}
      >
        { success ? "Capture again" : "Retry" }
      </Button> */}
    </Stack>
  )
}

export default CompletedContent