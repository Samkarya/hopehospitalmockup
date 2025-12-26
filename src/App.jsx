import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme/theme';

// Layout & Common
import Navbar from './components/common/Header';
import Footer from './components/common/Footer';
import EmergencyFAB from './components/common/EmergencyFAB';

// Sections
import HeroSection from './components/hero/HeroSection';
import Excellence from './components/sections/Excellence';
import Doctors from './components/sections/Doctors';
import Stats from './components/sections/Stats';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Testimonials from './components/sections/Testimonials';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        <Navbar />
        
        <main style={{ flex: 1 }}>
          <HeroSection />
          
          <Excellence />
          
          <Stats /> {/* Breaks up the white space */}
          
          <Doctors />
          <Testimonials />
          <WhyChooseUs />
          
          {/* Add Testimonials Section Here in future */}
        </main>

        <Footer />
        
        <EmergencyFAB />
        
      </Box>
    </ThemeProvider>
  );
}

export default App;