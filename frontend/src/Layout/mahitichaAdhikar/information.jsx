import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import worker from "pdfjs-dist/build/pdf.worker?url";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = worker;

const Information = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const [pdfWidth, setPdfWidth] = useState(600);
  const [imgScale, setImgScale] = useState(1);

  // ✅ Responsive width
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setPdfWidth(window.innerWidth - 40);
      } else if (window.innerWidth < 1024) {
        setPdfWidth(500);
      } else {
        setPdfWidth(700);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // ✅ Safe navigation
  const goPrev = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goNext = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center py-6 px-3">

      {/* 🔷 TITLE */}
      <h1 className="text-lg sm:text-2xl md:text-3xl font-bold mb-6 text-green-700 text-center">
        जमा खर्च सन २०२४/२५
      </h1>

      {/* 🔷 PDF VIEWER */}
      <div className="w-full flex flex-col items-center">

        {/* PDF */}
        <div className="bg-white rounded-xl shadow-2xl p-2 sm:p-4">
          <Document
            file="/Pdfs/सन २०२४ २५ जमा खर्च.pdf"
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            <Page pageNumber={pageNumber} width={pdfWidth} />
          </Document>
        </div>

        {/* ✅ BUTTONS BELOW (BEST FOR MOBILE) */}
        <div className="flex items-center justify-center gap-6 mt-4">

          <button
            onClick={goPrev}
            disabled={pageNumber <= 1}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-40"
          >
            ⬅ Prev
          </button>

          <div className="px-4 py-2 bg-white rounded-lg shadow font-semibold text-sm">
            Page {pageNumber} / {numPages || "--"}
          </div>

          <button
            onClick={goNext}
            disabled={pageNumber >= numPages}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-40"
          >
            Next ➡
          </button>

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
          className="transition-transform duration-300 w-full max-w-[280px] sm:max-w-[450px] md:max-w-[650px]"
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