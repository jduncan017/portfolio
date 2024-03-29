"use client";
import React from "react";
import Link from "next/link";
import { FAVORITE_TECH_DATA } from "@/src/lib/favoriteTechData";
import Image from "next/image";
import "./FavTech.css";
import ImageLoadingWrapper from "@/src/utils/PreLoader/ImageLoadingWrapper";

export const FavTech = () => {
  return (
    <section id="technologies-section" className="fav-tech__outer-container">
      <div className="fav-tech__header-section mb-5 w-[80%]">
        <div className="fav-tech__bottom-border w-fit border-b-2 border-solid border-[#8913e1]">
          <h1 className="fav-tech__header self-start text-lg font-semibold uppercase tracking-widest">
            Favorite Technologies
          </h1>
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
              className="techItem__image-link"
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
                  <button className="fav-tech__button global-button">
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
