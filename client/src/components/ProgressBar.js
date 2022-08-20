import * as React from 'react';
import { LinearProgress, Typography, Box } from '@mui/material';

const ProgressBar = ({value, type}) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let count = 0;
    const timer = setInterval(() => {
      count++;
      if (count >= 20) { //10*20 = 200 (every iteration +10)
        clearInterval(timer)
      }
      setProgress((prevProgress) => {
        return Math.min(prevProgress + 10, value)
      });
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const color = {
    hp: '255,255,0',
    attack: '255, 48, 155',
    defense: '43, 128, 255'
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" value={progress} sx={{
          backgroundColor: `rgb(${color[type]},0.4)`,
          "& .MuiLinearProgress-bar": {
            backgroundColor: `rgb(${color[type]})`
          }
        }}/>
      </Box>
      <Box sx={{ minWidth: 20 }}>
        <Typography variant="body2">{progress}</Typography>
      </Box>
    </Box>
  );
}

export default ProgressBar;
