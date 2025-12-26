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
