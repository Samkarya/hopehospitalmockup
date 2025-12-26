import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const carouselImages = [
    { src: '/assets/images/heroscroll0.webp', alt: 'Hospital Facility 1' },
    { src: '/assets/images/heroscrool1.webp', alt: 'Hospital Facility 2' },
    { src: '/assets/images/heroscroll3.webp', alt: 'Hospital Facility 3' },
    { src: '/assets/images/heroscroll4.webp', alt: 'Hospital Facility 4' },
    { src: '/assets/images/heroscroll5.webp', alt: 'Hospital Facility 5' },
    { src: '/assets/images/heroscroll7.webp', alt: 'Hospital Facility 6' },
    { src: '/assets/images/heroscroll8.webp', alt: 'Hospital Facility 7' },
    { src: '/assets/images/heroscroll9.webp', alt: 'Hospital Facility 8' },
];

const ImageCarousel = () => {
    return (
        <Box
            id="facilities"
            sx={{
                py: { xs: 4, md: 6 },
                bgcolor: 'background.subtle',
                overflow: 'hidden'
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 700, mb: 1 }}
                >
                    Our World-Class Facilities
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}
                >
                    Experience state-of-the-art medical infrastructure designed for your comfort and care.
                </Typography>
            </Container>

            {/* Full-width Swiper Carousel */}
            <Box sx={{
                '.swiper-pagination-bullet': {
                    bgcolor: 'primary.main',
                    opacity: 0.5,
                    width: 10,
                    height: 10,
                    transition: 'all 0.3s ease'
                },
                '.swiper-pagination-bullet-active': {
                    opacity: 1,
                    width: 24,
                    borderRadius: 5
                },
                '.swiper-button-next, .swiper-button-prev': {
                    color: 'primary.main',
                    bgcolor: 'rgba(255,255,255,0.8)',
                    width: { xs: 36, md: 48 },
                    height: { xs: 36, md: 48 },
                    borderRadius: '50%',
                    '&::after': {
                        fontSize: { xs: '16px', md: '20px' },
                        fontWeight: 'bold'
                    },
                    '&:hover': {
                        bgcolor: 'white',
                        boxShadow: 3
                    },
                    display: { xs: 'none', sm: 'flex' }
                }
            }}>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={16}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    breakpoints={{
                        640: { slidesPerView: 1.5, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 24 },
                        1024: { slidesPerView: 2.5, spaceBetween: 30 },
                        1280: { slidesPerView: 3, spaceBetween: 32 },
                    }}
                    style={{ paddingBottom: '48px' }}
                >
                    {carouselImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    boxShadow: 3,
                                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                                    '&:hover': {
                                        transform: 'scale(1.03)',
                                        boxShadow: 6
                                    }
                                }}
                            >
                                <Box
                                    component="img"
                                    src={image.src}
                                    alt={image.alt}
                                    sx={{
                                        width: '100%',
                                        height: { xs: 220, sm: 260, md: 300 },
                                        objectFit: 'cover',
                                        display: 'block'
                                    }}
                                />
                                {/* Gradient Overlay */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '40%',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                                    }}
                                />
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};

export default ImageCarousel;
