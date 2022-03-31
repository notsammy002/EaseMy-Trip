import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from "../Home/Card"
import  "./crousel.css"
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1"><Card/></div>,
    <div className="item" data-value="2"><Card/></div>,
    <div className="item" data-value="3"><Card/></div>,
    <div className="item" data-value="4"><Card/></div>,
    <div className="item" data-value="5"><Card/></div>,
];

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);
export default Carousel