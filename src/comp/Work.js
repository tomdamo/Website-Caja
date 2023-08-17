import React from "react";
import ImageGallery from "./ImageGallery";
import { images2023 } from "./images";

export function Work() {
  return (
    <>
      <ImageGallery images={images2023} />
    </>
  );
}
