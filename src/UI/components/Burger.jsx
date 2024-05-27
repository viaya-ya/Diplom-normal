import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
  
      <Toolbar sx={{color:'#007BFF'}}>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
          <MenuIcon />
        </IconButton>
        <Typography sx={{ fontFamily: 'Playfair Display', color:'black' }}>Стили</Typography>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          
          <MenuItem onClick={handleClose} sx={{'&:hover': { color:'#007BFF', textDecoration:'underline' }}}> <NavLink to='/catalog'>Все товары</NavLink></MenuItem>
          <MenuItem onClick={handleClose} sx={{'&:hover': { color:'#007BFF', textDecoration:'underline' }}}> <NavLink to='/catalog/abstr'>Абстракционизм</NavLink></MenuItem>
          <MenuItem onClick={handleClose} sx={{'&:hover': { color:'#007BFF', textDecoration:'underline' }}}><NavLink to='/catalog/realizm'> Реализм </NavLink></MenuItem>
          <MenuItem onClick={handleClose} sx={{'&:hover': { color:'#007BFF', textDecoration:'underline' }}}><NavLink to='/catalog/impressionizm'> Импрессионизм </NavLink></MenuItem>
          <MenuItem onClick={handleClose} sx={{'&:hover': { color:'#007BFF', textDecoration:'underline' }}}><NavLink to='/catalog/illustraciya'>Иллюстрация</NavLink> </MenuItem>
          <MenuItem onClick={handleClose} sx={{'&:hover': { color:'#007BFF', textDecoration:'underline' }}}><NavLink to='/catalog/minimalizm'>Минимализм</NavLink></MenuItem>
          <MenuItem onClick={handleClose} sx={{'&:hover': { color:'#007BFF', textDecoration:'underline' }}}><NavLink to='/catalog/naturmort'>Натюрморт</NavLink></MenuItem>
          <MenuItem onClick={handleClose} sx={{'&:hover': { color:'#007BFF', textDecoration:'underline' }}}><NavLink to='/catalog/simvolizm'>Символизм</NavLink></MenuItem>
        </Menu>
      </Toolbar>

  );
};

export default Navbar;
