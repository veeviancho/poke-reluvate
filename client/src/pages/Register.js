import { Container, CssBaseline, Box, Avatar, Typography, TextField, Button } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import postData from '../utils/postData'

const Register = () => {

  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [user, setUser] = useState({
    username: '',
    password: '',
    password2: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password, password2 } = user;
    if (password === password2) {
      setError('');
      const details = { username, password }
      const data = postData("/users", details);
      if (data) setSuccess(<Typography component="p" variant="subtitle1" sx={{ color: 'success.main' }}>
        Successfully registered. Proceed to <Link to="/login">login</Link>.
      </Typography>)
      setUser({
        username: '',
        password: '',
        password2: ''
      })
    } else {
      setError('Passwords do not match.')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
    if (name === 'password2') {
      if (value !== user.password) {
        setIsError(true)
      } else {
        setIsError(false)
      }
    }
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Container maxWidth="sm" sx={{ borderRadius: 5,  p: 5, bgcolor: 'white' }}>
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Avatar sx={{ m: 1, backgroundColor: 'primary.dark'}}>
        <LockOpenIcon />
      </Avatar>
      <Typography component="h1" variant="h5" sx={{ m: 2, color: 'black' }}>
        Register
      </Typography>
      <Typography component="p" variant="subtitle1" sx={{ color: 'error.main' }}>
        { error && error }
      </Typography>
      { success && success }
      <Box component="form" sx={{ mt: 1, width: '80%' }} onSubmit={handleSubmit}>
        <TextField
          id="username"
          name="username"
          label="Username"
          required
          fullWidth
          margin="normal"
          autoComplete="username"
          autoFocus
          value={user.username}
          onChange={(e) => handleChange(e)}
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
          value={user.password}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          id="password2"
          name="password2"
          label="Confirm Password"
          required
          fullWidth
          margin="normal"
          type="password"
          value={user.password2}
          onChange={(e) => handleChange(e)}
          color={isError ? "error" : "primary" }
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 1, py: 1 }}
        >
          Register
        </Button>
      </Box>
      </Box>
    </Container>
    </Box>
  )
};

export default Register;