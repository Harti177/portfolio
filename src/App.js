import React, { Component } from 'react';
import Box from '@mui/material/Box';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ProjectButtons from './ProjectButtons';
import { createTheme } from '@mui/material/styles';
import Home from './Home';
import { Typography } from '@mui/material';
import './styles.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      main: '#000000',
      contrastText: '#000',
    },
  },
});

class App extends Component {
  render() {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar theme={theme} position="static" color="primary">
            <Toolbar sx={{justifyContent:'right' }}>
             <button onClick={() => {
              window.open("https://drive.google.com/file/d/1Z6JV9EWSBAkzMhDINB3-cDqw1sS2hUXJ/view");
            }}
              className='socailmediabtn'>Resume</button>
            </Toolbar>
          </AppBar>
        </Box>
        <Home />
        <ProjectButtons />
      </div>
    );
  }
}

export default App;