// import React, { useState } from 'react';
// import { login } from '../services/api';

// const Login = ({ setToken }) => {
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: ''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await login(credentials);
//       localStorage.setItem('token', data.token);
//       setToken(data.token);
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
//       <h2 className="text-2xl font-bold mb-6">Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="email"
//           value={credentials.email}
//           onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
//           placeholder="Email"
//           className="w-full p-2 border rounded"
//         />
//         <input
//           type="password"
//           value={credentials.password}
//           onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
//           placeholder="Password"
//           className="w-full p-2 border rounded"
//         />
//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { login } from '../services/api';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

const Login = ({ setToken }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(credentials);
      localStorage.setItem('token', data.token);
      setToken(data.token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" gutterBottom>Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;