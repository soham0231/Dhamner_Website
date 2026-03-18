export default function AboutVillage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-green-700 w-full py-20">
        <div className="max-w-7xl mx-auto px-6 items-center">
          <div>
            <h1 className="text-5xl font-bold text-white text-center">
              ग्रामपंचायतीविषयी
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          महाराष्ट्राच्या नकाशावर ठळकपणे उभे राहणारे आदर्श गाव
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 leading-8 mb-10 text-lg">
          धामणेर गावात स्वच्छता, सिमेंट रस्ते, पाणी व्यवस्थापन, शिक्षण आणि सामाजिक एकता
          यावर विशेष भर दिला जातो. ग्रामस्थांच्या एकजुटीमुळे विविध विकासकामे
          यशस्वीपणे राबवली जात आहेत. तसेच शेती हा मुख्य व्यवसाय असून कृष्णा
          नदीच्या पाण्यामुळे येथे शेतीला मोठा आधार मिळतो.
        </p>

        {/* Section 1 */}
        <h3 className="text-2xl font-semibold mb-4">
          विकासाची नांदी: लोकसहभागातून क्रांती
        </h3>

        <p className="text-gray-700 leading-8 mb-10">
          धामणेर हे केवळ एक गाव नसून, एक प्रगत आणि आदर्श ग्रामसंस्कृतीचे प्रतीक
          बनत आहे. ग्रामस्थांचा एकोप्या, पर्यावरणपूरक उपक्रम आणि विकासाची सततची
          धडपड यामुळे हे गाव इतर गावांसाठी प्रेरणादायी ठरत आहे.
        </p>

        {/* Section 2 */}
        <h3 className="text-2xl font-semibold mb-4">
          पायाभूत सुविधा: विकासाचा भक्कम आधार
        </h3>

        <ul className="list-disc pl-6 space-y-4 text-gray-700 leading-7">
          <li>
            <strong>पाणंद रस्ते:</strong> गावातील सर्व पाणंद रस्ते अतिक्रमणमुक्त
            करून खुले करण्यात आले.
          </li>

          <li>
            <strong>आधुनिक रस्ते:</strong> सिमेंट-काँक्रीट रस्ते आणि
            वृक्षारोपणामुळे गावाचा विकास वेगाने झाला.
          </li>

          <li>
            <strong>LED स्ट्रीट लाईट:</strong> गावातील सर्व रस्त्यांवर एलईडी
            दिवे बसवण्यात आले आहेत.
          </li>

          <li>
            <strong>आरोग्य केंद्र:</strong> गावात आधुनिक आरोग्य सुविधा उपलब्ध
            आहेत.
          </li>

          <li>
            <strong>पिण्याचे पाणी:</strong> शुद्ध आणि सुरक्षित पिण्याच्या
            पाण्याची सुविधा उपलब्ध आहे.
          </li>
        </ul>

        {/* Section 3 */}
        <h3 className="text-2xl font-semibold mt-12 mb-4">
          शिक्षण आणि जलसंधारण
        </h3>

        <ul className="list-disc pl-6 space-y-4 text-gray-700 leading-7">
          <li>
            <strong>डिजिटल शाळा:</strong> विद्यार्थ्यांसाठी आधुनिक डिजिटल वर्ग
            उपलब्ध आहेत.
          </li>

          <li>
            <strong>अभ्यासिका:</strong> स्पर्धा परीक्षांसाठी विद्यार्थ्यांना
            वातानुकूलित अभ्यासिका उपलब्ध आहे.
          </li>

          <li>
            <strong>जलसंधारण:</strong> तलाव, नाले आणि विहिरींचे पुनरुज्जीवन करून
            पाणीसाठा वाढवण्यात आला आहे.
          </li>
        </ul>
      </div>
    </div>
  );
}
