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