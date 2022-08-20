import { Container, CssBaseline, Box, Avatar, Typography, TextField, Button } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen';

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const Register = () => {

  // const navigate = useNavigate();

  // const [error, setError] = useState('')

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const form = new FormData(e.target);
  //   const request = ({
  //     username: form.get('username'),
  //     password: form.get('password')
  //   })
  //   try {
  //     const response = await api.post('/api/users/login', request);
  //     const data = await response.data;
  //     if (data) {
  //       setError('')
  //       localStorage.setItem('id', data.response.id);
  //       navigate('/')
  //     }
  //   } catch (err) {
  //     console.log(err)
  //     setError(err.response.data.msg)
  //   }
  // }

  const handleSubmit = () => {
    console.log('submit')
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
        {/* { error && error } */}
      </Typography>
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
        />
        <TextField
          id="password2"
          name="password2"
          label="Confirm Password"
          required
          fullWidth
          margin="normal"
          type="password"
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