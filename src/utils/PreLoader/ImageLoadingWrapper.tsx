import React, { useState, useEffect } from "react";
import Loader from "./PreLoader";
import { fetchOgImage } from "@/src/utils/fetchOgImage";
import type { CardData } from "@/src/lib/dataTypes";

type WrapperProps = {
  cardData: CardData;
  className: string;
};

const ImageLoadingWrapper = ({ cardData, className }: WrapperProps) => {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchOgImage(cardData.liveLink)
      .then((url) => {
        console.log(cardData.liveLink, url);
        setImageUrl(url);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [cardData.liveLink]);

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
        alt={`Screenshot of ${cardData.name}`}
        className={className}
      />
    </>
  );
};

export default ImageLoadingWrapper;
