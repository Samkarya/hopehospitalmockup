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

                    {/* Image Column (Left on Desktop, Top on Mobile) */}
                    <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 1 } }}>
                        <Box
                            sx={{
                                position: 'relative',
                                borderRadius: 4,
                                overflow: 'hidden',
                                boxShadow: '0 20px 50px rgba(46, 125, 50, 0.2)',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: -20,
                                    left: -20,
                                    width: 100,
                                    height: 100,
                                    bgcolor: 'secondary.main',
                                    borderRadius: '50%',
                                    zIndex: 0,
                                    display: { xs: 'none', md: 'block' }
                                }
                            }}
                        >
                            <Box
                                component="img"
                                src="/assets/images/hospitalfrontbuildingphoto.webp"
                                alt="The Hope Hospital Building"
                                sx={{
                                    width: '100%',
                                    height: { xs: 280, sm: 350, md: 420 },
                                    objectFit: 'cover',
                                    display: 'block',
                                    position: 'relative',
                                    zIndex: 1
                                }}
                            />
                            {/* Accent Border */}
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
                                    zIndex: 0,
                                    display: { xs: 'none', md: 'block' }
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Content Column (Right on Desktop, Bottom on Mobile) */}
                    <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 2 } }}>
                        <Chip
                            label="About Us"
                            color="primary"
                            size="small"
                            sx={{ mb: 2, fontWeight: 600, letterSpacing: 1 }}
                        />

                        <Typography
                            variant="h3"
                            component="h2"
                            sx={{
                                fontWeight: 700,
                                mb: 2,
                                lineHeight: 1.3,
                                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' }
                            }}
                        >
                            The Hope Hospital — Best Multi Specialty Hospital in Greater Noida
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                        >
                            Since its inception, The Hope Hospital has been at the forefront of pioneering initiatives,
                            setting new standards for comprehensive healthcare in Greater Noida. Our relentless pursuit
                            is to attain a 100% success rate across all our services, spanning consultations, diagnostics,
                            pharmacy, inpatient care (including surgeries), and post-treatment support.
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                        >
                            In our ongoing dedication to accessible and affordable healthcare, The Hope Hospital stands
                            firm, recognizing the challenges posed by pandemics and rising healthcare costs. Our unwavering
                            commitment to providing you with the utmost excellence establishes us as the best choice for
                            your medical needs.
                        </Typography>

                        {/* Highlights */}
                        <Stack
                            direction="row"
                            flexWrap="wrap"
                            gap={1.5}
                            sx={{ my: 3 }}
                        >
                            {highlights.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 0.5,
                                        bgcolor: 'background.subtle',
                                        px: 1.5,
                                        py: 0.75,
                                        borderRadius: 2
                                    }}
                                >
                                    <CheckCircleOutlineIcon color="primary" fontSize="small" />
                                    <Typography variant="body2" fontWeight={600}>
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
