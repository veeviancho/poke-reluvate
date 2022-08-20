import { Card, CardContent } from "@mui/material";
import { useState, useEffect } from "react";

import StartContent from '../components/StartContent';
import GuessContent from '../components/GuessContent';
import CompletedContent from '../components/CompletedContent';

const Catch = () => {

  const handleComplete = (success, number) => {
    setComponent(<CompletedContent success={success} setComponent={setComponent} handleClick={handleClick} number={number} />)
  }

  const handleClick = () => {
    setComponent(<GuessContent handleComplete={handleComplete} />)
  }

  const [component, setComponent] = useState(<StartContent handleClick={handleClick}/>)

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
