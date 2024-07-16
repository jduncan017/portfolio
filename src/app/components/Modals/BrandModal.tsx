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
  const [expandedImage, setExpandedImage] = useState<number | null>(null);
  const [preloadedImages, setPreloadedImages] = useState<(string | null)[]>([]);
  const pages = 20;
  const containerRef = useRef<HTMLDivElement>(null);
  const packageElements = [
    "Logo Design & Development",
    "Visual Identity",
    "Color Palette",
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
    const preloadImages = async () => {
      const imagePromises = Array.from({ length: pages }, (_, i) => i + 1).map(
        async (page) => {
          const src = `/mvnBrandGuide/${page}.webp`;
          try {
            const res = await fetch(src, { method: "HEAD" });
            return res.ok ? src : null;
          } catch (error) {
            console.error(`Failed to preload image: ${src}`, error);
            return null;
          }
        },
      );

      const loadedImages = await Promise.all(imagePromises);
      setPreloadedImages(loadedImages);
    };

    preloadImages();
  }, []);

  type SortedProps = { packageElements: string[] };

  function SortedPackageElements({ packageElements }: SortedProps) {
    const sortedElements = [...packageElements].sort((a, b) =>
      a.localeCompare(b),
    );

    return (
      <ul className="JobItems my-4 grid grid-cols-1 flex-col items-center gap-x-6 border-b border-t border-dotted border-gray-600 py-4 text-gray-300 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedElements.map((element) => (
          <li
            className="JobItem mb-1 flex items-center gap-2 text-nowrap md:mb-3"
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
    return preloadedImages
      .map(
        (src, index) =>
          src && (
            <motion.div
              key={index + 1}
              className="ImageWrapper cursor-pointer"
              layoutId={`image-${index + 1}`}
            >
              <Image
                src={src}
                width={500}
                height={335}
                alt={`Brand Strategy Page ${index + 1}`}
                className="rounded-md transition-transform duration-300 hover:scale-105"
                onClick={() => setExpandedImage(index + 1)}
              />
            </motion.div>
          ),
      )
      .filter(Boolean);
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
            <h4 className="BioHeader text-lg uppercase tracking-wide text-gray-400">
              Branding Packages Include:
            </h4>
            <SortedPackageElements packageElements={packageElements} />
          </div>
          <SiteButton
            size="large"
            textColor="text-secondary"
            addClasses="mt-5"
            style="purpleHollow"
            onClick={() => showModal(<ContactModal />)}
          >
            Inquire About Brand Services
          </SiteButton>
          <h3 className="Description text-gradient-clip mt-10 w-full max-w-[700px] text-xl capitalize tracking-widest sm:text-2xl">
            Example Brand Strategy Guide
          </h3>
          <div className="GuideContainer my-5 grid grid-cols-1 gap-6 border-t border-dotted border-gray-600 py-5 sm:grid-cols-2 lg:grid-cols-3">
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
                className="ExpandedImageWrapper relative w-[90vw] max-w-[800px]"
                layoutId={`image-${expandedImage}`}
                style={{ zIndex: 51 }}
              >
                <Image
                  src="/close-button.svg"
                  width={20}
                  height={20}
                  alt="close button"
                  className="CloseButton absolute right-5 top-5 mix-blend-difference hover:scale-105 hover:cursor-pointer"
                  onClick={() => setExpandedImage(null)}
                />
                {preloadedImages[expandedImage - 1] ? (
                  <Image
                    src={preloadedImages[expandedImage - 1]!}
                    width={800}
                    height={536}
                    alt={`Expanded Brand Strategy Page ${expandedImage}`}
                    className="rounded-lg shadow-xl"
                  />
                ) : (
                  <div className="flex h-[536px] w-[800px] items-center justify-center rounded-lg bg-gray-200">
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
