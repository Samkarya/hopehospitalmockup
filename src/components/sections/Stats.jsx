import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HealingIcon from '@mui/icons-material/Healing';
import GroupsIcon from '@mui/icons-material/Groups';

const statsData = [
  { number: '10,430+', label: 'Happy Patients', icon: <EmojiPeopleIcon fontSize="large" /> },
  { number: '5,500+', label: 'Successful Surgeries', icon: <LocalHospitalIcon fontSize="large" /> },
  { number: '245+', label: 'Successful Joint Replacements', icon: <HealingIcon fontSize="large" /> },
  { number: '15+', label: 'Specialist Doctors', icon: <GroupsIcon fontSize="large" /> },
];

const Stats = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {statsData.map((stat, index) => (
            <Grid item xs={6} md={3} key={index} sx={{ textAlign: 'center' }}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  mb: 1, 
                  opacity: 0.8 
                }}
              >
                {stat.icon}
              </Box>
              <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                {stat.number}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 500, opacity: 0.9 }}>
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;