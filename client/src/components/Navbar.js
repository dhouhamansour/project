// import React from 'react'
import {Link} from 'react-router-dom'

// function Navbar() {
//     return (
//         <div>
//             <Link to="/home">home</Link>
//             <Link to="/registre">registre</Link>
//             <Link to="/post">post</Link>
//             <Link to="/login">login</Link>
//         </div>
//     )
// }

// export default Navbar

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit">
            <Link to="/home">home</Link> 
          </Button>
          <Button color="inherit">
            <Link to="/register">register</Link>
          </Button>
          <Button color="inherit">
            <Link to="/post">post</Link>
          </Button>
          <Button color="inherit">
            <Link to="/login">login</Link>
          </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
