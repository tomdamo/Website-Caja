import React from "react";
import ImageGallery from "./ImageGallery";
import { images2023 } from "./images";

export function DrieTwintig() {
  return (
    <>
      <h1 className="Title">2023 </h1>
      <ImageGallery images={images2023} />
    </>
  );
}
