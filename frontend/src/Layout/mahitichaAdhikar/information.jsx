import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import worker from "pdfjs-dist/build/pdf.worker?url";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = worker;

const Information = () => {

  // 🔷 PDF 1
  const [numPages1, setNumPages1] = useState(0);
  const [pageNumber1, setPageNumber1] = useState(1);

  // 🔷 PDF 2
  const [numPages2, setNumPages2] = useState(0);
  const [pageNumber2, setPageNumber2] = useState(1);

  // 🔷 PDF 3 (NEW PDF)
  const [numPages3, setNumPages3] = useState(0);
  const [pageNumber3, setPageNumber3] = useState(1);

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

  // 🔷 PDF 1 controls
  const goPrev1 = () => setPageNumber1((p) => Math.max(p - 1, 1));
  const goNext1 = () => setPageNumber1((p) => Math.min(p + 1, numPages1));

  // 🔷 PDF 2 controls
  const goPrev2 = () => setPageNumber2((p) => Math.max(p - 1, 1));
  const goNext2 = () => setPageNumber2((p) => Math.min(p + 1, numPages2));

  // 🔷 PDF 3 controls
  const goPrev3 = () => setPageNumber3((p) => Math.max(p - 1, 1));
  const goNext3 = () => setPageNumber3((p) => Math.min(p + 1, numPages3));

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center py-6 px-3">


      {/* 🔷 PDF 2 TITLE */}
      <h1 className="text-lg sm:text-2xl md:text-3xl font-bold mb-6 text-green-700 text-center mt-10">
        जमा खर्च सन २०२५ /२६ 
      </h1>

      {/* 🔷 PDF 2 */}
      <div className="w-full flex flex-col items-center">
        <div className="bg-white rounded-xl shadow-2xl p-2 sm:p-4">
          <Document
            file="/Pdfs/New Doc 05-11-2026 09.56.pdf"
            onLoadSuccess={({ numPages }) => setNumPages2(numPages)}
          >
            <Page pageNumber={pageNumber2} width={pdfWidth} />
          </Document>
        </div>

        <div className="flex items-center justify-center gap-6 mt-4">
          <button
            onClick={goPrev2}
            disabled={pageNumber2 <= 1}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-40"
          >
            ⬅ Prev
          </button>

          <div className="px-4 py-2 bg-white rounded-lg shadow font-semibold text-sm">
            Page {pageNumber2} / {numPages2 || "--"}
          </div>

          <button
            onClick={goNext2}
            disabled={pageNumber2 >= numPages2}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-40"
          >
            Next ➡
          </button>
        </div>
      </div>

      {/* 🔷 PDF 2 TITLE */}
      <h1 className="text-lg sm:text-2xl md:text-3xl font-bold mb-6 text-green-700 text-center mt-10">
        जमा खर्च सन २०२४/२५
      </h1>

      {/* 🔷 PDF 2 */}
      <div className="w-full flex flex-col items-center">
        <div className="bg-white rounded-xl shadow-2xl p-2 sm:p-4">
          <Document
            file="/Pdfs/सन २०२४ २५ जमा खर्च.pdf"
            onLoadSuccess={({ numPages }) => setNumPages2(numPages)}
          >
            <Page pageNumber={pageNumber2} width={pdfWidth} />
          </Document>
        </div>

        <div className="flex items-center justify-center gap-6 mt-4">
          <button
            onClick={goPrev2}
            disabled={pageNumber2 <= 1}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-40"
          >
            ⬅ Prev
          </button>

          <div className="px-4 py-2 bg-white rounded-lg shadow font-semibold text-sm">
            Page {pageNumber2} / {numPages2 || "--"}
          </div>

          <button
            onClick={goNext2}
            disabled={pageNumber2 >= numPages2}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-40"
          >
            Next ➡
          </button>
        </div>
      </div>

      {/* 🔷 NEW PDF TITLE */}
      <h1 className="text-lg sm:text-2xl md:text-3xl font-bold mb-6 text-green-700 text-center mt-10">
        ग्रामपंचायती विषयी सर्वसाधरण माहिती 
      </h1>

      {/* 🔷 NEW PDF */}
      <div className="w-full flex flex-col items-center">
        <div className="bg-white rounded-xl shadow-2xl p-2 sm:p-4">
          <Document
            file="/Pdfs/GP mahiti patrak.pdf"
            onLoadSuccess={({ numPages }) => setNumPages3(numPages)}
          >
            <Page pageNumber={pageNumber3} width={pdfWidth} />
          </Document>
        </div>

        <div className="flex items-center justify-center gap-6 mt-4">
          <button
            onClick={goPrev3}
            disabled={pageNumber3 <= 1}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-40"
          >
            ⬅ Prev
          </button>

          <div className="px-4 py-2 bg-white rounded-lg shadow font-semibold text-sm">
            Page {pageNumber3} / {numPages3 || "--"}
          </div>

          <button
            onClick={goNext3}
            disabled={pageNumber3 >= numPages3}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-40"
          >
            Next ➡
          </button>
        </div>
      </div>

      {/* 🔷 IMAGE */}
      <h2 className="text-lg sm:text-2xl font-bold mt-10 mb-4 text-green-700 text-center">
        १५ वित्त आयोग जमा खर्च
      </h2>

      <div className="bg-white rounded-xl shadow-2xl p-2 sm:p-4 flex justify-center overflow-hidden">
        <img
          src="/Pdfs/१५ वा वित्त आयोग जमा खर्च.jpg.jpeg"
          alt="Finance"
          style={{ transform: `scale(${imgScale})` }}
          className="transition-transform duration-300 w-full max-w-[280px] sm:max-w-[450px] md:max-w-[650px]"
        />
      </div>

      {/* 🔷 IMAGE CONTROLS */}
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