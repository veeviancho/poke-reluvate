import { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';

import Card from '../components/Card'
import fetchData from '../utils/fetchData'

const Collection = () => {
  const [collection, setCollection] = useState([]);
  const token = parseInt(localStorage.getItem('token'));

  const getCollection = async () => {
    const pokemon = await fetchData(`/pokemon?userId=${token}`)
    setCollection(pokemon)
  }

  useEffect(() => {
    getCollection();
  }, [])

  if (collection.length === 0) {
    return (
      <Typography sx={{ textAlign: 'center', mt: 5 }}>
        No item in collection yet.
      </Typography>
    )
  }

  return (
    <div>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12, lg: 12 }}>
      {collection.map((item) => {
        return (
          <Grid key={item.id} item xs={1} sm={4} md={4} lg={3}>
            <Card item={item} getCollection={getCollection}/>
          </Grid>
        )
      })}
    </Grid>
    </div>
  )
}

export default Collection