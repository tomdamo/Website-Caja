import React, { useState } from "react";
import "./ImagesGallery.css";

function ImageGallery({ images }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [showText, setShowText] = useState(false);

  const handleClick = (image) => {
    setIsFullScreen(true);
    setCurrentImage(image);
    setShowText(true);
  };

  return (
    <div className="photo-grid-container">
      <div className="photo-grid">
        {images.map((image, index) => (
          <div className="card" key={index}>
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => handleClick(image.src)}
            />
          </div>
        ))}
      </div>
      {isFullScreen && (
        <div
          className="fullscreen-image"
          onClick={() => {
            setIsFullScreen(false)
            setShowText(false)
          }}
        >
          <img src={currentImage} alt={currentImage} />
          {showText && <figcaption>{images.find(img => img.src === currentImage)?.caption}</figcaption>}
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
