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
    { name: 'PM-JAY', logo: 'assets/images/PMKY-FINAL-LOGO-250-x-80-px-1.webp' },
    { name: 'CGHS', logo: 'assets/images/CGHS-FINAL-LOGO-250-x-80-px.webp' },
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
