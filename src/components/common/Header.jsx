import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Stack,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

// Elevation scroll effect
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? '#ffffff' : 'rgba(255,255,255,0.95)',
    }
  });
}

const Header = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'International', href: '#international' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 2 }}>
      <Box
        component="img"
        src="/assets/images/logo-hope.webp"
        alt="The Hope Hospital Logo"
        sx={{ height: 50, my: 2, mx: 'auto', display: 'block' }}
      />
      <List>
        {navLinks.map((item) => (
          <ListItem button key={item.name} component="a" href={item.href}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
        <ListItem>
          <Button fullWidth variant="contained" color="secondary">
            Book Appointment
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      {/* 1. Emergency Top Strip */}
      <Box sx={{
        bgcolor: 'primary.dark',
        color: 'white',
        py: 0.8,
        textAlign: 'center',
        fontSize: '0.85rem'
      }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <LocalHospitalIcon fontSize="small" color="error" />
              <Typography variant="caption" fontWeight="bold">
                Emergency (24/7): +91-9667792126
              </Typography>
            </Box>
            <Box display={{ xs: 'none', md: 'flex' }} alignItems="center" gap={2}>
              <Typography variant="caption" display="flex" alignItems="center" gap={0.5}>
                <LocationOnIcon fontSize="inherit" /> Delta II, Greater Noida
              </Typography>
              <Typography variant="caption" sx={{ bgcolor: 'secondary.main', color: 'primary.dark', px: 1, borderRadius: 1 }}>
                NABH Accredited
              </Typography>
              <Typography variant="caption" sx={{ bgcolor: 'white', color: 'primary.main', px: 1, borderRadius: 1 }}>
                CGHS Empanelled
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* 2. Sticky Navbar */}
      <ElevationScroll {...props}>
        <AppBar position="sticky" color="inherit">
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>

              {/* Logo Area */}
              <Box display="flex" alignItems="center">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { md: 'none' } }}
                >
                  <MenuIcon color="primary" />
                </IconButton>
                <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box
                    component="img"
                    src="/assets/images/logo-hope.webp"
                    alt="The Hope Hospital"
                    sx={{ height: { xs: 40, md: 50 }, width: 'auto' }}
                  />
                </Box>
              </Box>

              {/* Desktop Menu */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
                {navLinks.map((item) => (
                  <Button
                    key={item.name}
                    href={item.href}
                    sx={{ color: 'text.primary', fontWeight: 500, '&:hover': { color: 'primary.main' } }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>

              {/* CTA Button */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                {/* Mobile Call Icon */}
                <IconButton
                  sx={{ display: { xs: 'flex', md: 'none' }, bgcolor: 'primary.light', color: 'white' }}
                  href="tel:+919667792126"
                >
                  <PhoneInTalkIcon fontSize="small" />
                </IconButton>

                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<LocalHospitalIcon />}
                  sx={{ display: { xs: 'none', sm: 'flex' } }}
                >
                  Book Appointment
                </Button>
              </Box>

            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Header;