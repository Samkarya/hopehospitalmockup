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