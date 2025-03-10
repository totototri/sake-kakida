import React, { useState } from 'react';

// Sake data based on the provided detailed information
const sakeData = [
  {
    id: 1,
    name: "GANGI Hitotsubi",
    nameJP: "GANGI ひとつび",
    price: 600,
    volume: "90ml",
    region: "Yamaguchi",
    regionJP: "山口県",
    characteristics: "A pure rice sake with original sake mixed with Japanese water, heated once (bottle-warmed). The second name \"Hitotsubi\" combines the meaning of the constant light illuminating the pier and \"heated once.\" A calm, easy-drinking sake with the characteristic richness and umami of Gangi. It's a gentle sake that naturally permeates the body.",
    riceType: "Yamada Nishiki",
    polishingRatio: "60%",
    alcoholContent: "N/A"
  },
  {
    id: 2,
    name: "HAKKAISAN",
    nameJP: "八海山",
    price: 600,
    volume: "90ml",
    region: "Niigata",
    regionJP: "新潟県",
    characteristics: "A highly recognized brand representing Niigata. The white-labeled special junmai is a standard junmai sake, often mentioned when people talk about dry sake. From a gentle mouthfeel, the moderate umami of rice spreads, followed by a clean, dry finish. With its refreshing taste, you'll want a second and third cup. Designed as a food sake that pairs well with a variety of dishes.",
    riceType: "Gohyakumangoku",
    polishingRatio: "55%",
    alcoholContent: "15.5%",
    pairing: "Recommended pairing is with salt-grilled fatty hokke fish and Hakkaisan served slightly warm. The umami and saltiness of the hokke perfectly complement Hakkaisan's deliciousness and dry finish, enhancing each other's flavors."
  },
  {
    id: 3,
    name: "KAMONISHIKI NIFUDA-ZAKE",
    nameJP: "賀茂錦 荷札酒",
    price: 600,
    volume: "90ml",
    region: "Niigata",
    regionJP: "新潟県",
    characteristics: "A junmai daiginjo with 50% polished \"Bizen Omachi\" sake rice. A limited edition \"Kamonishiki\" crafted by master brewer Yuichi Tanaka, who has numerous fans worldwide. Compared to their regular Nakagumi, Kissuisen, Hattannishiki, or Sakemirai, the fruitiness is more subdued. Characteristic of the Nifuda series, it has a natural sweetness of rice combined with a rich, full-bodied taste with umami.",
    riceType: "Bizen Omachi from Okayama Prefecture (80%)",
    polishingRatio: "50%",
    alcoholContent: "15% (undiluted)"
  },
  {
    id: 4,
    name: "DASSAI JUNMAI DAIGINJO 45",
    nameJP: "獺祭 純米大吟醸 45",
    price: 800,
    volume: "90ml",
    region: "Yamaguchi",
    regionJP: "山口県",
    characteristics: "The epitome of fruity Japanese sake. When it comes to elegant and fruity Japanese sake, Dassai is a representative example. From sake beginners to connoisseurs, many people find its taste satisfying. An elegant, fruity aroma reminiscent of green apples. A clean sweetness spreads in the mouth, gradually transitioning to a clear dryness. An elegant and sensual taste that leaves a lingering elegant aroma.",
    riceType: "Yamada Nishiki",
    polishingRatio: "45%",
    alcoholContent: "16%"
  },
  {
    id: 5,
    name: "UBUSUNA | YAMADA NISHIKI",
    nameJP: "産土 山田錦",
    price: 800,
    volume: "90ml",
    region: "Kumamoto",
    regionJP: "熊本県",
    characteristics: "The distinctive aroma of Kumamoto No. 9 yeast and the natural sweetness of the sake are well-balanced with the \"thickness\" texture imparted by the local brewing water, expressing the natural environment of Nagomi Town. The fresh sensation created by the action of koji and other microorganisms leaves an impression as if umami is bursting in your mouth.",
    riceType: "Yamada Nishiki",
    classification: "Kikuchi River basin / Kimoto",
    alcoholContent: "13%"
  },
  {
    id: 6,
    name: "KUZURYU DAIGINJO",
    nameJP: "九頭龍 大吟醸",
    price: 1000,
    volume: "90ml",
    region: "Fukui",
    regionJP: "福井県",
    characteristics: "A pure aroma like standing at the entrance of a bamboo forest or woods, with slightly subdued fruit flavors reminiscent of ripe melon. The sweet scent of the white part of popcorn and the aroma of peony flowers further enhance its fragrance. From a somewhat sweet and juicy touch, a sharp strength quickly tightens the flavor in the middle and later stages. A taste that shows strength in places despite its cuteness.",
    polishingRatio: "50%",
    style: "Daiginjo",
    alcoholContent: "15%"
  },
  {
    id: 7,
    name: "ARAMASA AMANEKO SPARK",
    nameJP: "新政 あまねこ スパーク",
    price: 2000,
    volume: "90ml",
    region: "Akita",
    regionJP: "秋田県",
    characteristics: "A distinguished brewery that perfected Akita-style brewing techniques and the birthplace of Yeast No. 6, the founder of Akita-style sake brewing, established in 1852. This sparkling sake is crafted by the industry's \"revolutionary,\" 8th generation owner Yusuke Sato, a University of Tokyo graduate. While Japanese sake typically uses \"yellow koji,\" \"Amaneko Sparkling\" partially uses \"white koji,\" which is commonly used in shochu. The production method is the same as champagne with secondary fermentation in the bottle, and it's unpasteurized sake with no added carbonation.",
    tasting: "With a crisp taste and refreshing mouthfeel, it pairs well with any dish. When you take a sip, the sharp acidity is very impressive, and the sweet-sour full-bodied taste combined with lightness pairs perfectly with Western cuisine (of course, it also goes well with Japanese cuisine). The aftertaste is refreshing with a clean finish, inviting you to take another sip.",
    riceType: "100% Akita Sakekomachi (sake rice)",
    polishingRatio: "(Koji) 40%, (Kake) 65%",
    special: "Today's Special!"
  }
];

