"use client";
import React from "react";
import Link from "next/link";
import { FAVORITE_TECH_DATA } from "@/src/lib/favoriteTechData";
import Image from "next/image";
import "./FavTech.css";
import ImageLoadingWrapper from "@/src/utils/PreLoader/ImageLoadingWrapper";

export const FavTech = () => {
  return (
    <section id="fav-tech__section" className="fav-tech__outer-container">
      <div className="fav-tech__header-section">
        <div className="fav-tech__bottom-border">
          <h1 className="fav-tech__header">Favorite Technologies</h1>
        </div>
      </div>
      {FAVORITE_TECH_DATA.map((techItem) => {
        return (
          <div key={techItem.name} className="fav-tech__container">
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
            <div className="fav-tech__info">
              <div className="techItem__text-container">
                <div className="techItem__title-container">
                  <Image
                    className="techItem__icon"
                    src={techItem.iconPath}
                    alt="Screenshot of techItem"
                    width={20}
                    height={20}
                  />
                  <h3 className="fav-tech__title">{techItem.name}</h3>
                </div>
                <p className="fav-tech__description">{techItem.description}</p>
              </div>
              <div className="fav-tech__buttons-container">
                <Link
                  rel="noopener noreferrer"
                  tabIndex="-1"
                  aria-label="live techItem"
                  href={techItem.liveLink}
                  target="_blank"
                >
                  <button className="fav-tech__button global__button">
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
