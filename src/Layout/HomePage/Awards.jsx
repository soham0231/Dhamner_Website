import { Trophy } from "lucide-react";

export default function Awards() {
    const trophies = [
{
    title:
      "पंचायत राज कमिटीची गावास भेट व कामगिरीबद्दल विशेष प्रशस्तीपत्र",
    year: "सन २००१ - ०२",
    },
 {
    title: "जिल्हा स्तरीय अस्वच्छता निर्मूलनाबाबत प्रथम पुरस्कार",
    year: "सन २००२",
  },
 {
    title:
      "संत गाडगेबाबा ग्राम स्वच्छता अभियान - जिल्हा स्तरीय प्रथम पुरस्कार",
    year: "सन २००२ - ०३",
  },
  {
    title:
      "विभागीय स्तरावरील वसंतराव नाईक पाणी व्यवस्थापन कामाचा प्रथम पुरस्कार",
    year: "सन २००३ - ०४",
  },
{
    title:
      "संत गाडगेबाबा ग्राम स्वच्छता अभियान - जिल्हा स्तरीय प्रथम पुरस्कार",
    year: "सन २००३ - ०४",
  },
   {
    title: "यशवंत ग्रामपंचायतराज अभियान - विभाग स्तर प्रथम पुरस्कार",
    year: "सन २००४ - ०५",
  },
{
    title:
      "संत गाडगेबाबा ग्राम स्वच्छता अभियान - जिल्हा स्तरीय प्रथम पुरस्कार",
    year: "सन २००४ - ०५",
  },
 {
    title:
      "संत गाडगेबाबा ग्राम स्वच्छता अभियान - राज्य स्तरीय प्रथम पुरस्कार",
    year: "सन २००४ - ०५",
  },
{
    title:
      "राष्ट्रसंत तुकडोजी महाराज स्वच्छ ग्राम स्पर्धा - विभाग स्तरावर द्वितीय पुरस्कार",
    year: "सन २००४ - ०५",
  },
{
    title:
      "मा. राष्ट्रपती ए.पी.जे. अब्दुल कलाम यांचे हस्ते निर्मल ग्राम पुरस्कार",
    year: "सन २४ फेब्रुवारी २००५",
  },
  {
    title: "राज्य स्तरीय प्रथम क्रमांकाचा 'वनश्री' पुरस्कार",
    year: "सन २००६ - ०७",
  },
  {
    title:
      "शाहू, फुले, आंबेडकर दलित वस्ती सुधार अभियानात जिल्हास्तरीय द्वितीय पुरस्कार",
    year: "सन २००६ - ०७",
  },
  
 
 

 
 
  

  
 
];

    return (
        <>
           <div className="bg-gray-100 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* 🔥 Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            पुरस्कार
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-yellow-700"></span>
            <span className="w-3 h-3 bg-yellow-700 rotate-45"></span>
            <span className="w-12 h-[2px] bg-yellow-700"></span>
          </div>
        </div>

        {/* 🔥 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {trophies.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-sm p-8 text-center overflow-hidden group transition hover:shadow-md hover:scale-105"
            >
              {/* ✨ Dotted Hover Background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none
                bg-[radial-gradient(#00000033_3px,transparent_3px)] 
                bg-[size:30px_30px]"
              ></div>

              {/* Content */}
              <div className="relative z-10">
                
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <Trophy className="w-10 h-10 text-yellow-700" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 leading-relaxed mb-4">
                  {item.title}
                </h3>

                {/* Year */}
                <p className="text-yellow-700 font-bold">
                  {item.year}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
        </>
        )
      }