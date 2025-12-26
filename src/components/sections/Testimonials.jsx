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
  Button,
  Dialog,
  IconButton
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SectionTitle from '../common/SectionTitle';

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
    image: "/assets/images/jitenderkumarPaitinetwithsuccessfullkneeoperation.webp", // Man in Yellow
    category: "Orthopedics"
  },
  {
    title: "Gift of Motherhood",
    patient: "Happy Mother",
    desc: "Experience the joy of normal delivery. 'The care at Hope Hospital made my journey to motherhood safe and memorable.'",
    image: "/assets/images/patienttestimonialSuccessfuldilivery.webp", // Mom & Baby
    category: "Gynecology"
  },
  {
    title: "Beating Critical Dengue",
    patient: "Recovered Patient",
    desc: "Recovered from a complex case of Dengue with dropped platelets. Dr. Rahul Mavi and the team provided 24/7 monitoring.",
    image: "/assets/images/patientestimoainaldenguesurviver.webp", // Doctor + Report
    category: "General Medicine"
  },
  {
    title: "Critical Appendix Surgery",
    patient: "Emergency Patient",
    desc: "Ruptured Appendix operation performed successfully. 'The emergency response was instant, saving my life.'",
    image: "/assets/images/morepatienttestimonial.webp", //man standing
    category: "Surgery"
  }
];

const Testimonials = () => {
  const [tabValue, setTabValue] = useState(0); // 0 = Videos, 1 = Stories
  const [openVideo, setOpenVideo] = useState(null); // Stores ID of video to play

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'background.subtle' }} id="testimonials">
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
              '& .MuiTab-root': { fontSize: '1.1rem', fontWeight: 600 } 
            }}
          >
            <Tab label="Video Stories" />
            <Tab label="Patient Reviews" />
          </Tabs>
        </Box>

        {/* CONTENT 1: VIDEO GRID */}
        {tabValue === 0 && (
          <Grid container spacing={3}>
            {videoTestimonials.map((video, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  sx={{ 
                    position: 'relative', 
                    cursor: 'pointer', 
                    borderRadius: 3,
                    overflow: 'hidden',
                    '&:hover .play-icon': { transform: 'scale(1.1)' }
                  }}
                  onClick={() => setOpenVideo(video.id)}
                >
                  {/* YouTube Thumbnail */}
                  <CardMedia
                    component="img"
                    image={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    sx={{ height: 220, objectFit: 'cover' }}
                  />
                  
                  {/* Overlay */}
                  <Box sx={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    bgcolor: 'rgba(0,0,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: '0.3s'
                  }}>
                    <PlayCircleOutlineIcon 
                      className="play-icon"
                      sx={{ fontSize: 60, color: 'white', transition: '0.3s' }} 
                    />
                  </Box>
                </Card>
                <Typography variant="subtitle2" align="center" sx={{ mt: 1, fontWeight: 600 }}>
                   Watch Story
                </Typography>
              </Grid>
            ))}
          </Grid>
        )}

        {/* CONTENT 2: PHOTO STORIES */}
        {tabValue === 1 && (
          <Grid container spacing={4}>
            {photoStories.map((story, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, height: '100%' }}>
                  <CardMedia
                    component="img"
                    sx={{ width: { xs: '100%', sm: 200 }, height: { xs: 200, sm: 'auto' } }}
                    image={story.image}
                    alt={story.title}
                  />
                  <CardContent sx={{ flex: 1, p: 3 }}>
                    <Box mb={1}>
                       <FormatQuoteIcon color="secondary" sx={{ fontSize: 40, transform: 'rotate(180deg)' }} />
                    </Box>
                    <Typography variant="h6" component="div" fontWeight="bold" gutterBottom>
                      {story.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {story.desc}
                    </Typography>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                        <Typography variant="subtitle2" color="primary.main" fontWeight="bold">
                            - {story.patient}
                        </Typography>
                        <Typography variant="caption" sx={{ bgcolor: 'secondary.light', px: 1, py: 0.5, borderRadius: 1 }}>
                            {story.category}
                        </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Video Lightbox Modal */}
        <Dialog 
            open={Boolean(openVideo)} 
            onClose={() => setOpenVideo(null)}
            maxWidth="md"
            fullWidth
        >
            <Box sx={{ position: 'relative', pt: '56.25%', bgcolor: 'black' }}>
                <IconButton 
                    onClick={() => setOpenVideo(null)}
                    sx={{ position: 'absolute', top: 5, right: 5, color: 'white', zIndex: 10 }}
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
                    ></iframe>
                )}
            </Box>
        </Dialog>

      </Container>
    </Box>
  );
};

export default Testimonials;