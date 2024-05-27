import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Badge } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Text.module.css'; // Импорт CSS-модуля

const pages = [
 { name: 'Главная', link: '/main' },
 { name: 'Каталог', link: '/catalog' },
 { name: 'Художники', link: '/artists' },
 { name: 'Контакты', link: '/contact' },
 { name: 'Корзина', link: '/basket' },
];

const settings = ['Профиль', 'Войти', 'Выйти'];

function Header({ handleCartOpen, basketLength }) {
 const [anchorElNav, setAnchorElNav] = React.useState(null);
 const [anchorElUser, setAnchorElUser] = React.useState(null);
 const [lastScrollTop, setLastScrollTop] = useState(0);
 const [showHeader, setShowHeader] = useState(true);

 const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
 };
 const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
 };

 const handleCloseNavMenu = () => {
    setAnchorElNav(null);
 };

 const handleCloseUserMenu = () => {
    setAnchorElUser(null);
 };

 useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
 }, [lastScrollTop]);

 return (
    <AppBar position="fixed" style={{ display: showHeader ? 'flex' : 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontFamily:'Playfair Display'
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}  sx={{fontFamily:'Playfair Display'}}>
                 <Link to={page.link} textAlign="center"  className={styles.text}>{page.name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontFamily:'Playfair Display'
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                component={Link}
                to={page.link} // Use 'to' for navigation
                sx={{ my: 2, color: 'white', display: 'block',fontFamily:'Playfair Display' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            onClick={handleCartOpen}
          >
            <Badge color="secondary" badgeContent={basketLength} sx={{ mr: 1 }}>
              <AddShoppingCartIcon sx={{ mr: 1 }} />
            </Badge>
          </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Настройки">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="V" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                 <Typography textAlign="center"  sx={{fontFamily:'Playfair Display'}}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
 );
}

export default Header;
