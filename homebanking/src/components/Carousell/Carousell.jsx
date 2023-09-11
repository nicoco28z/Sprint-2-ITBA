import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    {
        url: '/imagen1.png',
        alt: 'Imagen 1',
        width: '600px'
    },
    {
        url: '/imagen2.png',
        alt: 'Imagen 2',
        width: '600px'
    },
    {
        url: '/imagen3.png',
        alt: 'Imagen 3',
        width: '600px'
    },
    {
        url: '/bancopordentro.jpg',
        alt: 'bancopordentro',
        width: '600px'
    },
    {
        url: '/reunionadministrativa.jpg',
        alt: 'reunionadministrativa',
        width: '600px'
    }
];

const MyCarousel = () => {
return (
    <Carousel>
    {images.map((image, index) => (
        <div key={index}>
        <img src={image.url} alt={image.alt} style={{width: image.width}}/>
        </div>
    ))}
    </Carousel>
);
};

export default MyCarousel;
