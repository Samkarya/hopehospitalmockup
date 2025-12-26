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