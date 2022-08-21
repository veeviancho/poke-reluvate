import { useState, useEffect } from 'react';
import { Typography, Stack, Button, Box, TextField } from '@mui/material';

const GuessContent = ({ handleComplete }) => {

  useEffect(() => {
    const generateRandomNo = () => {
      const randomNo = Math.floor(Math.random(0,1) * 10) + 1; //random no from 1-10
      setNumber(randomNo);
    }
    generateRandomNo();
  }, [])

  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(3);
  const [value, setValue] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = () => {
    const input = parseInt(value)
    if (isNaN(input)) {
      setText(<Typography variant="body2">Please enter a number.</Typography>);
      return;
    }
    if (count === 1) {
      if (input === number) handleComplete(true, number);
      else handleComplete(false, number);
    } else {
      if (input > number) setText(<Typography variant="body2">Your guess <b>{input}</b> is too high.</Typography>)
      else if (input < number) setText(<Typography variant="body2">Your guess <b>{input}</b> is too low.</Typography>)
      else handleComplete(true, number);
    }
    setCount(count - 1);
    setValue('');
  }

  return (
    <Stack direction="column" justifyContent="space-between" height="100%">
      <Typography variant="h6">
        Catch A Pokemon
      </Typography>
      <Box>
        <Typography variant="body2" sx={{ textTransform: 'uppercase', mb: '20px' }}>
          Guess the number from 1-10
        </Typography>
        <TextField 
          variant="outlined"
          type="number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          sx={{ border: '1px solid white', borderRadius: '2px', input: { color: 'white' } }}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Box sx={{ textTransform: 'uppercase', mt: '20px' }}>
          {text}
        </Box>
        <Typography variant="body2" sx={{ textTransform: 'uppercase', mt: '10px' }}>
          You have {count} tr{ count <= 1 ? "y" : "ies" } left.
        </Typography>
      </Box>
      <Button 
        variant="outlined" 
        sx={{ px: 10, py: 2, mt: 5, color: 'white' }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Stack>
  )
}

export default GuessContent