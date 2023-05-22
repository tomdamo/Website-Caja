import React from 'react'
import ImageGallery from './ImageGallery';
import {images2022} from './images';

// const images2022 = [
//   { src: './img/1.jpg', alt: 'Image 1', caption: 'Caption 1' },
//   { src: 'image2.jpg', alt: 'Image 2', caption: 'Caption 2' },
//   { src: 'image3.jpg', alt: 'Image 3', caption: 'Caption 3' },
// ];

export function TweeTwintig() {
  return (
    <>
    <h1>2022 </h1>
  <ImageGallery images={images2022} />
    </>
  )
}

