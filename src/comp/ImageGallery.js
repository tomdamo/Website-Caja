import React, { useState, useEffect } from "react";
import "./ImagesGallery.css";

function ImageGallery({ images }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [loadedImages, setLoadedImages] = useState([]);

  const handleClick = (image) => {
    setIsFullScreen(true);
    setCurrentImage(image);
  };

  useEffect(() => {
    setLoadedImages(images.map(() => false));
  }, [images]);

  const handleImageLoad = (index) => {
    setLoadedImages((prevLoadedImages) => {
      const newLoadedImages = [...prevLoadedImages];
      newLoadedImages[index] = true;
      return newLoadedImages;
    });
  };

  return (
    <div className="photo-grid-container">
      <div className="photo-grid">
        {images.map((image, index) => (
          <div
            className={`card ${loadedImages[index] ? "loaded" : ""}`}
            key={index}
          >
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => handleClick(image.src)}
              onLoad={() => handleImageLoad(index)}
            />
            <figcaption>{image.caption}</figcaption>
          </div>
        ))}
      </div>
      {isFullScreen && (
        <div
          className="fullscreen-image"
          onClick={() => setIsFullScreen(false)}
        >
          <img src={currentImage} alt={currentImage} />
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
