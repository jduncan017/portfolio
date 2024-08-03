"use client";
import { useState, useRef, useEffect } from "react";
import ModalWrapper from "./ModalWrapper";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SiteButton from "../UI-Elements/SiteButton";
import ContactModal from "./contactModal";
import { useModal } from "@/src/contexts/ModalContext";

export default function BrandModal() {
  const { showModal } = useModal();
  const [brandGuide, setBrandGuide] = useState("mvnBrandGuide");
  const [pages, setPages] = useState(20);
  const [expandedImage, setExpandedImage] = useState<number | null>(null);
  const [prerenderedImages, setPrerenderedImages] = useState<JSX.Element[]>([]);
  const [prerenderedExpandedImages, setPrerenderedExpandedImages] = useState<
    JSX.Element[]
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const packageElements = [
    "Logo Design & Development",
    "Visual Identity Guidelines",
    "Color Palette Selection",
    "Typography & Font Selection",
    "Unique Selling Proposition",
    "Brand Messaging Guidelines",
    "Tone & Voice Guidelines",
    "Brand Story Script",
    "Competitive Market Analysis",
    "Target Market Analysis",
    "Mood Boards & Imagery",
    "Website Design & Development",
  ];

  useEffect(() => {
    const prerenderImages = () => {
      const thumbnails: JSX.Element[] = [];
      const expandedImages: JSX.Element[] = [];

      for (let i = 1; i <= pages; i++) {
        const src = `/${brandGuide}/${i}.webp`;
        thumbnails.push(
          <Image
            key={`thumbnail-${i}`}
            src={src}
            width={500}
            height={335}
            alt={`Brand Strategy Page ${i}`}
            className="rounded-md transition-transform duration-300 hover:scale-105"
            onClick={() => setExpandedImage(i - 1)}
          />,
        );
        expandedImages.push(
          <Image
            key={`expanded-${i}`}
            src={src}
            width={1000}
            height={670}
            alt={`Expanded Brand Strategy Page ${i}`}
            className="rounded-lg shadow-xl"
          />,
        );
      }

      setPrerenderedImages(thumbnails);
      setPrerenderedExpandedImages(expandedImages);
    };

    prerenderImages();
  }, [brandGuide]);

  type SortedProps = { packageElements: string[] };

  function SortedPackageElements({ packageElements }: SortedProps) {
    const sortedElements = [...packageElements].sort((a, b) =>
      a.localeCompare(b),
    );

    return (
      <ul className="JobItems my-4 grid grid-cols-1 flex-col items-center gap-x-2 border-b border-t border-dotted border-gray-600 py-4 text-gray-300 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedElements.map((element) => (
          <li
            className="JobItem mb-1 flex items-center gap-2 text-nowrap text-lg md:mb-3"
            key={element}
          >
            <span className="text-secondary">{"->"}</span>
            <p>{element}</p>
          </li>
        ))}
      </ul>
    );
  }

  function renderPages() {
    return prerenderedImages.map((image, index) => (
      <motion.div
        key={index}
        className="ImageWrapper cursor-pointer"
        layoutId={`image-${index + 1}`}
      >
        {image}
      </motion.div>
    ));
  }

  return (
    <ModalWrapper title="Brand Strategy">
      <>
        <div
          className="BrandModal flex w-full flex-col items-center justify-center px-4"
          ref={containerRef}
        >
          <h3 className="Description text-gradient-clip mb-5 w-full max-w-[700px] text-2xl capitalize tracking-widest sm:text-3xl">
            Launch Your Brand Today!
          </h3>
          <div className="MotionContainer">
            <h4 className="BioHeader text-xl uppercase tracking-wide text-gray-400">
              Branding Packages Include:
            </h4>
            <SortedPackageElements packageElements={packageElements} />
          </div>
          <h4 className="BioHeader capitaliz text-lg tracking-wide text-gray-500">
            Free Consultations
          </h4>
          <SiteButton
            size="large"
            textColor="text-gray-200"
            addClasses="mt-5 bg-secondaryDark text-lg max-w-[350px]"
            style="purple"
            onClick={() => showModal(<ContactModal />)}
          >
            Inquire
          </SiteButton>
          <h3 className="Description text-gradient-clip mt-10 w-full max-w-[700px] text-xl capitalize tracking-widest sm:text-2xl">
            Example Brand/Product Strategy Guides
          </h3>
          <div className="ButtonContainer mb-2 mt-6 flex flex-col gap-3 mini:mr-0 mini:flex-row">
            <button
              className={`SelectButton rounded-sm px-4 py-2 text-gray-300 transition-colors ${brandGuide === "mvnBrandGuide" ? "cursor-default bg-slate-500" : "bg-gray-700 hover:bg-gray-600"}`}
              onClick={() => {
                setBrandGuide("mvnBrandGuide");
                setPages(20);
              }}
            >
              MVN Travel
            </button>
            <button
              className={`SelectButton rounded-sm px-4 py-2 text-gray-300 transition-colors ${brandGuide === "rdsBrandGuide" ? "cursor-default bg-slate-500" : "bg-gray-700 hover:bg-gray-600"}`}
              onClick={() => {
                setBrandGuide("rdsBrandGuide");
                setPages(25);
              }}
            >
              Ronin Data Solutions
            </button>
            <button
              className={`SelectButton rounded-sm px-4 py-2 text-gray-300 transition-colors ${brandGuide === "levitaBrandGuide" ? "cursor-default bg-slate-500" : "bg-gray-700 hover:bg-gray-600"}`}
              onClick={() => {
                setBrandGuide("levitaBrandGuide");
                setPages(25);
              }}
            >
              Levita Beverages
            </button>
          </div>
          <div className="GuideContainer my-5 grid grid-cols-1 gap-6 border-t border-dotted border-gray-600 py-5 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4">
            {renderPages()}
          </div>
        </div>
        <AnimatePresence>
          {expandedImage !== null && (
            <motion.div
              className="ExpandedImageOverlay fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedImage(null)}
            >
              <motion.div
                className="ExpandedImageWrapper relative w-[90vw] max-w-[1000px]"
                layoutId={`image-${expandedImage + 1}`}
                style={{ zIndex: 51 }}
              >
                {prerenderedExpandedImages[expandedImage] || (
                  <div className="flex h-[670px] w-[1000px] items-center justify-center rounded-lg bg-gray-200">
                    <p>Image not available</p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </ModalWrapper>
  );
}
