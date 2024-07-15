"use client";
import { useState, useRef } from "react";
import ModalWrapper from "./ModalWrapper";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SiteButton from "../UI-Elements/SiteButton";
import ContactModal from "./contactModal";
import { useModal } from "@/src/contexts/ModalContext";

export default function BrandModal() {
  const { showModal } = useModal();
  const [expandedImage, setExpandedImage] = useState<number | null>(null);
  const pages = 20;
  const containerRef = useRef<HTMLDivElement>(null);
  const packageElements = [
    "Logo Design",
    "Visual Identity",
    "Color Palette",
    "Typography & Fonts",
    "Unique Selling Proposition",
    "Color Palette",
    "Brand Messaging",
    "Brand Voice Guidelines",
    "Brand Story Script",
    "Competitive Market Analysis",
    "Audience Insight",
    "Strategic Brand Positioning",
    "Visual Mood Board",
    "Custom Website (optional)",
  ];

  type sortedProps = { packageElements: string[] };

  function SortedPackageElements({ packageElements }: sortedProps) {
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
    return Array.from({ length: pages }, (_, i) => i + 1).map((page) => (
      <motion.div
        key={page}
        className="ImageWrapper cursor-pointer"
        layoutId={`image-${page}`}
      >
        <Image
          src={`/mvnBrandGuide/${page}.webp`}
          width={500}
          height={335}
          alt={`Brand Strategy Page ${page}`}
          className="rounded-md transition-transform duration-300 hover:scale-105"
          onClick={() => setExpandedImage(page)}
        />
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
          <h3 className="Description text-gradient-clip mb-5 w-full max-w-[700px] text-xl capitalize tracking-widest sm:text-2xl">
            Launch Your Brand Today!
          </h3>
          <div className="MotionContainer">
            <h4 className="BioHeader text-lg uppercase tracking-wide text-gray-400">
              Branding Packages Include:
            </h4>
            {SortedPackageElements({ packageElements })}
          </div>
          <SiteButton
            size="large"
            textColor="text-gray-200"
            style="silverHollow"
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
          {expandedImage && (
            <motion.div
              className="ExpandedImageOverlay fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedImage(null)}
            >
              <motion.div
                className="ExpandedImageWrapper w-[90vw] max-w-[800px]"
                layoutId={`image-${expandedImage}`}
                style={{ zIndex: 51 }}
              >
                <Image
                  src={`/mvnBrandGuide/${expandedImage}.webp`}
                  width={800}
                  height={536}
                  alt={`Expanded Brand Strategy Page ${expandedImage}`}
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </ModalWrapper>
  );
}
