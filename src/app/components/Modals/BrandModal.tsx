"use client";
import { useState, useEffect, useCallback } from "react";
import ModalWrapper from "./ModalWrapper";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFDocumentProxy } from "pdfjs-dist";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Use the locally copied worker file
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

export default function BrandModal() {
  const [numPages, setNumPages] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [pdfWidth, setPdfWidth] = useState(280);
  const [placeholderWidth, setPlaceholderWidth] = useState(280);

  const onDocumentLoadSuccess = ({ numPages }: PDFDocumentProxy) => {
    setNumPages(numPages);
    setLoaded(true);
  };

  const updateWidth = useCallback(() => {
    const calculatedWidth = Math.min(
      800, // Maximum width
      Math.max(280, window.innerWidth * 0.8),
    );

    if (loaded) {
      setPdfWidth(calculatedWidth);
      setPlaceholderWidth(calculatedWidth);
      return;
    }
    setPlaceholderWidth(calculatedWidth);
  }, [loaded]);

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [loaded, updateWidth]);

  return (
    <ModalWrapper title="Brand Strategy">
      <div className="BrandModal flex w-full flex-col items-center justify-center px-4">
        <p className="Description mb-10 w-full max-w-[700px] text-center leading-6 text-gray-200">
          Get your brand off the ground! Brand strategy packages include logo
          design, visual identity, and font packages. Brand strategy elements
          include a unique selling proposition, target market, competitor
          research, tone of voice, and more.
        </p>
        <div className="relative">
          {!loaded && (
            <div
              style={{
                width: `${Math.round(placeholderWidth)}px`,
                height: `${Math.round(placeholderWidth / 1.49)}px`,
              }}
              className="flex items-center justify-center rounded-xl bg-black"
            ></div>
          )}
          <Document file="/MVN.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={pdfWidth}
                className="mb-4 overflow-hidden rounded-xl"
              />
            ))}
          </Document>
        </div>
      </div>
    </ModalWrapper>
  );
}
