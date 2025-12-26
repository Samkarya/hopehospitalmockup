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
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useScrollTrigger,
  Stack,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import GroupsIcon from '@mui/icons-material/Groups';
import PublicIcon from '@mui/icons-material/Public';

// Elevation scroll effect
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      backgroundColor: trigger ? 'white' : 'rgba(255,255,255,0.98)',
      transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    }
  });
}

const Header = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#', icon: <HomeIcon /> },
    { name: 'About Us', href: '#about', icon: <InfoIcon /> },
    { name: 'Doctors', href: '#doctors', icon: <GroupsIcon /> },
    { name: 'Treatments', href: '#treatments', icon: <MedicalServicesIcon /> },
    { name: 'International', href: '#international', icon: <PublicIcon /> },
  ];

  // Premium Mobile Drawer
  const drawer = (
    <Box sx={{ width: 280, height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Drawer Header */}
      <Box
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: 'primary.main',
          color: 'white'
        }}
      >
        <Box
          component="img"
          src="/assets/images/logo-hope.webp"
          alt="The Hope Hospital Logo"
          sx={{ height: 40 }}
        />
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation Links */}
      <List sx={{ flexGrow: 1, py: 2 }}>
        {navLinks.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component="a"
              href={item.href}
              onClick={handleDrawerToggle}
              sx={{
                py: 1.5,
                px: 3,
                '&:hover': {
                  bgcolor: 'primary.light',
                  color: 'primary.contrastText',
                  '& .MuiListItemIcon-root': {
                    color: 'primary.contrastText',
                  }
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Drawer Footer */}
      <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          size="large"
          startIcon={<LocalHospitalIcon />}
          sx={{ mb: 2 }}
        >
          Book Appointment
        </Button>
        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
          <PhoneInTalkIcon fontSize="small" color="primary" />
          <Typography variant="body2" fontWeight="bold" color="primary.main">
            <Box component="a" href="tel:+919667792126" sx={{ textDecoration: 'none', color: 'inherit' }}>
              +91-9667792126
            </Box>
          </Typography>
        </Stack>
      </Box>
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
            spacing={{ xs: 0.5, sm: 1 }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <LocalHospitalIcon fontSize="small" color="error" />
              <Typography variant="caption" fontWeight="bold">
                Emergency (24/7):{' '}
                <Box component="a" href="tel:+919667792126" sx={{ color: 'inherit', textDecoration: 'none' }}>
                  +91-9667792126
                </Box>
              </Typography>
            </Box>
            <Box display={{ xs: 'none', md: 'flex' }} alignItems="center" gap={2}>
              <Typography variant="caption" display="flex" alignItems="center" gap={0.5}>
                <LocationOnIcon fontSize="inherit" /> Delta II, Greater Noida
              </Typography>
              <Typography variant="caption" sx={{ bgcolor: 'secondary.main', color: 'primary.dark', px: 1, borderRadius: 1, fontWeight: 600 }}>
                NABH Accredited
              </Typography>
              <Typography variant="caption" sx={{ bgcolor: 'white', color: 'primary.main', px: 1, borderRadius: 1, fontWeight: 600 }}>
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
            <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 56, md: 70 } }}>

              {/* Logo Area */}
              <Box display="flex" alignItems="center">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 1, display: { md: 'none' } }}
                >
                  <MenuIcon color="primary" sx={{ fontSize: 28 }} />
                </IconButton>
                <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box
                    component="img"
                    src="/assets/images/logo-hope.webp"
                    alt="The Hope Hospital"
                    sx={{ height: { xs: 36, md: 48 }, width: 'auto' }}
                  />
                </Box>
              </Box>

              {/* Desktop Menu */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
                {navLinks.map((item) => (
                  <Button
                    key={item.name}
                    href={item.href}
                    sx={{
                      color: 'text.primary',
                      fontWeight: 500,
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: 'white',
                        bgcolor: 'primary.light',
                      }
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>

              {/* CTA Button */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                {/* Mobile Call Icon */}
                <IconButton
                  sx={{
                    display: { xs: 'flex', md: 'none' },
                    bgcolor: 'primary.main',
                    color: 'white',
                    '&:hover': { bgcolor: 'primary.dark' }
                  }}
                  href="tel:+919667792126"
                  size="small"
                >
                  <PhoneInTalkIcon fontSize="small" />
                </IconButton>

                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<LocalHospitalIcon />}
                  sx={{
                    display: { xs: 'none', sm: 'flex' },
                    px: { sm: 2, md: 3 },
                    fontWeight: 600,
                    borderRadius: 2,
                  }}
                >
                  Book Appointment
                </Button>
              </Box>

            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            borderRadius: '0 16px 16px 0',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;