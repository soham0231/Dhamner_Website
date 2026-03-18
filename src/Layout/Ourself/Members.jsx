import React from "react";

const members = [
  {
    name: "श्री.चंद्रकांत शंकर व्होवाळे",
    role: "सरपंच",
    img: "/members/Sarpanch chandrakant howale.jpg.jpeg",
  },
  {
    name: "श्री.प्रवीण वामन क्षीरसागर",
    role: "उपसरपंच",
    img: "/members/upsarpanch pravin kshirsagar.jpg.jpeg",
  },
  {
    name: "श्री.प्रशांत विठ्ठल फडतरे",
    role: "ग्रामसेवक अधिकारी",
    img: "/members/WhatsApp Image 2026-03-17 at 6.13.49 PM.jpeg",
  },
  {
    name: "सौ. शैलजा गजानना क्षीरसागर",
    role: "ग्राप सदस्य",
    img: "/members/shailaja.jpg.jpeg",
  },
  {
    name: "सौ.शितल अजित निंबाळकर",
    role: "ग्राप सदस्य",
    img: "/members/Shital Ajit Nimbalkar.jpg.jpeg",
  },
  {
    name: "सौ.भारती मुगट माने",
    role: "ग्राप सदस्य",
    img: "/members/bharati M Mane.jpg.jpeg",
  },
  {
    name: "श्री.निलेश विश्वास क्षीरसागर",
    role: "ग्राप सदस्य",
    img: "/members/nilesh vilas kshirsagar.jpg.jpeg",
  },
  {
    name: "सौ.मनीषा दत्तात्रेय वळकुंदे",
    role: "ग्राप सदस्य",
    img: "/members/manisha.jpg.jpeg",
  },
  {
    name: "श्री.रविंद्र रामसिंग धामणेरकर",
    role: "ग्राप सदस्य",
    img: "/members/Ravindra Dhamnerkar.jpg.jpeg",
  },
  {
    name: "सौ.कार्तिकी संतोष क्षीरसागर",
    role: "ग्राप सदस्य",
    img: "/members/kartiki.jpg.jpeg",
  },
];

export default function Members() {
  return (
    <div className="w-full bg-gray-100">

      {/* HERO SECTION */}
      <div className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-white text-5xl font-bold">
            अधिकारी / पदाधिकारी
          </h1>
        </div>
      </div>


      {/* MEMBERS SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-center text-3xl font-semibold text-gray-700 mb-9">
          ग्रामपंचायत सदस्य व पदाधिकारी
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition duration-300"
            >

              <img
                src={member.img}
                alt={member.name}
                className="w-35 h-40 mx-auto rounded-xl object-cover"
              />

              <h3 className="mt-4 font-semibold text-lg text-gray-800">
                {member.name}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {member.role}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}