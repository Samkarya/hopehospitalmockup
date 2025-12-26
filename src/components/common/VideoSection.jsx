import React, { useState } from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
    CardMedia,
    Dialog,
    IconButton,
    Chip
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

/**
 * Reusable VideoSection Component
 * 
 * @param {string} title - Section title
 * @param {string} subtitle - Section subtitle/description
 * @param {string} chipLabel - Optional chip label (e.g., "Testimonials")
 * @param {Array} videos - Array of video objects { id: 'youtubeId', title: 'Video Title' }
 * @param {string} bgColor - Background color ('default', 'subtle', or custom)
 */
const VideoSection = ({
    title,
    subtitle,
    chipLabel,
    videos = [],
    bgColor = 'background.default'
}) => {
    const [openVideo, setOpenVideo] = useState(null);

    return (
        <Box
            sx={{
                py: { xs: 6, md: 8 },
                bgcolor: bgColor,
                overflow: 'hidden'
            }}
        >
            <Container maxWidth="lg">
                {/* Section Header */}
                <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}>
                    {chipLabel && (
                        <Chip
                            label={chipLabel}
                            color="secondary"
                            size="small"
                            sx={{ mb: 2, fontWeight: 600, letterSpacing: 0.5 }}
                        />
                    )}
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            fontWeight: 700,
                            mb: 1,
                            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                        }}
                    >
                        {title}
                    </Typography>
                    {subtitle && (
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ maxWidth: 600, mx: 'auto' }}
                        >
                            {subtitle}
                        </Typography>
                    )}
                </Box>

                {/* Video Grid */}
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    {videos.map((video, index) => (
                        <Grid item xs={6} sm={4} md={4} key={index}>
                            <Card
                                sx={{
                                    position: 'relative',
                                    cursor: 'pointer',
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-6px)',
                                        boxShadow: 6,
                                        '& .play-icon': {
                                            transform: 'scale(1.15)',
                                            color: 'secondary.main'
                                        },
                                        '& .overlay': {
                                            bgcolor: 'rgba(0,0,0,0.4)'
                                        }
                                    }
                                }}
                                onClick={() => setOpenVideo(video.id)}
                            >
                                {/* YouTube Thumbnail */}
                                <CardMedia
                                    component="img"
                                    image={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                    alt={video.title || 'Video'}
                                    sx={{
                                        height: { xs: 120, sm: 160, md: 200 },
                                        objectFit: 'cover'
                                    }}
                                />

                                {/* Overlay */}
                                <Box
                                    className="overlay"
                                    sx={{
                                        position: 'absolute',
                                        top: 0, left: 0, width: '100%', height: '100%',
                                        bgcolor: 'rgba(0,0,0,0.3)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <PlayCircleOutlineIcon
                                        className="play-icon"
                                        sx={{
                                            fontSize: { xs: 40, sm: 50, md: 60 },
                                            color: 'white',
                                            transition: 'all 0.3s ease',
                                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                                        }}
                                    />
                                </Box>
                            </Card>
                            {video.title && (
                                <Typography
                                    variant="caption"
                                    align="center"
                                    display="block"
                                    sx={{
                                        mt: 1,
                                        fontWeight: 500,
                                        color: 'text.secondary',
                                        fontSize: { xs: '0.7rem', sm: '0.75rem' }
                                    }}
                                >
                                    {video.title}
                                </Typography>
                            )}
                        </Grid>
                    ))}
                </Grid>

                {/* Video Lightbox Modal */}
                <Dialog
                    open={Boolean(openVideo)}
                    onClose={() => setOpenVideo(null)}
                    maxWidth="md"
                    fullWidth
                    slotProps={{
                        backdrop: {
                            sx: { bgcolor: 'rgba(0,0,0,0.85)' }
                        }
                    }}
                >
                    <Box sx={{ position: 'relative', pt: '56.25%', bgcolor: 'black' }}>
                        <IconButton
                            onClick={() => setOpenVideo(null)}
                            sx={{
                                position: 'absolute',
                                top: -48,
                                right: 0,
                                color: 'white',
                                zIndex: 10,
                                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                            }}
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
                            />
                        )}
                    </Box>
                </Dialog>
            </Container>
        </Box>
    );
};

export default VideoSection;
