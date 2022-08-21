import { Card, CardContent } from "@mui/material";
import { useState, useEffect } from "react";

import StartContent from '../components/StartContent';
import GuessContent from '../components/GuessContent';
import CompletedContent from '../components/CompletedContent';
import updateData from '../utils/updateData'
import setCapture from "../utils/setCapture";
import fetchData from "../utils/fetchData";

const Catch = () => {

  const addPokemon = async () => {
    const level = Math.floor(Math.random() * 100) + 1; //random no from 1-100
    const token = localStorage.getItem('token')
    const capture = JSON.parse(localStorage.getItem('capture'));
    const res = await fetchData(`/pokemon/${capture.id}`)
    const update = await updateData(`/pokemon/${res.id}`, {...res, userId: token, level: level})
    if (update) {
      console.log('added')
    }
  }

  const handleComplete = (success, number) => {
    if (success) {
      addPokemon();
    }
    localStorage.removeItem('capture');
    setCapture();
    setComponent(<CompletedContent success={success} setComponent={setComponent} handleClick={handleClick} number={number} />)
  }

  const handleClick = () => {
    setComponent(<GuessContent handleComplete={handleComplete} />)
  }

  const [component, setComponent] = useState(<StartContent handleClick={handleClick} />)

  return (
    <Card sx={{ 
      minWidth: 275,
      backgroundColor: 'transparent',
      color: 'white',
      border: '1px solid white',
      borderRadius: '20px',
      p: '1rem'
    }}>
      <CardContent sx={{
        height: '75vh',
        textAlign: 'center'
      }}>
        {component}
      </CardContent>
    </Card>
  )
}

export default Catch;
