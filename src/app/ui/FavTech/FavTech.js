"use client";
import React from "react";
import Link from "next/link";
import { favoriteTechData } from "@/src/lib/favoriteTechData";
import Image from "next/image";
import "./FavTech.css";
import ImageLoadingWrapper from "@/src/utils/PreLoader/ImageLoadingWrapper";

export const FavTech = () => {
  return (
    <section id="techItem-section" className="techItem-outer-container">
      <div className="techItems__header-section">
        <div className="techItems__bottom-border">
          <h1 className="fav-tech__header">Favorite Technologies</h1>
        </div>
      </div>
      {favoriteTechData.map((techItem) => {
        return (
          <div key={techItem.name} className="techItem-container">
            <Link
              rel="noopener noreferrer"
              tabIndex="-1"
              aria-label="live project"
              href={techItem.liveLink}
              target="_blank"
            >
              <div className="techItem__site-image-container">
                <ImageLoadingWrapper
                  techItem={techItem}
                  className="techItem__site-preview"
                />
              </div>
            </Link>
            <div className="techItem-info">
              <div className="techItem__text-container">
                <div className="techItem__title-container">
                  <Image
                    className="techItem__icon"
                    src={techItem.iconPath}
                    alt="Screenshot of techItem"
                    width={20}
                    height={20}
                  />
                  <h3 className="techItem-title">{techItem.name}</h3>
                </div>
                <p className="techItem-description">{techItem.description}</p>
              </div>
              <div className="techItem-buttons-container">
                <Link
                  rel="noopener noreferrer"
                  tabIndex="-1"
                  aria-label="live techItem"
                  href={techItem.liveLink}
                  target="_blank"
                >
                  <button className="techItem-button global__button">
                    {techItem.liveButtonText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