const SakeApp = () => {
  const [selectedSake, setSelectedSake] = useState(null);
  const [filter, setFilter] = useState('all'); // Filter options: all, premium, standard

  const handleSelectSake = (sake) => {
    setSelectedSake(sake);
  };

  const handleBack = () => {
    setSelectedSake(null);
  };

  const filteredSakes = filter === 'all' 
    ? sakeData 
    : filter === 'premium' 
      ? sakeData.filter(sake => sake.price >= 1000) 
      : sakeData.filter(sake => sake.price < 1000);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-red-800 text-white p-4 shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Japanese Sake Explorer
          </h1>
        </div>
      </header>

      <main className="flex-grow p-4 max-w-7xl mx-auto w-full">
        {selectedSake ? (
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="p-6">
              <button 
                onClick={handleBack}
                className="mb-6 px-4 py-2 bg-red-800 text-white rounded-md flex items-center hover:bg-red-900 transition"
              >
                ← Back to list
              </button>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="relative bg-red-50 p-5 rounded-lg shadow-md border border-red-100 h-auto">
                    <h2 className="text-2xl font-bold text-red-900 mb-4">
                      {selectedSake.name}
                    </h2>
                    {selectedSake.special && (
                      <div className="bg-red-600 text-white py-1 px-3 rounded-full text-sm font-bold inline-block mb-3">
                        {selectedSake.special}
                      </div>
                    )}
                  
                  <div className="mt-4 bg-white p-4 rounded-lg border border-red-100">
                    <h3 className="font-bold text-red-900 text-lg border-b border-red-200 pb-2 mb-3">
                      Quick Info
                    </h3>
                    <div className="space-y-2">
                      <p>
                        <span className="font-semibold text-gray-700">Region: </span>
                        {selectedSake.region}
                      </p>
                      <p>
                        <span className="font-semibold text-gray-700">Price: </span>
                        ¥{selectedSake.price} ({selectedSake.volume})
                      </p>
                      {selectedSake.alcoholContent && (
                        <p>
                          <span className="font-semibold text-gray-700">Alcohol: </span>
                          {selectedSake.alcoholContent}
                        </p>
                      )}
                      {selectedSake.riceType && (
                        <p>
                          <span className="font-semibold text-gray-700">Rice: </span>
                          {selectedSake.riceType}
                        </p>
                      )}
                      {selectedSake.polishingRatio && (
                        <p>
                          <span className="font-semibold text-gray-700">Polish: </span>
                          {selectedSake.polishingRatio}
                        </p>
                      )}
                    </div>
                  </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-red-900 mb-2">
                    About this Sake
                  </h2>
                  <p className="text-xl text-gray-700 mb-4">
                    {selectedSake.nameJP && (
                      <span className="text-gray-600">({selectedSake.nameJP})</span>
                    )}
                  </p>
                  
                  <div className="mt-4 space-y-6">
                    <div className="bg-white p-5 rounded-lg border border-gray-200">
                      <h3 className="font-bold text-gray-800 text-lg border-b border-gray-200 pb-2 mb-3">
                        Characteristics
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{selectedSake.characteristics}</p>
                    </div>
                    
                    {selectedSake.tasting && (
                      <div className="bg-white p-5 rounded-lg border border-gray-200">
                        <h3 className="font-bold text-gray-800 text-lg border-b border-gray-200 pb-2 mb-3">
                          Tasting Notes
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{selectedSake.tasting}</p>
                      </div>
                    )}
                    
                    {selectedSake.pairing && (
                      <div className="bg-white p-5 rounded-lg border border-gray-200">
                        <h3 className="font-bold text-gray-800 text-lg border-b border-gray-200 pb-2 mb-3">
                          Food Pairing
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{selectedSake.pairing}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Browse Our Selection
              </h2>
              
              <div className="flex space-x-2">
                <button 
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1 rounded font-medium transition ${
                    filter === 'all' 
                      ? 'bg-red-800 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  All
                </button>
                <button 
                  onClick={() => setFilter('standard')}
                  className={`px-3 py-1 rounded font-medium transition ${
                    filter === 'standard' 
                      ? 'bg-red-800 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  Standard
                </button>
                <button 
                  onClick={() => setFilter('premium')}
                  className={`px-3 py-1 rounded font-medium transition ${
                    filter === 'premium' 
                      ? 'bg-red-800 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  Premium
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSakes.map((sake) => (
                <div 
                  key={sake.id}
                  onClick={() => handleSelectSake(sake)}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition border border-gray-200 relative"
                >
                  <div className="relative p-4 bg-red-50 border-b border-gray-200">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-red-900">
                        {sake.name}
                      </h3>
                      {sake.special && (
                        <div className="bg-red-600 text-white py-1 px-2 rounded-full text-xs font-bold">
                          {sake.special}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-gray-700">{sake.region}</span>
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                        ¥{sake.price}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <span>{sake.volume}</span>
                    </div>
                    <p className="mt-2 text-gray-600 text-sm line-clamp-2">{sake.characteristics.substring(0, 100)}...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p className="text-sm">
          © 2025 Japanese Sake Explorer - Discover the finest sake from Japan
        </p>
      </footer>
    </div>
  );
};

export default SakeApp;
