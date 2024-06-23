import React, { useState, useEffect } from "react";
import Loader from "./PreLoader";
import { fetchOgImage } from "@/src/utils/fetchOgImage";
import type { Project } from "@/src/lib/projectData";

type WrapperProps = {
  project: Project;
  className: string;
};

const ImageLoadingWrapper = ({ project, className }: WrapperProps) => {
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
        <img
          src="/image-error.png"
          alt="Error loading image"
          className={className}
        />
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
