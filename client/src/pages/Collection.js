import { useState } from 'react';
import { Grid } from '@mui/material';

import Card from '../components/Card'

const Collection = () => {
  const [collection, setCollection] = useState([]);

  return (
    <div>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12, lg: 12 }}>
      <Grid item xs={1} sm={4} md={4} lg={3}>
        <Card />
      </Grid>
      <Grid item xs={1} sm={4} md={4} lg={3}>
        <Card />
      </Grid>
      <Grid item xs={1} sm={4} md={4} lg={3}>
        <Card />
      </Grid>
      <Grid item xs={1} sm={4} md={4} lg={3}>
        <Card />
      </Grid>
      <Grid item xs={1} sm={4} md={4} lg={3}>
        <Card />
      </Grid>
    </Grid>
    </div>
  )
}

export default Collection