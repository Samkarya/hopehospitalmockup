# Project Documentation: Examify

Generated on: 26/12/2025, 3:31:55 pm

## 1. Directory Structure

```text
├── 📄 .gitignore
├── 📄 eslint.config.js
├── 📄 index.html
├── 📄 package.json
├── 📁 **public/**
│   └── 📁 **assets/**
│       └── 📁 **images/**
├── 📄 README.md
├── 📁 **src/**
│   ├── 📄 App.jsx
│   ├── 📁 **components/**
│   │   ├── 📁 **common/**
│   │   │   ├── 📄 EmergencyFAB.jsx
│   │   │   ├── 📄 Footer.jsx
│   │   │   ├── 📄 Header.jsx
│   │   │   ├── 📄 SectionTitle.jsx
│   │   │   └── 📄 VideoSection.jsx
│   │   ├── 📁 **hero/**
│   │   │   ├── 📄 BookingCard.jsx
│   │   │   └── 📄 HeroSection.jsx
│   │   └── 📁 **sections/**
│   │       ├── 📄 AboutSection.jsx
│   │       ├── 📄 Doctors.jsx
│   │       ├── 📄 Excellence.jsx
│   │       ├── 📄 ImageCarousel.jsx
│   │       ├── 📄 Insurance.jsx
│   │       ├── 📄 Stats.jsx
│   │       ├── 📄 Testimonials.jsx
│   │       └── 📄 WhyChooseUs.jsx
│   ├── 📄 main.jsx
│   └── 📁 **theme/**
│       └── 📄 theme.js
└── 📄 vite.config.js
```

---

## 2. File Implementation Details

## File: eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])

```

---

## File: index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>hopehospitalmockup</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

---

## File: package.json

```json
{
  "name": "hopehospitalmockup",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "@mui/icons-material": "^7.3.6",
    "@mui/material": "^7.3.6",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "swiper": "^12.0.3"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "vite": "npm:rolldown-vite@7.2.5"
  },
  "overrides": {
    "vite": "npm:rolldown-vite@7.2.5"
  }
}

```

---

## File: README.md

```md
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```

---

## File: src\App.jsx

```jsx
import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme/theme';

// Layout & Common
import Navbar from './components/common/Header';
import Footer from './components/common/Footer';
import EmergencyFAB from './components/common/EmergencyFAB';
import VideoSection from './components/common/VideoSection';

// Sections
import HeroSection from './components/hero/HeroSection';
import ImageCarousel from './components/sections/ImageCarousel';
import AboutSection from './components/sections/AboutSection';
import Excellence from './components/sections/Excellence';
import Doctors from './components/sections/Doctors';
import Stats from './components/sections/Stats';
import WhyChooseUs from './components/sections/WhyChooseUs';

// Video Data
const testimonialVideos = [
  { id: 'mBkOSzYvEVg', title: 'Patient Success Story' },
  { id: 'rDzO0jRnFSE', title: 'Recovery Journey' },
  { id: 'fdywafPYFKk', title: 'Happy Patient' },
  { id: 'tVTgRqevBsk', title: 'Orthopedic Care' },
  { id: 'bj0EeDYGx-s', title: 'Family Experience' },
  { id: 'iJbmqk6svWg', title: 'Thank You Hope' },
];

const wellnessVideos = [
  { id: 'Sa9jGZflhCM', title: 'Health Tips' },
  { id: 'h5FYIQRSgPA', title: 'Community Event' },
  { id: 'Hny89ICheHA', title: 'Wellness Program' },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

        <Navbar />

        <main style={{ flex: 1 }}>
          {/* Hero - First Impression */}
          <HeroSection />

          {/* Facilities Carousel */}
          <ImageCarousel />

          {/* About the Hospital */}
          <AboutSection />

          {/* Excellence & Stats */}
          <Excellence />
          <Stats />

          {/* Our Doctors */}
          <Doctors />

          {/* Patient Testimonials Videos */}
          <VideoSection
            chipLabel="Patient Stories"
            title="Voices of Hope"
            subtitle="Hear from our patients about their journey to recovery at The Hope Hospital."
            videos={testimonialVideos}
            bgColor="background.subtle"
          />

          {/* Community Wellness Videos */}
          <VideoSection
            chipLabel="Community"
            title="Wellness & Community"
            subtitle="Explore our health awareness programs and community initiatives."
            videos={wellnessVideos}
            bgColor="background.default"
          />

          {/* Why Choose Us */}
          <WhyChooseUs />
        </main>

        <Footer />

        <EmergencyFAB />

      </Box>
    </ThemeProvider>
  );
}

