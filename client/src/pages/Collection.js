import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

import Card from '../components/Card'
import fetchData from '../utils/fetchData'

const Collection = () => {
  const [collection, setCollection] = useState([]);
  const token = parseInt(localStorage.getItem('token'));

  const getCollection = async () => {
    const pokemon = await fetchData(`/pokemon?userId=${token}`)
    console.log(pokemon)
    setCollection(pokemon)
  }

  useEffect(() => {
    getCollection();
  }, [])

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