import React, { useState } from "react";

const galleryData = {
   ग्रामपंचायत : [
    "/gallery/gramPanchayat/IMG-20250421-WA0034.jpg.jpeg",
    "/gallery/gramPanchayat/2 .jpeg",
    "/gallery/gramPanchayat/WhatsApp Image .jpeg",
    "/gallery/gramPanchayat/WhatsApp Image 2026-03-17 .jpeg",
    "/gallery/gramPanchayat/WhatsApp Image 2026-03-17 at 6.21.08 PM.jpeg",
    "/gallery/gramPanchayat/WhatsApp Image 2026-03-17 at 6.24.55 PM.jpeg",
    "/gallery/gramPanchayat/WhatsApp Image 2026-03-17 at 6.26.26 PM.jpeg",
    "/gallery/gramPanchayat/WhatsApp Image 2026-03-17 at 6.26.27 PM.jpeg",
    "/gallery/gramPanchayat/WhatsApp Image 2026-03-17 at 6.40.12 PM.jpeg"
  ],

  ग्रामसभा: [
    "/gallery/GramSabha/1758120051379.jpg.jpeg",
    "/gallery/GramSabha/1758120051400 - Copy.jpg.jpeg",
    "/gallery/GramSabha/1758122657814.jpg.jpeg",
    "/gallery/GramSabha/1758122903426.jpg.jpeg",
    "/gallery/GramSabha/1758122903438.jpg.jpeg",
   " /gallery/GramSabha/1758123139438.jpg.jpeg",
    "/gallery/GramSabha/1758123139446.jpg.jpeg",
   " /gallery/GramSabha/1758123139453.jpg.jpeg",
  ],

  आरोग्यशिबीर: [
    "/gallery/tapasani/1.jpeg",
    "/gallery/tapasani/WhatsApp .jpeg",
    "/gallery/tapasani/WhatsApp Image 2026-03-18 at 10.37.51 AM.jpeg",
    "/gallery/tapasani/WhatsApp Image 2026-03-18 at 10.37.52 AM.jpeg",
    "/gallery/tapasani/WhatsApp Image 2026-03-18 at 10.37.53 AM.jpeg",
  ],

  ग्रामस्वछता : [
    "/gallery/gramSwachta/WhatsApp Image 2026-03-18 at 10.56.2.jpeg",
    "/gallery/gramSwachta/WhatsApp Image 2026-03-18 at 10.56.21 AM.jpeg",
    "/gallery/gramSwachta/WhatsApp Image 2026-03-18 at 10.56.22 .jpeg",
    "/gallery/gramSwachta/WhatsApp Image 2026-03-18 at 10.56.22 AM.jpeg",
    "/gallery/gramSwachta/WhatsApp Image 2026-03-18 at 10.56.23 .jpeg",
    "/gallery/gramSwachta/WhatsApp Image 2026-03-18 at 10.56.23 AM.jpeg",
    "/gallery/gramSwachta/WhatsApp Image 2026-03-18 at 11.06.56 .jpeg",
    "/gallery/gramSwachta/WhatsApp Image 2026-03-18 at 11.06.56 AM.jpeg",
    "/gallery/gramSwachta/WhatsApp Image 2026-03-18 at 11.06.57 AM.jpeg",

  ],
   रस्त्याचीकामे : [
    "/gallery/Road/गावातील सिमेंट रस्ते.jpg.jpeg",
    "/gallery/Road/गावातील्र रस्ते 1.jpg.jpeg",
    "/gallery/Road/रस्ते.jpg.jpeg",
  ],
  ओपेनजिम  : [
    "/gallery/openGYM/WhatsApp Image 2026-03-17 at 6.23.48 PM.jpeg",
    "/gallery/openGYM/WhatsApp Image 2026-03-17 at 6.23.53 PM.jpeg",
  ],
  नानानाणी_पार्क  : [
    "/gallery/nananani/WhatsApp Image 2026-03-17 at 6.23.50 PM.jpeg",
    "/gallery/nananani/WhatsApp Image 2026-03-17 at 6.23.51 PM.jpeg",
    "/gallery/nananani/WhatsApp Image 2026-03-17 at 6.23.59 PM.jpeg",
  ],
  प्लॅस्टिकबंदी :[
"/gallery/plasticBandi/WhatsApp Image 2026-03-18 at 12.13.47 .jpeg",
"/gallery/plasticBandi/WhatsApp Image 2026-03-18 at 12.13.47 AM.jpeg",
"/gallery/plasticBandi/WhatsApp Image 2026-03-18 at 12.13.48 .jpeg",
"/gallery/plasticBandi/WhatsApp Image 2026-03-18 at 12.13.48 AM.jpeg",
  ],
};

export default function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState("ग्रामपंचायत");

  return (
    <div className="w-full bg-gray-100">

      {/* HERO SECTION */}
      <div className="bg-green-700 py-20 text-center">
        <h1 className="text-white text-5xl font-bold">फोटो गॅलरी</h1>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-center gap-4">

        {Object.keys(galleryData).map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded text-sm font-medium transition
              ${
                activeCategory === category
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 shadow"
              }`}
          >
            {category}
          </button>
        ))}

      </div>

      {/* IMAGE GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {galleryData[activeCategory].map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={img}
                alt="gallery"
                className="w-full h-[260px] object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}