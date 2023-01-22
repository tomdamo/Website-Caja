import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageGallery from './ImageGallery';

const images = [
  { src: './img/1.jpeg', alt: 'Image 1', caption: 'Caption 1' },
  { src: 'image2.jpg', alt: 'Image 2', caption: 'Caption 2' },
  { src: 'image3.jpg', alt: 'Image 3', caption: 'Caption 3' },
];

export function TweeTwintig() {
  return (
    <>
  <ImageGallery images={images} />
    </>
  )
}

