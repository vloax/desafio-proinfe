import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../../public/css/style.css';

export default function Nav() {
  return (
    <Box style={{ margin: '0 auto' }} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Funcionários - Proinfe
          </Typography>
          <Button href="/cadastrar-funcionarios" color="inherit">
            Cadastrar Funcionários
          </Button>
          <Button href="/listar-funcionarios" color="inherit">
            Listar Funcionários
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
