"use client";
import { useState, useEffect } from "react";
import ModalWrapper from "./ModalWrapper";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFDocumentProxy } from "pdfjs-dist";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

export default function BrandModal() {
  const [numPages, setNumPages] = useState(0);
  const [width, setWidth] = useState(280); // Initial width

  const onDocumentLoadSuccess = ({ numPages }: PDFDocumentProxy) => {
    setNumPages(numPages);
  };

  const updateWidth = () => {
    const calculatedWidth = Math.min(
      800,
      Math.max(280, window.innerWidth * 0.8),
    );
    setWidth(calculatedWidth);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <ModalWrapper title="Brand Strategy">
      <div className="BrandModal flex w-full flex-col items-center justify-center px-4">
        <p className="Description mb-10 w-full max-w-[700px] text-center leading-6 text-gray-200">
          The following is a brand strategy guide I did for a client - MVN
          Travel. Design work includes logo, color palette, and fonts. Brand
          strategy elements include a unique selling proposition, target market,
          competitor research, tone of voice, and more.
        </p>
        <Document
          file="/MVN.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading="Loading PDF..."
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={width}
              className="mb-4 overflow-hidden rounded-xl"
            />
          ))}
        </Document>
      </div>
    </ModalWrapper>
  );
}
