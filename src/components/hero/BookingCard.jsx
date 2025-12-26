import React from 'react';
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
