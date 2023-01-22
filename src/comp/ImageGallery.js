import React, { useState } from 'react';
import {images} from './images';
import './ImagesGallery.css'
function ImageGallery() {
    const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  
  const handleClick = (image) => {
    setIsFullScreen(true);
    setCurrentImage(image);
  }
  return (
      //ZONDER KLIK
//     <div className='photo-grid'>
//       {Object.keys(images).filter(i => i.endsWith("caption") === false).map((image) => {
//         return (
//           <div className='card' key={image}>
//             <img src={images[image]} alt={image} />
//             <figcaption>{images[image + 'caption']}</figcaption>
//           </div>
//         );
//       })}
//     </div>

    //MET KLIK MAAR GEEN MODAL
<div className='photo-grid'>
      {Object.keys(images).filter(i => i.endsWith("caption") === false).map((image) => {
        return (
          <div className='card' key={image}>
            <img src={images[image]} alt={image} onClick={() => handleClick(images[image])} />
            <figcaption>{images[image + 'caption']}</figcaption>
          </div>
        );
      })}
      {isFullScreen && 
        <div className="fullscreen-image">
          <img src={currentImage} alt={currentImage} onClick={() => setIsFullScreen(false)} />
        </div>
      }
    </div>

    //MODAL
  );
}

export default ImageGallery;