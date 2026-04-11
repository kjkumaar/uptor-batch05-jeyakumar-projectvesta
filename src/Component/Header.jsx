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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { Themecontext } from './Themecontext';
import { LoginContext } from './LoginContext';



const pages = [
  { label: "Home", section: "home" },
  { label: "Products", section: "products" },
  { label: "About us", section: "about" },
  { label: "Contact us", section: "contact" }
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { theme, toggleTheme } = useContext(Themecontext);
  const { setLoggedIn } = useContext(LoginContext);
  const isDark = theme === "dark";

  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const cartItems = useSelector((state) => state.cart.items);

  // total quantity
  const cartCount = useSelector(
    (state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }

    // Scroll if already on home page
    const element = document.getElementById(id);
    if (element) {
      const offset = -70; // Navbar height
      const top = element.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme === "light" ? "#1a559e" : "#121212",
        transition: "background-color 0.3s ease"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            VESTA
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton color="inherit" onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={() => {
                    handleCloseNavMenu();
                    scrollToSection(page.section); // scroll or navigate
                  }}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={() => scrollToSection(page.section)}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          {/* Icons */}
          <Box sx={{ flexGrow: 0, display: "flex", gap: 2 }}>
            <IconButton color="inherit" onClick={() => navigate("/cart")}>
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <div>
              <div
                onClick={toggleTheme}
                style={{
                  width: "70px",
                  height: "32px",
                  borderRadius: "20px",
                  background: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 6px",
                  cursor: "pointer",
                  position: "relative",
                  border: "1px solid #ccc",
                  transition: "all 0.3s ease"
                }}
              >
                {/* ☀️ Sun */}
                <span style={{ fontSize: "14px" }}>☀️</span>

                {/* 🌙 Moon */}
                <span style={{ fontSize: "14px" }}>🌙</span>

                {/* Sliding Knob */}
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: isDark ? "38px" : "4px",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: "#1a559e",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
                  }}
                />
              </div>
            </div>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="User" />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => {
                    handleCloseUserMenu();

                    if (setting === "Dashboard") {
                      navigate("/");   // 👈 Go to home page
                    }

                    if (setting === "Account") {
                      navigate("/login");
                    }

                    if (setting === "Logout") {
                      localStorage.removeItem("isLoggedin");
                      setLoggedIn(false);
                      navigate("/");
                    }
                  }}
                >
                  {setting}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;