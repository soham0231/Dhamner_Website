import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import worker from "pdfjs-dist/build/pdf.worker?url";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = worker;

const Information = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [pdfWidth, setPdfWidth] = useState(600);
  const [imgScale, setImgScale] = useState(1);

  // 🔥 Responsive width handler
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setPdfWidth(280);
      } else if (window.innerWidth < 1024) {
        setPdfWidth(450);
      } else {
        setPdfWidth(650);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center py-6 px-3 sm:px-4">

      {/* 🔷 TITLE */}
      <h1 className="text-lg sm:text-2xl md:text-3xl font-bold mb-6 text-green-700 text-center">
        जमा खर्च सन २०२४/२५
      </h1>

      {/* 🔷 PDF VIEWER */}
      <div className="relative w-full flex justify-center">

        {/* ⬅ LEFT */}
        <button
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber <= 1}
          className="absolute left-1 sm:left-[-40px] top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 text-lg sm:text-xl"
        >
          ❮
        </button>

        {/* PDF */}
        <div className="bg-white rounded-xl shadow-2xl p-2 sm:p-4">
          <Document
            file="/Pdfs/सन २०२४ २५ जमा खर्च.pdf"
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            <Page pageNumber={pageNumber} width={pdfWidth} />
          </Document>
        </div>

        {/* ➡ RIGHT */}
        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber >= numPages}
          className="absolute right-1 sm:right-[-40px] top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 text-lg sm:text-xl"
        >
          ❯
        </button>
      </div>

      {/* 🔷 CONTROLS */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-6">

        <div className="px-3 sm:px-4 py-2 bg-white rounded-lg shadow text-xs sm:text-sm font-semibold">
          Page {pageNumber} of {numPages}
        </div>

      </div>

      {/* ================= IMAGE ================= */}

      <h2 className="text-lg sm:text-2xl font-bold mt-10 mb-4 text-green-700 text-center">
        १५ वित्त आयोग जमा खर्च
      </h2>

      {/* IMAGE */}
      <div className="bg-white rounded-xl shadow-2xl p-2 sm:p-4 flex justify-center overflow-hidden">

        <img
          src="/Pdfs/१५ वा वित्त आयोग जमा खर्च.jpg.jpeg"
          alt="Finance"
          style={{ transform: `scale(${imgScale})` }}
          className="transition-transform duration-300 w-full max-w-[280px] sm:max-w-[450px] md:max-w-[650px] h-auto"
        />

      </div>

      {/* IMAGE CONTROLS */}
      <div className="flex items-center gap-4 mt-4">

        <button
          onClick={() => setImgScale((prev) => Math.max(prev - 0.2, 0.6))}
          className="px-3 py-1 bg-gray-600 text-white rounded"
        >
          -
        </button>

        <button
          onClick={() => setImgScale((prev) => Math.min(prev + 0.2, 2))}
          className="px-3 py-1 bg-gray-600 text-white rounded"
        >
          +
        </button>

      </div>

    </div>
  );
};

export default Information;