import React, { useState, useEffect } from "react";
import Loader from "./PreLoader";
import errorImage from "@/public/image-error.png";

// Assuming fetchOgImage is a function that fetches the image URL and returns a promise
import { fetchOgImage } from "@/src/utils/fetchOgImage";

const ImageLoadingWrapper = ({ project, className }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchOgImage(project.liveLink)
      .then((url) => {
        console.log(project.liveLink, url);
        setImageUrl(url);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [project.liveLink]);

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <>
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img src={errorImage} alt="Error loading image" className={className} />
      </>
    );

  return (
    <>
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img
        src={imageUrl}
        alt={`Screenshot of ${project.name}`}
        className={className}
      />
    </>
  );
};

export default ImageLoadingWrapper;
