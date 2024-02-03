import React, { useState, useEffect } from "react";
import Loader from "./PreLoader";
import errorImage from "@/public/image-error.png";

// Assuming fetchOgImage is a function that fetches the image URL and returns a promise
import { fetchOgImage } from "@/src/utils/fetchOgImage";

const ImageLoadingWrapper = ({ techItem, className }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchOgImage(techItem.liveLink)
      .then((url) => {
        setImageUrl(url);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [techItem.liveLink]);

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <img src={errorImage} alt="Error loading image" className={className} />
    );

  return (
    <img
      src={imageUrl}
      alt={`Screenshot of ${techItem.name}`}
      className={className}
    />
  );
};

export default ImageLoadingWrapper;
