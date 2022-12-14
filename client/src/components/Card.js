import { Card, CardContent, IconButton, Typography, Stack } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import ProgressBar from './ProgressBar';
import updateData from '../utils/updateData';

export default function BasicCard({ item, getCollection }) {
  
  const { id, name, hp, attack, defense, type, level } = item;

  const handleDelete = () => {
    const confirm = window.confirm(`Remove ${name} from your collection?`)
    if (confirm) {
      const res = updateData(`/pokemon/${id}`, { ...item, userId: null });
      if (res) {
        getCollection();
      }
    }
  }

  return (
    <Card sx={{ 
      minWidth: 275,
      backgroundColor: 'transparent',
      color: 'white',
      border: '1px solid white',
      borderRadius: '20px',
      p: '1rem'
    }}>
      <CardContent>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography sx={{ fontSize: 14, color: 'grey' }} gutterBottom>
            Level {level ? level : "Unknown"} 
          </Typography>
          <IconButton sx={{ color: 'white' }} onClick={handleDelete}><CloseRoundedIcon /></IconButton>
        </Stack>

        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {type ? type : "Unknown"}
        </Typography>
        
        <Typography variant="body2" pt={1}>HP</Typography> 
        <ProgressBar value={hp} type="hp"/>

        <Typography variant="body2" pt={1}>Attack</Typography> 
        <ProgressBar value={attack} type="attack" />

        <Typography variant="body2" pt={1}>Defense</Typography> 
        <ProgressBar value={defense} type="defense"/>
      </CardContent>
    </Card>
  );
}
