import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

import { Stack, IconButton, Typography } from '@mui/material';
import PokemonIcon from '@mui/icons-material/CatchingPokemon';
import LogoutIcon from '@mui/icons-material/PowerSettingsNew';

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    const confirm = window.confirm('Confirm logout?');
    if (confirm) {
      localStorage.removeItem('token');
      navigate('/login')
    }
  }
  return (
    <Stack 
      direction="row" 
      justifyContent="space-between" 
      alignItems='center' 
      py={3}
      px={5}
      sx={{ backgroundColor: '#181821', position: 'fixed', width: '100vw', textTransform: 'uppercase' }}
    >
      <NavLink to="/" className='link'>
        <Stack direction="row" alignItems="center" spacing={2}>
          <PokemonIcon fontSize="large" sx={{ color: 'white' }} />
          <Typography>Gotta Catch 'Em All</Typography>
        </Stack>
      </NavLink>
      <Stack 
        direction="row" 
        alignItems='center' 
        spacing={2}
        pr={3}
      >
        <NavLink to="/" className={({ isActive }) => isActive ? 'link link-active' : 'link'}>
          <Typography>Catch Pokemon</Typography>
        </NavLink>
        <NavLink to="/collection" className={({ isActive }) => isActive ? 'link link-active' : 'link'}>
          <Typography>My Collection</Typography>
        </NavLink>
        <IconButton onClick={handleLogout}><LogoutIcon sx={{ color: 'white' }} /></IconButton>
      </Stack>
    </Stack>
  )
}

export default Navbar