import React from "react";
import "./FavoriteTech.css";
import Link from "next/link";
import Image from "next/image";
import arcLogo from "@/public/arc-logo.png";
import vercelLogo from "@/public/vercel-logo.png";
import notionLogo from "@/public/notion-logo.png";

const FavoriteTech = () => {
  return (
    <div className="fav-tech">
      <div className="fav-tech__text-container">
        <h1 className="fav-tech__header">Favorite Modern Technologies</h1>
        <p className="fav-tech__description">
          Latest tech and companies that I regularly use and draw inspiration
          from:
        </p>
        <ul className="fav-tech__list">
          <li className="fav-tech__item">
            <Link
              href="https://arc.net/"
              rel="noopener noreferrer"
              aria-label="Arc Website"
              target="_blank"
              className="fav-tech__title"
            >
              <div className="fav-tech__title-container">
                <Image
                  src={arcLogo}
                  className="fav-tech__logo"
                  width={20}
                  height={20}
                />
                <h3 className="fav-tech__title">Arc Browser</h3>
              </div>
            </Link>
            <p className="fav-tech__item-description">
              The Browser Company is changing the way we interact with internet
              browsers. Their software is beautifully designed and the ideas
              they come up with are creative, user focused, and cutting edge.
              This is a free software that runs on the chromium engine and has
              great modern tools for developers.
            </p>
          </li>
          <li className="fav-tech__item">
            <Link
              href="https://vercel.com/home"
              rel="noopener noreferrer"
              aria-label="Vercel Website"
              target="_blank"
              className="fav-tech__title"
            >
              <div className="fav-tech__title-container">
                <Image
                  src={vercelLogo}
                  className="fav-tech__logo"
                  width={20}
                  height={20}
                />
                <h3 className="fav-tech__title">Vercel / Next.js</h3>
              </div>
            </Link>
            <p className="fav-tech__item-description">
              As mentioned before, Next.js is my preferred React framework.
              Vercel seems to be consistently releasing updates and the tools
              they provide make developing modern applications a breeze.
              Additionally they make the management of databases, environment
              variables, and site deployment a breeze.
            </p>
          </li>
          <li className="fav-tech__item">
            <Link
              href="https://www.notion.so/"
              rel="noopener noreferrer"
              aria-label="Notion Website"
              target="_blank"
              className="fav-tech__title"
            >
              <div className="fav-tech__title-container">
                <Image
                  src={notionLogo}
                  className="fav-tech__logo"
                  width={20}
                  height={20}
                />
                <h3 className="fav-tech__title">Notion</h3>
              </div>
            </Link>
            <p className="fav-tech__item-description">
              Notion is a next level organize-your-life tool that is extremely
              well thought our and designed. The software can do just about
              anything you need it to and provides a plethora of keyboard
              shortcuts help you work quickly.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FavoriteTech;
