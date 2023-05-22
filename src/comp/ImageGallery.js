import React, { useState } from 'react';
import './ImagesGallery.css'

function ImageGallery({ images }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleClick = (image) => {
    setIsFullScreen(true);
    setCurrentImage(image);
  };


  return (
    <div className="photo-grid-container"> 
      <div className="photo-grid"> 
        {images.map((image, index) => (
          <div className="card" key={index}>
            <img src={image.src} alt={image.alt} onClick={() => handleClick(image.src)} />
            <figcaption>{image.caption}</figcaption>
          </div>
        ))}
      </div>
      {isFullScreen && (
        <div className="fullscreen-image"onClick={() => setIsFullScreen(false)}>
          <img src={currentImage} alt={currentImage}/>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;