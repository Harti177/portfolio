import React, { Component } from 'react';
import Box from '@mui/material/Box';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ProjectButtons from './ProjectButtons';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#424242',
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
            <Toolbar>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Resume</Button>
              <Button color="inherit">Portfolio</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <ProjectButtons />
      </div>
    );
  }
}

export default App;