export default App;
```

---

## File: src\components\common\EmergencyFAB.jsx

```jsx
import React from 'react';
import { Fab, Tooltip, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const EmergencyFAB = () => {
  const handleClick = () => {
    window.open('https://wa.me/919667792126?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment', '_blank');
  };

  return (
    <Zoom in={true} style={{ transitionDelay: '500ms' }}>
      <Tooltip title="Chat on WhatsApp" placement="left" arrow>
        <Fab
          onClick={handleClick}
          aria-label="whatsapp"
          sx={{
            position: 'fixed',
            bottom: { xs: 16, md: 24 },
            right: { xs: 16, md: 24 },
            width: { xs: 56, md: 64 },
            height: { xs: 56, md: 64 },
            bgcolor: '#25D366',
            color: 'white',
            zIndex: 9999,
            '&:hover': {
              bgcolor: '#1ebc57',
              transform: 'scale(1.05)',
            },
            boxShadow: '0px 4px 20px rgba(37, 211, 102, 0.4)',
            transition: 'all 0.3s ease',
          }}
        >
          <WhatsAppIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
        </Fab>
      </Tooltip>
    </Zoom>
  );
};

export default EmergencyFAB;
```

---

## File: src\components\common\Footer.jsx

```jsx
import React from 'react';
import { Box, Container, Grid, Typography, Link, Stack, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#1a2027', color: 'grey.300', pt: { xs: 6, md: 8 }, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 5 }}>

          {/* Column 1: About & Logo */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              component="img"
              src="/assets/images/logo-hope.webp"
              alt="The Hope Hospital Logo"
              sx={{ height: 50, mb: 2, filter: 'brightness(1.2)' }}
            />
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.8, color: 'grey.400' }}>
              The Hope Hospital is a multi-specialty healthcare provider in Greater Noida committed to delivering
              world-class medical care with empathy and excellence.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                sx={{
                  bgcolor: 'rgba(255,255,255,0.1)',
                  color: 'grey.300',
                  '&:hover': { bgcolor: '#1877f2', color: 'white' }
                }}
                aria-label="facebook"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: 'rgba(255,255,255,0.1)',
                  color: 'grey.300',
                  '&:hover': { bgcolor: '#e4405f', color: 'white' }
                }}
                aria-label="instagram"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: 'rgba(255,255,255,0.1)',
                  color: 'grey.300',
                  '&:hover': { bgcolor: '#ff0000', color: 'white' }
                }}
                aria-label="youtube"
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: 'rgba(255,255,255,0.1)',
                  color: 'grey.300',
                  '&:hover': { bgcolor: '#25D366', color: 'white' }
                }}
                aria-label="whatsapp"
              >
                <WhatsAppIcon />
              </IconButton>
            </Stack>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={6} sm={6} md={2}>
            <Typography variant="subtitle1" color="white" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1.5} sx={{ mt: 2 }}>
              {['Home', 'About Us', 'Our Doctors', 'Treatments', 'International Patients', 'Contact Us'].map((link) => (
                <Link
                  key={link}
                  href="#"
                  color="grey.400"
                  underline="none"
                  sx={{
                    fontSize: '0.9rem',
                    transition: 'all 0.2s',
                    '&:hover': { color: 'secondary.main', pl: 0.5 }
                  }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" color="white" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Stack spacing={2.5} sx={{ mt: 2 }}>
              <Box display="flex" gap={1.5} alignItems="flex-start">
                <LocationOnIcon sx={{ color: 'secondary.main', mt: 0.3 }} fontSize="small" />
                <Typography variant="body2" color="grey.400">
                  Delta II, Greater Noida,<br /> Uttar Pradesh 201308
                </Typography>
              </Box>
              <Box display="flex" gap={1.5} alignItems="flex-start">
                <PhoneIcon sx={{ color: 'secondary.main', mt: 0.3 }} fontSize="small" />
                <Typography variant="body2" color="grey.400">
                  <Box component="a" href="tel:+919667792126" sx={{ color: 'inherit', textDecoration: 'none' }}>
                    +91-9667792126
                  </Box>
                  <br />
                  <Box component="a" href="tel:01204225085" sx={{ color: 'inherit', textDecoration: 'none' }}>
                    0120-4225085
                  </Box>
                </Typography>
              </Box>
              <Box display="flex" gap={1.5} alignItems="flex-start">
                <EmailIcon sx={{ color: 'secondary.main', mt: 0.3 }} fontSize="small" />
                <Typography variant="body2" color="grey.400">
                  <Box component="a" href="mailto:emergency@thehopehealthcare.com" sx={{ color: 'inherit', textDecoration: 'none' }}>
                    emergency@thehopehealthcare.com
                  </Box>
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Column 4: Map */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" color="white" fontWeight="bold" gutterBottom>
              Find Us
            </Typography>
            <Box sx={{
              width: '100%',
              height: { xs: 160, md: 180 },
              bgcolor: 'grey.800',
              borderRadius: 2,
              overflow: 'hidden',
              mt: 2
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.679267676712!2d77.5146!3d28.5191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMxJzA4LjgiTiA3N8KwMzAnNTIuNiJF!5e0!3m2!1sen!2sin!4v1638200000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Hospital Location"
              ></iframe>
            </Box>
          </Grid>

        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'grey.800' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="caption" color="grey.500">
            © {new Date().getFullYear()} The Hope Hospital. All Rights Reserved. | Designed with ❤️
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
```

---

## File: src\components\common\Header.jsx

```jsx
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
```

---

## File: src\components\common\SectionTitle.jsx

```jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const SectionTitle = ({ title, subtitle, align = 'center', color = 'primary' }) => {
  return (
    <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: align }}>
      <Typography
        variant="overline"
        component="span"
        sx={{
          color: 'secondary.main',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: 2,
          display: 'block',
          mb: 1,
          fontSize: { xs: '0.7rem', sm: '0.75rem' }
        }}
      >
        {subtitle}
      </Typography>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          color: `${color}.main`,
          fontWeight: 700,
          position: 'relative',
          display: 'inline-block',
          fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.25rem' },
          lineHeight: 1.3,
          '&::after': {
            content: '""',
            display: align === 'center' ? 'block' : 'none',
            width: '50px',
            height: '4px',
            bgcolor: 'secondary.main',
            mx: 'auto',
            mt: 2,
            borderRadius: 2
          }
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
```

---

## File: src\components\common\VideoSection.jsx

```jsx
import React, { useState } from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
    CardMedia,
    Dialog,
    IconButton,
    Chip
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

/**
 * Reusable VideoSection Component
 * 
 * @param {string} title - Section title
 * @param {string} subtitle - Section subtitle/description
 * @param {string} chipLabel - Optional chip label (e.g., "Testimonials")
 * @param {Array} videos - Array of video objects { id: 'youtubeId', title: 'Video Title' }
 * @param {string} bgColor - Background color ('default', 'subtle', or custom)
 */
const VideoSection = ({
    title,
    subtitle,
    chipLabel,
    videos = [],
    bgColor = 'background.default'
}) => {
    const [openVideo, setOpenVideo] = useState(null);

    return (
        <Box
            sx={{
                py: { xs: 6, md: 8 },
                bgcolor: bgColor,
                overflow: 'hidden'
            }}
        >
            <Container maxWidth="lg">
                {/* Section Header */}
                <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}>
                    {chipLabel && (
                        <Chip
                            label={chipLabel}
                            color="secondary"
                            size="small"
                            sx={{ mb: 2, fontWeight: 600, letterSpacing: 0.5 }}
                        />
                    )}
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            fontWeight: 700,
                            mb: 1,
                            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                        }}
                    >
                        {title}
                    </Typography>
                    {subtitle && (
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ maxWidth: 600, mx: 'auto' }}
                        >
                            {subtitle}
                        </Typography>
                    )}
                </Box>

                {/* Video Grid */}
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    {videos.map((video, index) => (
                        <Grid item xs={6} sm={4} md={4} key={index}>
                            <Card
                                sx={{
                                    position: 'relative',
                                    cursor: 'pointer',
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-6px)',
                                        boxShadow: 6,
                                        '& .play-icon': {
                                            transform: 'scale(1.15)',
                                            color: 'secondary.main'
                                        },
                                        '& .overlay': {
                                            bgcolor: 'rgba(0,0,0,0.4)'
                                        }
                                    }
                                }}
                                onClick={() => setOpenVideo(video.id)}
                            >
                                {/* YouTube Thumbnail */}
                                <CardMedia
                                    component="img"
                                    image={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                    alt={video.title || 'Video'}
                                    sx={{
                                        height: { xs: 120, sm: 160, md: 200 },
                                        objectFit: 'cover'
                                    }}
                                />

                                {/* Overlay */}
                                <Box
                                    className="overlay"
                                    sx={{
                                        position: 'absolute',
                                        top: 0, left: 0, width: '100%', height: '100%',
                                        bgcolor: 'rgba(0,0,0,0.3)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <PlayCircleOutlineIcon
                                        className="play-icon"
                                        sx={{
                                            fontSize: { xs: 40, sm: 50, md: 60 },
                                            color: 'white',
                                            transition: 'all 0.3s ease',
                                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                                        }}
                                    />
                                </Box>
                            </Card>
                            {video.title && (
                                <Typography
                                    variant="caption"
                                    align="center"
                                    display="block"
                                    sx={{
                                        mt: 1,
                                        fontWeight: 500,
                                        color: 'text.secondary',
                                        fontSize: { xs: '0.7rem', sm: '0.75rem' }
                                    }}
                                >
                                    {video.title}
                                </Typography>
                            )}
                        </Grid>
                    ))}
                </Grid>

                {/* Video Lightbox Modal */}
                <Dialog
                    open={Boolean(openVideo)}
                    onClose={() => setOpenVideo(null)}
                    maxWidth="md"
                    fullWidth
                    slotProps={{
                        backdrop: {
                            sx: { bgcolor: 'rgba(0,0,0,0.85)' }
                        }
                    }}
                >
                    <Box sx={{ position: 'relative', pt: '56.25%', bgcolor: 'black' }}>
                        <IconButton
                            onClick={() => setOpenVideo(null)}
                            sx={{
                                position: 'absolute',
                                top: -48,
                                right: 0,
                                color: 'white',
                                zIndex: 10,
                                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        {openVideo && (
                            <iframe
                                src={`https://www.youtube.com/embed/${openVideo}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        )}
                    </Box>
                </Dialog>
            </Container>
        </Box>
    );
};

export default VideoSection;

```

---

## File: src\components\hero\BookingCard.jsx

```jsx
import { Paper, Typography, Stack, TextField, MenuItem, Button, Box } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const departments = [
    'Orthopedics',
    'Gynecology',
    'Cardiology',
    'Neurology',
    'General Medicine',
    'General Surgery'
];

/**
 * BookingCard Component
 * A reusable appointment booking form card.
 * 
 * @param {object} props
 * @param {string} props.variant - 'floating' for hero section, 'standalone' for mobile
 */
const BookingCard = ({ variant = 'standalone' }) => {
    const isFloating = variant === 'floating';

    return (
        <Paper
            elevation={isFloating ? 8 : 4}
            sx={{
                p: { xs: 2.5, sm: 3 },
                borderRadius: 3,
                bgcolor: 'white',
                width: '100%',
                maxWidth: isFloating ? 340 : 450,
                mx: 'auto',
            }}
        >
            <Typography variant="h6" color="primary" fontWeight="bold" gutterBottom>
                Quick Appointment
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5 }}>
                Skip the queue. Book your slot now.
            </Typography>

            <Stack spacing={2}>
                <TextField
                    label="Patient Name"
                    fullWidth
                    variant="outlined"
                    size="small"
                />
                <TextField
                    label="Mobile Number"
                    fullWidth
                    variant="outlined"
                    type="tel"
                    size="small"
                    inputProps={{ maxLength: 10 }}
                />
                <TextField
                    select
                    label="Department"
                    fullWidth
                    size="small"
                    defaultValue=""
                >
                    <MenuItem value="" disabled>
                        Select a department
                    </MenuItem>
                    {departments.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    size="large"
                    startIcon={<LocalHospitalIcon />}
                    sx={{ py: 1.25, fontSize: '1rem' }}
                >
                    Book Now
                </Button>
                <Box textAlign="center">
                    <Typography variant="caption" color="text.secondary">
                        Or call{' '}
                        <Box
                            component="a"
                            href="tel:01204225085"
                            sx={{ fontWeight: 'bold', color: 'primary.main', textDecoration: 'none' }}
                        >
                            0120-4225085
                        </Box>
                    </Typography>
                </Box>
            </Stack>
        </Paper>
    );
};

export default BookingCard;

```

---

## File: src\components\hero\HeroSection.jsx

```jsx
import { Box, Container, Typography, Grid, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookingCard from './BookingCard';

const HeroSection = () => {
  return (
    <Box sx={{ position: 'relative', bgcolor: 'background.default' }}>

      {/* Background Container */}
      <Box sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '90vh' },
        width: '100%',
        background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%)',
        display: 'flex',
        alignItems: 'center',
        pb: { xs: 4, md: 0 },
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: { xs: 40, md: 80 },
          bgcolor: 'background.default',
          borderRadius: '100% 100% 0 0',
        }
      }}>

        {/* Background Pattern */}
        <Box sx={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          opacity: 0.1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">

            {/* Left Content */}
            <Grid item xs={12} md={6} sx={{ color: 'white', pt: { xs: 10, md: 4 } }}>
              <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                <VerifiedUserIcon sx={{ color: 'secondary.main' }} />
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1.5, opacity: 0.95 }}>
                  Greater Noida's Most Trusted Care
                </Typography>
              </Stack>

              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.25rem' },
                  lineHeight: 1.2,
                  fontWeight: 700,
                  textShadow: '0px 2px 4px rgba(0,0,0,0.3)',
                  mb: 2
                }}
              >
                <Box component="span" sx={{ color: 'secondary.main' }}>
                Expert Care, <br />
                Nurturing Happiness</Box>
              </Typography>

              <Typography variant="h6" sx={{ opacity: 0.9, mb: 3, maxWidth: '550px', fontWeight: 400, lineHeight: 1.7, fontSize: { xs: '0.95rem', md: '1.1rem' } }}>
                NABH Accredited multi-specialty hospital providing world-class orthopedic, gynecological, and surgical care at affordable prices.
              </Typography>

              <Stack direction="row" spacing={3} sx={{ mb: 4, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocalHospitalIcon sx={{ color: 'secondary.main' }} />
                  <Typography variant="body2" fontWeight={600}>15+ Specialties</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccessTimeIcon sx={{ color: 'secondary.main' }} />
                  <Typography variant="body2" fontWeight={600}>24/7 Emergency</Typography>
                </Box>
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button variant="contained" color="secondary" size="large" endIcon={<ArrowForwardIcon />} sx={{ px: 4, py: 1.5, fontSize: '1rem' }}>
                  Book Appointment
                </Button>
                <Button variant="outlined" color="inherit" size="large" sx={{ borderColor: 'rgba(255,255,255,0.5)', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  Our Specialities
                </Button>
              </Stack>
            </Grid>

            {/* Right Content - Doctor Image + Floating Card */}
            <Grid item xs={12} md={6} sx={{ 
              display: 'flex', 
              // Fix Mobile Centering (center) vs Desktop (flex-end)
              justifyContent: { xs: 'center', md: 'flex-end' }, 
              alignItems: 'flex-end', 
              position: 'relative',
              mt: { xs: 5, md: 0 } // Add spacing on mobile so he isn't too close to buttons
            }}>
              
              {/* Doctor Image */}
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: '85%', sm: '70%', md: '90%' }, // Increased width
                  maxWidth: 500, // Increased size so he doesn't look small/buried
                  zIndex: 2,
                  // FIX 1: Push image left on Large screens to make room for card
                  mr: { s: 'auto', lg: 28 }, 
                  // FIX 2: Center image on Mobile
                  ml: { s: 'auto', lg: 0 },
                  display: 'block'
                }}
              >
                <Box
                  component="img"
                  src="/assets/images/drviayupadhyay.webp"
                  alt="Dr. Vinay Upadhyay"
                  sx={{ 
                    width: '100%', 
                    height: 'auto', 
                    display: 'block', 
                    filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))',
                  }}
                />
              </Box>

              {/* FLOATING BOOKING CARD (Large Screens Only) */}
              <Box sx={{
                display: { xs: 'none', lg: 'block' },
                position: 'absolute',
                // FIX 3: Lift the card up so it's not aligned with the bottom edge
                bottom: 0, 
                // FIX 4: Anchor to right edge (Doctor is now pushed left, so no overlap)
                right: -100, 
                zIndex: 3
              }}>
                <BookingCard variant='floating'/>
              </Box>

            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* Trust Strip */}
      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: -2 }, mb: 4, position: 'relative', zIndex: 2 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {[
            { src: '/assets/images/PMKY-FINAL-LOGO-250-x-80-px-1.webp', alt: 'PM-JAY' },
            { src: '/assets/images/CGHS-FINAL-LOGO-250-x-80-px.webp', alt: 'CGHS' },
            { src: '/assets/images/NABH-150-x-100-px.webp', alt: 'NABH' },
          ].map((item, index) => (
            <Grid item xs={6} sm={3} key={index} sx={{ textAlign: 'center' }}>
              <Box sx={{ bgcolor: 'white', border: '1px solid', borderColor: 'divider', p: 1.5, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 70, transition: 'all 0.3s ease', boxShadow: 1, '&:hover': { borderColor: 'primary.main', transform: 'translateY(-3px)', boxShadow: 3 } }}>
                {item.src ? <Box component="img" src={item.src} alt={item.alt} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} /> : item.text}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* MOBILE STANDALONE CARD (Small Screens Only) */}
      <Container maxWidth="sm" sx={{ 
        display: { xs: 'block', lg: 'none' }, // <--- VISIBLE on xs/sm/md, HIDDEN on lg+
        pb: 4 
      }}>
        <BookingCard variant='standalone'/>
      </Container>

    </Box>
  );
};

export default HeroSection;
```

---

## File: src\components\sections\AboutSection.jsx

```jsx
import React from 'react';
import { Box, Container, Grid, Typography, Button, Stack, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const highlights = [
    '100% Success Rate Goal',
    'NABH Accredited',
    'Affordable Healthcare',
    '24/7 Emergency Services'
];

const AboutSection = () => {
    return (
        <Box
            id="about"
            sx={{
                py: { xs: 6, md: 10 },
                bgcolor: 'background.default',
                overflow: 'hidden'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">

                    {/* Image Column */}
                    <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
                        <Box
                            sx={{
                                position: 'relative',
                                borderRadius: 4,
                                overflow: 'hidden',
                                boxShadow: '0 20px 50px rgba(46, 125, 50, 0.2)',
                            }}
                        >
                            <Box
                                component="img"
                                src="/assets/images/hospitalfrontbuildingphoto.webp"
                                alt="The Hope Hospital Building"
                                sx={{
                                    width: '100%',
                                    height: { xs: 250, sm: 320, md: 400 },
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                            {/* Accent Border (Desktop Only) */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: -12,
                                    right: -12,
                                    width: '100%',
                                    height: '100%',
                                    border: '4px solid',
                                    borderColor: 'primary.main',
                                    borderRadius: 4,
                                    zIndex: -1,
                                    display: { xs: 'none', md: 'block' }
                                }}
                            />
                            {/* Decorative Circle */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: -15,
                                    left: -15,
                                    width: 80,
                                    height: 80,
                                    bgcolor: 'secondary.main',
                                    borderRadius: '50%',
                                    zIndex: -1,
                                    display: { xs: 'none', md: 'block' }
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Content Column */}
                    <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }}>
                        <Chip
                            label="About Us"
                            color="primary"
                            size="small"
                            sx={{ mb: 2, fontWeight: 600, letterSpacing: 1 }}
                        />

                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 700,
                                mb: 2,
                                lineHeight: 1.3,
                                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                            }}
                        >
                            The Hope Hospital — Best Multi Specialty Hospital in Greater Noida
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            paragraph
                            sx={{ lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}
                        >
                            Since its inception, The Hope Hospital has been at the forefront of pioneering initiatives,
                            setting new standards for comprehensive healthcare in Greater Noida. Our relentless pursuit
                            is to attain a 100% success rate across all our services.
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            paragraph
                            sx={{ lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}
                        >
                            In our ongoing dedication to accessible and affordable healthcare, The Hope Hospital stands
                            firm, recognizing the challenges posed by pandemics and rising healthcare costs.
                        </Typography>

                        {/* Highlights */}
                        <Stack
                            direction="row"
                            flexWrap="wrap"
                            gap={1}
                            sx={{ my: 3 }}
                        >
                            {highlights.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 0.5,
                                        bgcolor: '#E8F5E9',
                                        px: 1.5,
                                        py: 0.75,
                                        borderRadius: 2
                                    }}
                                >
                                    <CheckCircleOutlineIcon color="primary" sx={{ fontSize: '1rem' }} />
                                    <Typography variant="caption" fontWeight={600} color="primary.dark">
                                        {item}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>

                        {/* CTA Button */}
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                mt: 2,
                                px: 4,
                                py: 1.5,
                                borderRadius: 2,
                                fontSize: '1rem'
                            }}
                        >
                            Book An Appointment
                        </Button>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default AboutSection;

```

---

## File: src\components\sections\Doctors.jsx

```jsx
import React from 'react';
import { Box, Container, Grid, Card, CardContent, CardMedia, Typography, Button, Chip, Stack } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Data from homepageText.txt
const doctors = [
  {
    name: 'Dr. Vinoy Upadhyay',
    degrees: 'MBBS, MS (Ortho)',
    specialty: 'Sr. Orthopedic Surgeon',
    role: 'Chairman & Director',
    img: 'https://thehopehospital.org/wp-content/uploads/2024/09/download.png'
  },
  {
    name: 'Dr. Madhavi Rawat',
    degrees: 'MBBS, MD',
    specialty: 'Gynecologist',
    role: 'Senior Consultant',
    img: 'https://thehopehospital.org/wp-content/uploads/2024/09/hope-hospital-team.png'
  },
  {
    name: 'Dr. Rahul Mavi',
    degrees: 'MBBS, MD',
    specialty: 'General Physician',
    role: 'Consultant',
    img: '/assets/images/hopeteamDr_Rahul_Mavi.webp'
  },
  {
    name: 'Dr. Suddhatam Jain',
    degrees: 'MBBS, DNB',
    specialty: 'Laparoscopic Surgeon',
    role: 'Senior Surgeon',
    img: '/assets/images/hopeteam_dr-shuddhatam-jain-general-and-laparoscopic-surgery-in-noida.webp'
  },
  {
    name: 'Dr. Parag Agarwal',
    degrees: 'MBBS, MD',
    specialty: 'Sr. Physician',
    role: 'Internal Medicine',
    img: 'https://thehopehospital.org/wp-content/uploads/2024/09/dr._parag_agarwal-removebg-preview.png'
  },
  {
    name: 'Dr. Tarun Gupta',
    degrees: 'MBBS, MD',
    specialty: 'Neurosurgeon',
    role: 'Brain & Spine Expert',
    img: 'https://thehopehospital.org/wp-content/uploads/2024/09/tarun-gupta-300x300.jpg'
  },
  {
    name: 'Dr. Deepak Rathore',
    degrees: 'MBBS, MS, MCH',
    specialty: 'Plastic & Cardio Surgeon',
    role: 'Senior Surgeon',
    img: 'https://thehopehospital.org/wp-content/uploads/2024/09/Dr_Deepak-removebg-preview.png'
  },
  {
    name: 'Dr. Viviek Pathak',
    degrees: 'MBBS, MS (ENT)',
    specialty: 'ENT Surgeon',
    role: 'Senior Surgeon',
    img: 'https://thehopehospital.org/wp-content/uploads/2024/09/Dr_Vivek_Pathak-removebg-preview.png'
  },
];

const Doctors = () => {
  return (
    <Box id="doctors" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Our Medical Experts"
          subtitle="Meet The Team"
        />

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {doctors.map((doc, index) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={index} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
                    transform: 'translateY(-6px)',
                  }
                }}
              >
                {/* Doctor Image */}
                <Box
                  sx={{
                    position: 'relative',
                    bgcolor: 'primary.light',
                    pt: 2,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={doc.img}
                    alt={doc.name}
                    sx={{
                      width: { xs: 80, sm: 100, md: 110 },
                      height: { xs: 80, sm: 100, md: 110 },
                      borderRadius: '50%',
                      border: '4px solid white',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      objectFit: 'cover',
                      bgcolor: 'grey.100'
                    }}
                  />
                </Box>

                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: { xs: 1.5, sm: 2 } }}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.dark',
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      lineHeight: 1.3,
                      mb: 0.5
                    }}
                  >
                    {doc.name}
                  </Typography>

                  <Typography
                    variant="caption"
                    display="block"
                    sx={{ color: 'text.secondary', mb: 1, fontWeight: 500 }}
                  >
                    {doc.degrees}
                  </Typography>

                  <Chip
                    label={doc.specialty}
                    size="small"
                    sx={{
                      bgcolor: 'secondary.light',
                      color: 'primary.dark',
                      fontWeight: 600,
                      fontSize: { xs: '0.65rem', sm: '0.7rem' },
                      height: 'auto',
                      py: 0.5,
                      mb: 1.5
                    }}
                  />

                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    fullWidth
                    sx={{
                      fontSize: { xs: '0.7rem', sm: '0.75rem' },
                      py: { xs: 0.5, sm: 0.75 },
                      borderRadius: 2,
                    }}
                  >
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Stack direction="row" justifyContent="center" sx={{ mt: { xs: 4, md: 6 } }}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{ px: 4, borderRadius: 2 }}
          >
            View All Doctors
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Doctors;
```

---

## File: src\components\sections\Excellence.jsx

```jsx
import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FaceIcon from '@mui/icons-material/Face';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SectionTitle from '../common/SectionTitle';

const specialties = [
  { title: 'Orthopedics', icon: <HealthAndSafetyIcon fontSize="large" />, desc: 'Joint Replacements & Trauma' },
  { title: 'Obstetrics & Gynae', icon: <PregnantWomanIcon fontSize="large" />, desc: 'High-risk Pregnancy & IVF' },
  { title: 'Cardiology', icon: <MonitorHeartIcon fontSize="large" />, desc: 'Non-Invasive Cardiac Care' },
  { title: 'Pediatrics', icon: <ChildCareIcon fontSize="large" />, desc: 'Neonatal ICU (NICU) & Care' },
  { title: 'Neurology', icon: <PsychologyIcon fontSize="large" />, desc: 'Brain & Spine Surgeries' },
  { title: 'Laparoscopic Surgery', icon: <LocalHospitalIcon fontSize="large" />, desc: 'Minimally Invasive Surgery' },
  { title: 'Plastic Surgery', icon: <FaceIcon fontSize="large" />, desc: 'Cosmetic & Reconstructive' },
  { title: 'Dental Care', icon: <MedicalServicesIcon fontSize="large" />, desc: 'Implants & Root Canals' },
];

const Excellence = () => {
  return (
    <Box id="treatments" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Centers of Excellence"
          subtitle="Comprehensive Care"
        />

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {specialties.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} key={index} sx={{ display: 'flex' }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, sm: 3 },
                  textAlign: 'center',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                    borderColor: 'primary.main',
                    '& .icon-box': {
                      bgcolor: 'primary.main',
                      color: 'white',
                      transform: 'scale(1.1)',
                    }
                  }
                }}
              >
                <Box
                  className="icon-box"
                  sx={{
                    width: { xs: 50, sm: 60 },
                    height: { xs: 50, sm: 60 },
                    bgcolor: 'primary.light',
                    color: 'primary.dark',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: { xs: 1.5, sm: 2 },
                    transition: 'all 0.3s ease',
                    '& svg': {
                      fontSize: { xs: '1.5rem', sm: '1.75rem' }
                    }
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
                    lineHeight: 1.3
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}
                >
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Excellence;
```

---

## File: src\components\sections\ImageCarousel.jsx

```jsx
import React from 'react';
import { Box, Container, Typography, Chip } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const carouselImages = [
    { src: '/assets/images/heroscroll0.webp', alt: 'Hospital Facility 1' },
    { src: '/assets/images/heroscrool1.webp', alt: 'Hospital Facility 2' },
    { src: '/assets/images/heroscroll3.webp', alt: 'Hospital Facility 3' },
    { src: '/assets/images/heroscroll4.webp', alt: 'Hospital Facility 4' },
    { src: '/assets/images/heroscroll5.webp', alt: 'Hospital Facility 5' },
    { src: '/assets/images/heroscroll7.webp', alt: 'Hospital Facility 6' },
    { src: '/assets/images/heroscroll8.webp', alt: 'Hospital Facility 7' },
    { src: '/assets/images/heroscroll9.webp', alt: 'Hospital Facility 8' },
];

const ImageCarousel = () => {
    return (
        <Box
            id="facilities"
            sx={{
                py: { xs: 5, md: 7 },
                bgcolor: 'background.subtle',
                overflow: 'hidden'
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 4 } }}>
                    <Chip
                        label="Our Infrastructure"
                        color="secondary"
                        size="small"
                        sx={{ mb: 2, fontWeight: 600 }}
                    />
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            fontWeight: 700,
                            mb: 1,
                            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                        }}
                    >
                        Our World-Class Facilities
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ maxWidth: 600, mx: 'auto' }}
                    >
                        Experience state-of-the-art medical infrastructure designed for your comfort and care.
                    </Typography>
                </Box>
            </Container>

            {/* Full-width Swiper Carousel */}
            <Box sx={{
                '.swiper-pagination-bullet': {
                    bgcolor: 'primary.main',
                    opacity: 0.5,
                    width: 10,
                    height: 10,
                    transition: 'all 0.3s ease'
                },
                '.swiper-pagination-bullet-active': {
                    opacity: 1,
                    width: 24,
                    borderRadius: 5
                },
                '.swiper-button-next, .swiper-button-prev': {
                    color: 'white',
                    bgcolor: 'primary.main',
                    width: { xs: 36, md: 44 },
                    height: { xs: 36, md: 44 },
                    borderRadius: '50%',
                    '&::after': {
                        fontSize: { xs: '14px', md: '16px' },
                        fontWeight: 'bold'
                    },
                    '&:hover': {
                        bgcolor: 'primary.dark',
                    },
                    display: { xs: 'none', sm: 'flex' }
                }
            }}>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={16}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    breakpoints={{
                        480: { slidesPerView: 1.3, spaceBetween: 16 },
                        640: { slidesPerView: 1.5, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 24 },
                        1024: { slidesPerView: 2.5, spaceBetween: 28 },
                        1280: { slidesPerView: 3, spaceBetween: 32 },
                    }}
                    style={{ paddingBottom: '48px', paddingTop: '8px' }}
                >
                    {carouselImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    boxShadow: 3,
                                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: 6
                                    }
                                }}
                            >
                                <Box
                                    component="img"
                                    src={image.src}
                                    alt={image.alt}
                                    sx={{
                                        width: '100%',
                                        height: { xs: 200, sm: 240, md: 280 },
                                        objectFit: 'cover',
                                        display: 'block'
                                    }}
                                />
                                {/* Gradient Overlay */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '40%',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
                                    }}
                                />
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};

export default ImageCarousel;

```

---

## File: src\components\sections\Insurance.jsx

```jsx
import React from 'react';
import { Box, Container, Grid, Typography, Paper, Chip } from '@mui/material';

const insurancePartners = [
    { name: 'Star Health', logo: null },
    { name: 'SBI General', logo: null },
    { name: 'TATA AIG', logo: null },
    { name: 'Cigna TTK', logo: null },
    { name: 'Niva Bupa', logo: null },
    { name: 'ICICI Lombard', logo: null },
    { name: 'Bajaj Allianz', logo: null },
    { name: 'Max Bupa', logo: null },
];

const governmentSchemes = [
    { name: 'PM-JAY', logo: '/assets/images/PMKY-FINAL-LOGO-250-x-80-px-1.webp' },
    { name: 'CGHS', logo: '/assets/images/CGHS-FINAL-LOGO-250-x-80-px.webp' },
];

const Insurance = () => {
    return (
        <Box
            id="insurance"
            sx={{
                py: { xs: 6, md: 8 },
                bgcolor: 'background.subtle',
            }}
        >
            <Container maxWidth="lg">
                {/* Section Header */}
                <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}>
                    <Chip
                        label="Cashless Facility"
                        color="secondary"
                        size="small"
                        sx={{ mb: 2, fontWeight: 600, letterSpacing: 0.5 }}
                    />
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            fontWeight: 700,
                            mb: 1,
                            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                        }}
                    >
                        Insurance & TPA Partners
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ maxWidth: 600, mx: 'auto' }}
                    >
                        We accept all major insurance providers for a hassle-free, cashless healthcare experience.
                    </Typography>
                </Box>

                {/* Government Schemes */}
                <Box sx={{ mb: 5 }}>
                    <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="primary"
                        align="center"
                        sx={{ mb: 2 }}
                    >
                        Government Schemes Accepted
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        {governmentSchemes.map((scheme, index) => (
                            <Grid item xs={6} sm={4} md={3} key={index}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 2,
                                        height: 80,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '2px solid',
                                        borderColor: 'primary.light',
                                        borderRadius: 2,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: 'primary.main',
                                            boxShadow: 3,
                                            transform: 'translateY(-3px)',
                                        },
                                    }}
                                >
                                    {scheme.logo ? (
                                        <Box
                                            component="img"
                                            src={scheme.logo}
                                            alt={scheme.name}
                                            sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                        />
                                    ) : (
                                        <Typography variant="button" fontWeight="bold" color="primary">
                                            {scheme.name}
                                        </Typography>
                                    )}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Private Insurance Partners */}
                <Box>
                    <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="text.secondary"
                        align="center"
                        sx={{ mb: 2 }}
                    >
                        Private Insurance Partners
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        {insurancePartners.map((partner, index) => (
                            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 2,
                                        height: 70,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        borderRadius: 2,
                                        bgcolor: 'white',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: 'secondary.main',
                                            boxShadow: 2,
                                        },
                                    }}
                                >
                                    {partner.logo ? (
                                        <Box
                                            component="img"
                                            src={partner.logo}
                                            alt={partner.name}
                                            sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                        />
                                    ) : (
                                        <Typography
                                            variant="caption"
                                            fontWeight="bold"
                                            color="grey.600"
                                            sx={{ textAlign: 'center', letterSpacing: 0.5 }}
                                        >
                                            {partner.name}
                                        </Typography>
                                    )}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Note */}
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Typography variant="body2" color="text.secondary">
                        All leading TPAs and more accepted.{' '}
                        <Box component="span" fontWeight="bold" color="primary.main">
                            Contact us
                        </Box>{' '}
                        for specific queries.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Insurance;

```

---

## File: src\components\sections\Stats.jsx

```jsx
import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HealingIcon from '@mui/icons-material/Healing';
import GroupsIcon from '@mui/icons-material/Groups';

const statsData = [
  { number: 10430, suffix: '+', label: 'Happy Patients', icon: <EmojiPeopleIcon /> },
  { number: 5500, suffix: '+', label: 'Successful Surgeries', icon: <LocalHospitalIcon /> },
  { number: 245, suffix: '+', label: 'Joint Replacements', icon: <HealingIcon /> },
  { number: 15, suffix: '+', label: 'Specialist Doctors', icon: <GroupsIcon /> },
];

// Custom hook for counting animation
const useCountUp = (end, duration = 2000, startCounting) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out effect
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, startCounting]);

  return count;
};

const StatItem = ({ stat, startCounting }) => {
  const count = useCountUp(stat.number, 2000, startCounting);

  return (
    <Grid item xs={6} md={3} sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 1,
          '& svg': {
            fontSize: { xs: '2rem', md: '2.5rem' },
            opacity: 0.8
          }
        }}
      >
        {stat.icon}
      </Box>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          fontSize: { xs: '1.75rem', sm: '2rem', md: '2.75rem' },
          color: 'white',
          lineHeight: 1.2
        }}
      >
        {count.toLocaleString()}{stat.suffix}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 500,
          opacity: 0.9,
          fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.95rem' }
        }}
      >
        {stat.label}
      </Typography>
    </Grid>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: { xs: 5, md: 7 }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {statsData.map((stat, index) => (
            <StatItem key={index} stat={stat} startCounting={isVisible} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;
```

---

## File: src\components\sections\Testimonials.jsx

```jsx
import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Tabs,
  Tab,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SectionTitle from '../common/SectionTitle';
import VideoSection from '../common/VideoSection';

// 1. VIDEO DATA (IDs extracted from your links)
const videoTestimonials = [
  { id: 'mBkOSzYvEVg', title: 'Patient Success Story 1' },
  { id: 'rDzO0jRnFSE', title: 'Patient Success Story 2' },
  { id: 'fdywafPYFKk', title: 'Patient Success Story 3' },
  { id: 'tVTgRqevBsk', title: 'Patient Success Story 4' },
  { id: 'bj0EeDYGx-s', title: 'Patient Success Story 5' },
  { id: 'iJbmqk6svWg', title: 'Patient Success Story 6' },
];

// 2. IMAGE STORY DATA (Matched with your images & text)
const photoStories = [
  {
    title: "Walking Tall After 10 Years",
    patient: "Jitendra Kumar",
    desc: "After suffering for a decade, Jitendra Kumar is finally able to walk again thanks to Dr. Vinoy Upadhyay's expertise. A true new life!",
    image: "/assets/images/jitenderkumarPaitinetwithsuccessfullkneeoperation.webp",
    category: "Orthopedics"
  },
  {
    title: "Gift of Motherhood",
    patient: "Happy Mother",
    desc: "Experience the joy of normal delivery. 'The care at Hope Hospital made my journey to motherhood safe and memorable.'",
    image: "/assets/images/patienttestimonialSuccessfuldilivery.webp",
    category: "Gynecology"
  },
  {
    title: "Beating Critical Dengue",
    patient: "Recovered Patient",
    desc: "Recovered from a complex case of Dengue with dropped platelets. Dr. Rahul Mavi and the team provided 24/7 monitoring.",
    image: "/assets/images/patientestimoainaldenguesurviver.webp",
    category: "General Medicine"
  },
  {
    title: "Critical Appendix Surgery",
    patient: "Emergency Patient",
    desc: "Ruptured Appendix operation performed successfully. 'The emergency response was instant, saving my life.'",
    image: "/assets/images/morepatienttestimonial.webp",
    category: "Surgery"
  }
];

const Testimonials = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.subtle' }} id="testimonials">
      <Container maxWidth="lg">
        <SectionTitle
          title="Voices of Hope"
          subtitle="Patient Testimonials"
        />

        {/* Tabs to toggle views */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            centered
            indicatorColor="primary"
            textColor="primary"
            sx={{
              bgcolor: 'white',
              borderRadius: 3,
              boxShadow: 1,
              px: 1,
              '& .MuiTab-root': {
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 600,
                minWidth: { xs: 120, sm: 150 },
                py: 1.5,
              }
            }}
          >
            <Tab label="Video Stories" />
            <Tab label="Patient Reviews" />
          </Tabs>
        </Box>

        {/* CONTENT 1: VIDEO GRID - Using VideoSection component */}
        {tabValue === 0 && (
          <Box sx={{ mx: { xs: -2, md: 0 } }}>
            <VideoSection
              videos={videoTestimonials}
              bgColor="transparent"
            />
          </Box>
        )}

        {/* CONTENT 2: PHOTO STORIES */}
        {tabValue === 1 && (
          <Grid container spacing={{ xs: 2, md: 4 }}>
            {photoStories.map((story, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    height: '100%',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: 6,
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: { xs: '100%', sm: 180, md: 200 },
                      height: { xs: 180, sm: '100%' },
                      objectFit: 'cover'
                    }}
                    image={story.image}
                    alt={story.title}
                  />
                  <CardContent sx={{ flex: 1, p: { xs: 2, sm: 3 } }}>
                    <Box mb={1}>
                      <FormatQuoteIcon color="secondary" sx={{ fontSize: 32, transform: 'rotate(180deg)' }} />
                    </Box>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      fontWeight="bold"
                      gutterBottom
                      sx={{ fontSize: { xs: '0.95rem', sm: '1.05rem' } }}
                    >
                      {story.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                      sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' }, lineHeight: 1.6 }}
                    >
                      {story.desc}
                    </Typography>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                      <Typography variant="caption" color="primary.main" fontWeight="bold">
                        - {story.patient}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          bgcolor: 'secondary.light',
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                          fontWeight: 600
                        }}
                      >
                        {story.category}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Testimonials;
```

---

## File: src\components\sections\WhyChooseUs.jsx

```jsx
import { Box, Container, Grid, Typography, Stack, Button, Chip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Features based on text file
const features = [
  { title: 'NABH Accredited', desc: 'Highest standard of safety and patient care protocols.' },
  { title: 'Affordable Care', desc: 'Committed to providing high-quality healthcare that is accessible to all.' },
  { title: 'Cashless Facility', desc: 'Tie-ups with all major TPAs and Insurance companies.' },
  { title: '24/7 Emergency', desc: 'Round-the-clock trauma, pharmacy, and ambulance services.' },
  { title: 'Ayushman Bharat', desc: 'Empanelled with PM-JAY and CGHS schemes.' },
  { title: 'Modern OT', desc: 'State-of-the-art modular operation theaters for infection control.' },
];

const WhyChooseUs = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">

        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left: Text Content */}
          <Grid item xs={12} md={6}>
            <Chip
              label="Why Us"
              color="secondary"
              size="small"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
              }}
            >
              Why Choose Hope Hospital?
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary" sx={{ mb: 4 }}>
              Since our inception, The Hope Hospital has been at the forefront of pioneering initiatives in Greater Noida.
              Our mission is to provide healthcare accessibility for all. Whether it's a complex knee surgery or
              general physician consultation, we strive for a 100% success rate.
            </Typography>

            <Grid container spacing={2}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="flex-start"
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      transition: 'all 0.2s',
                      '&:hover': { bgcolor: 'background.subtle' }
                    }}
                  >
                    <CheckCircleIcon color="secondary" sx={{ mt: 0.3, flexShrink: 0 }} />
                    <Box>
                      <Typography variant="subtitle2" fontWeight="bold">
                        {feature.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {feature.desc}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>

            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ mt: 4, borderRadius: 2, px: 3 }}
            >
              Read Chairman's Message
            </Button>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default WhyChooseUs;
```

---

## File: src\main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

```

---

## File: src\theme\theme.js

```js
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Colors extracted from the Hope Hospital Logo
const brandColors = {
  green: '#2E7D32',      // Deep Forest Green (Primary Brand Color)
  yellow: '#FBC02D',     // Mustard/Amber Yellow (Secondary Brand Color)
  darkGreen: '#1B5E20',  // Darker Green for hover states/Footer
  lightGreen: '#E8F5E9', // Very light green for backgrounds
  red: '#D32F2F',        // Emergency Red
  textMain: '#1A2027',   // Dark Grey for readability
  white: '#FFFFFF',
};

let theme = createTheme({
  palette: {
    primary: {
      main: brandColors.green,
      light: '#4CAF50',
      dark: brandColors.darkGreen,
      contrastText: brandColors.white,
    },
    secondary: {
      main: brandColors.yellow,
      light: '#FFF176',
      dark: '#F57F17',
      contrastText: brandColors.darkGreen, // Yellow bg needs dark text for contrast
    },
    error: {
      main: brandColors.red,
    },
    warning: {
      main: '#ED6C02', // Orange for specific alerts
    },
    background: {
      default: '#FAFAFA',
      paper: brandColors.white,
      subtle: brandColors.lightGreen, // Custom background for alternating sections
    },
    text: {
      primary: brandColors.textMain,
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      color: brandColors.darkGreen, // Headings in Dark Green look professional
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      color: brandColors.darkGreen,
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      color: brandColors.green,
    },
    h4: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
      letterSpacing: 0.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 24px',
          boxShadow: 'none',
        },
        containedPrimary: {
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(46, 125, 50, 0.4)', // Green glow
          },
        },
        containedSecondary: {
          color: brandColors.darkGreen, // Ensure text is readable on Yellow buttons
          fontWeight: 700,
          '&:hover': {
            backgroundColor: '#F9A825',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 4px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 4px 20px rgba(0,0,0,0.06)',
          transition: 'transform 0.3s ease-in-out',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
```

---

## File: vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

---
