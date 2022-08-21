import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, CssBaseline, Box, Avatar, Typography, TextField, Button } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen';

import fetchData from "../utils/fetchData"

const Login = () => {

  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userExists = await fetchData(`/users?username=${user.username}`);
    try {
      if (userExists[0].password === user.password) {
        localStorage.setItem('token', userExists.id);
        navigate('/')
      } else {
        setError('Wrong password entered.')
      }
    } catch (err) {
      console.log(err)
      setError('User does not exist.')
    }
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Container maxWidth="sm" sx={{ borderRadius: 5,  p: 5, bgcolor: 'white', color: 'black' }}>
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Avatar sx={{ m: 1, backgroundColor: 'primary.dark'}}>
        <LockOpenIcon />
      </Avatar>
      <Typography component="h1" variant="h5" sx={{ m: 2 }}>
        Login
      </Typography>
      <Typography component="p" variant="subtitle1" sx={{ color: 'error.main' }}>
        { error && error }
      </Typography>
      <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
        <TextField
          id="username"
          name="username"
          label="Username"
          required
          fullWidth
          margin="normal"
          autoComplete="username"
          autoFocus
          onChange={(e) => handleChange(e)}
          value={user.username}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          required
          fullWidth
          margin="normal"
          autoComplete="current-password"
          type="password"
          onChange={(e) => handleChange(e)}
          value={user.password}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 1, py: 1 }}
        >
          Login
        </Button>
        <Typography sx={{ textAlign: 'center' }}>No account yet? <Link to="/register">Register</Link> now.</Typography>
      </Box>
      </Box>
    </Container>
    </Box>
  )
};

export default Login;