import React from 'react';

const CtaSection = ({ district }) => (
  <div className="my-12 p-8 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg">
    <h2 className="text-3xl font-bold mb-4">Planning an Event in {district}?</h2>
    <p className="mb-6 text-lg">
      If you are booking any of these halls in {district}, GG Caterers can provide customized catering, décor, and event management services to make your celebration memorable.
    </p>
    <p className="text-lg">
      Contact us at <a href="tel:+916005807488" className="font-bold underline hover:text-orange-200">+91-60058-07488</a> or visit our <a href="/#contact" className="font-bold underline hover:text-orange-200">website</a> for a free quote.
    </p>
  </div>
);

const Conclusion = () => (
  <>
    <p>Choosing the right marriage hall is the first step to a perfect wedding, but the right catering partner brings the celebration to life. A great venue combined with exquisite food and seamless event management creates an unforgettable experience for you and your guests.</p>
    <p>GG Caterers is proud to be one of the best caterers and event organizers in Jammu & Kashmir. We are committed to providing exceptional service, delicious food, and beautiful décor to make your special day perfect.</p>
    <h3 className="font-bold text-2xl mt-6 mb-4">Ready to Plan Your Dream Event?</h3>
    <p>Contact GG Caterers today! Let's create magic together.</p>
    <p>📞 Phone: <a href="tel:+916005807488">+91-60058-07488</a></p>
    <p>🌐 Website: <a href="https://ggcaterers.com">ggcaterers.com</a></p>
  </>
);

const kathuaHalls = [
  { name: "Khajuria Farms, Banquet & Resorts", location: "Mankey Talab, near Ashoka College, Kathua", contact: "+91-60058-07488", capacity: "Large lawn + banquet, suitable for weddings", why: "Resort-style venue, highly rated for its ambiance and space.", photo: "Available online" },
  { name: "The Grand-Hotel & Restaurant", location: "College Road, Kathua", contact: "Available online", capacity: "Multiple halls for different gathering sizes", why: "Modern amenities and professional service.", photo: "Available online" },
  { name: "Coral-Hotel & Restaurant", location: "Near DC Office, Kathua", contact: "Available online", capacity: "Ideal for medium-sized gatherings and receptions", why: "Known for its food and convenient location.", photo: "Available online" },
  { name: "U R Hotel", location: "Jammu-Pathankot National Highway, Kathua", contact: "Available online", capacity: "Spacious banquet for large events", why: "Easily accessible and offers ample parking.", photo: "Available online" },
  { name: "The Shaurya's Hotel & Restaurant", location: "Kalibari, Kathua", contact: "Available online", capacity: "Good for pre-wedding functions and parties", why: "Cozy atmosphere and good service.", photo: "Available online" },
  { name: "Hotel Orchard Green", location: "Parliwand, Kathua", contact: "Available online", capacity: "Banquet and lawn available", why: "Offers a blend of indoor and outdoor celebration spaces.", photo: "Available online" },
  { name: "Staywell Hotel & Restaurant", location: "National Highway, near Nagri Bus Stand, Kathua", contact: "Available online", capacity: "Suitable for receptions and corporate events", why: "Well-maintained and professional staff.", photo: "Available online" },
  { name: "Hotel Divine", location: "College Road, Kathua", contact: "Available online", capacity: "Perfect for intimate gatherings", why: "Offers a comfortable and elegant setting.", photo: "Available online" },
];

const jammuHalls = [
  { name: "Pari Mahal", location: "Near Army Public School Kaluchak, Greater Kailash, Kunjwani, Jammu", contact: "+91-9419198364", capacity: "Lawn + Hall; Seating ~700, Max Capacity ~1500", why: "Large hall + lawn combo; good for big weddings & events", photo: "Available online" },
  { name: "Royal Park Banquet", location: "Greater Kailash, Jammu", contact: "Available online", capacity: "Medium-Large", why: "Popular banquet hall, good reviews & accessible location", photo: "Available online" },
  { name: "Blue Moon Banquets", location: "Bari Brahmana, Jammu", contact: "Available via venue listing sites", capacity: "Medium size", why: "One of the frequently booked venues in Jammu offering decent amenities", photo: "Available online" },
  { name: "Kingsville Banquet & Resort", location: "Trikuta Nagar, Jammu", contact: "Available via TheWeddingCompany listing", capacity: "Large banquet & resort style", why: "Resort style features plus banquet; good for destination weddings", photo: "Available online" },
  { name: "Majestic Grand", location: "Mishriwala, Jammu", contact: "Via booking sites", capacity: "Large", why: "Well-kept banquet with strong reputation", photo: "Available online" },
  { name: "KC Emporia-Luxury Banquets & Resorts", location: "Rajpura Chungi, Jammu", contact: "Via TheWeddingCompany", capacity: "Large", why: "Luxury feel hall & resort amenities", photo: "Available online" },
  { name: "Grand Dreams Banquet Jammu", location: "Sainik Colony, Jammu", contact: "Via wedding venues listing", capacity: "Medium-Large", why: "Well located, good reviews", photo: "Available online" },
  { name: "Hari Niwas Palace", location: "Karan Nagar, Jammu", contact: "Via user reviews / listings", capacity: "Medium", why: "Heritage feel, decent hall for more traditional weddings", photo: "Available online" },
  { name: "Garden Estate", location: "Trikuta Nagar / Satwari area, Jammu", contact: "Via venue sites", capacity: "Medium", why: "Popular choice among mid-budget weddings", photo: "Available online" },
  { name: "The Address Banquet", location: "Near Army Gate, Kalu Chak, Jammu", contact: "Justdial / local listings", capacity: "Medium-Large", why: "Accessible location, frequently hired banquet hall", photo: "Available online" }
];

const sambaHalls = [
  { name: "Satyam R.K Resort", location: "National Highway NH44, Jatwal, Opposite HP Petrol Pump, Jammu-Samba", contact: "Via listing on Shuru / Local sources", capacity: "Large lawn / banquet", why: "Resort style, good reviews", photo: "Available online" },
  { name: "M.K Farms", location: "Near Toll Plaza, Sukhyaini Talab, Sarore, Jammu-Samba region", contact: "Via Shuru listing", capacity: "Medium-Large", why: "Garden style, popular among local weddings", photo: "Available online" },
  { name: "Balaji Banquet Hall", location: "Gowal Patli Morh, Samba", contact: "Local listings", capacity: "Medium", why: "Local banquet hall for mid-sized gatherings", photo: "Available online" },
  { name: "Apna Banquet Hall", location: "National Highway, Jakh, near Lord Shiva Temple, Vijaypur, Samba", contact: "+91-70069-74236", capacity: "Medium", why: "Well-known hall in Samba, accessible location", photo: "Available online" },
  { name: "Tera Farms", location: "Nanak Chak, Samba / Vijaypur region", contact: "Local listing via Justdial", capacity: "Lawn / open wedding ground style", why: "Open-air venue; ideal for lawns or large gatherings", photo: "Available online" },
  // Less available halls to reliably fill 10 for Samba with current public data
];

const srinagarHalls = [
  { name: "Nikkah Marriage Hall", location: "Rawalpora, National Highway Bypass, Srinagar, JK 190005", contact: "+91-94695-97131", capacity: "Multiple halls + rooms; large hall & AC; ample parking", why: "Well-established hall, multiple halls, makes large weddings easier", photo: "Available online" },
  { name: "Forever", location: "Barbar Shah, Baghwanpora, Srinagar, Jammu & Kashmir 190001", contact: "Available via Indiainfo listing", capacity: "Medium", why: "Good central location near Lal Chowk; well known locally", photo: "Available online" },
  { name: "Marriage Hall Nalbal", location: "Nalbandpora Bridge, Mundibal, Vicharnag, Srinagar", contact: "Via Justdial / local sites", capacity: "Medium", why: "Community hall style; accessible to many suburbs", photo: "Available online" },
  { name: "Nigeen Club", location: "Hazratbal Road, Nagin Bagh, Srinagar, JK 190006", contact: "Via local listings", capacity: "Large club banquet facilities", why: "Club-venue style hall; good ambience and space", photo: "Available online" },
  { name: "Banquet by Hotel Six Seasons", location: "Nowgam, Srinagar, Jammu & Kashmir 190015", contact: "Listing via Banquet Halls directories", capacity: "Large", why: "Hotel banquet; likely good amenities & services", photo: "Available online" },
  { name: "Samanbal Marriage Hall", location: "Karapura, Rainawari, Srinagar", contact: "Via directory sites", capacity: "Medium", why: "Local hall for mid-size weddings", photo: "Available online" },
  { name: "Government Illahi Bagh Marriage Hall", location: "Illahi Bagh Chowk, Dargah Road, Buchpora, Srinagar", contact: "Via local listing", capacity: "Medium-Large", why: "Government hall; known, reliable & comparatively affordable", photo: "Available online" },
  { name: "Allama Iqbal Marriage Hall", location: "NH1A, Rawalpora Housing Colony, Rawalpora, Srinagar, JK 190005", contact: "Directory listings", capacity: "Medium", why: "Serves many suburbs; used often for community weddings", photo: "Available online" },
  { name: "Baghwanpora Marriage Hall", location: "Sathoo Barbar Shah Road, Baghwanpora, Srinagar, Jammu & Kashmir 190001", contact: "Via local sources", capacity: "Medium", why: "Community hall in good area; recognized among locals", photo: "Available online" },
  { name: "Haveli Regale by Gulzar Hospitality", location: "Badami Bagh Cantonment, Sonwar-Shiv Pora Link Road, Shiv Pora, Srinagar, Jammu & Kashmir 190004", contact: "Via directory", capacity: "Medium-Large", why: "Higher end hall with hospitality brand; good ambience", photo: "Available online" }
];

const HallList = ({ halls }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
    {halls.map((hall, index) => (
        <div key={index} className="mb-4 p-6 border rounded-xl shadow-sm bg-white">
          <h3 className="font-bold text-2xl mb-3">{index + 1}. {hall.name}</h3>
          <ul className="list-none space-y-2">
            <li><span className="font-semibold">📍 Location:</span> {hall.location}</li>
            <li><span className="font-semibold">☎️ Contact:</span> {hall.contact}</li>
            <li><span className="font-semibold">💒 Capacity:</span> {hall.capacity}</li>
            <li><span className="font-semibold">✨ Why choose:</span> {hall.why}</li>
            <li><span className="font-semibold">🖼️ Photo:</span> {hall.photo}</li>
          </ul>
      </div>
    ))}
  </div>
);

export const blogPosts = [
  {
    slug: 'top-marriage-halls-in-kathua',
    title: 'Top Marriage Halls in Kathua for Weddings & Events',
    excerpt: 'Discover the best marriage halls, wedding venues, and banquet halls in Kathua. Plan your perfect event with our guide and book GG Caterers for an unforgettable experience.',
    content: (
      <>
        <p>Kathua, known for its serene beauty and cultural heritage, is a wonderful place to host weddings and special events. Choosing the right venue is crucial for a memorable celebration. This blog covers the most famous marriage halls in Kathua to help you find the perfect spot for your big day.</p>
        <h2 className="mt-8 mb-6">List of Famous Marriage Halls in Kathua</h2>
        <p className="mb-6">Here are some of the top-rated wedding venues and banquet halls in Kathua, perfect for any celebration.</p>
        <HallList halls={kathuaHalls} />
        <CtaSection district="Kathua" />
        <h2 className="mt-8 mb-6">Conclusion: Your Perfect Event Partner</h2>
        <Conclusion />
      </>
    ),
  },
  {
    slug: 'top-marriage-halls-in-jammu',
    title: 'Top Marriage Halls in Jammu for Weddings & Events',
    excerpt: 'Explore the finest marriage halls, wedding venues, and banquet halls in Jammu. Let GG Caterers handle the food and decor to make your event spectacular.',
    content: (
      <>
        <p>Jammu, the City of Temples, is a prime destination for grand weddings and events. With a mix of traditional and modern venues, there's something for everyone. This guide will walk you through the best marriage halls in Jammu.</p>
        <h2 className="mt-8 mb-6">List of Famous Marriage Halls in Jammu</h2>
        <p className="mb-6">This is a placeholder list. We are gathering information for the best venues in Jammu. Stay tuned!</p>
        <HallList halls={jammuHalls} />
        <CtaSection district="Jammu" />
        <h2 className="mt-8 mb-6">Conclusion: Your Perfect Event Partner</h2>
        <Conclusion />
      </>
    ),
  },
  {
    slug: 'top-marriage-halls-in-srinagar',
    title: 'Top Marriage Halls in Srinagar for Weddings & Events',
    excerpt: 'Find breathtaking marriage halls and wedding venues in Srinagar. Complement the beauty of Kashmir with exquisite catering from GG Caterers.',
    content: (
      <>
        <p>Srinagar, the paradise on Earth, offers some of the most picturesque settings for a dream wedding. Imagine tying the knot with the stunning Dal Lake or majestic mountains as your backdrop. Here are some of the best wedding venues in Srinagar.</p>
        <h2 className="mt-8 mb-6">List of Famous Marriage Halls in Srinagar</h2>
        <p className="mb-6">This is a placeholder list. We are gathering information for the best venues in Srinagar. Stay tuned!</p>
        <HallList halls={srinagarHalls} />
        <CtaSection district="Srinagar" />
        <h2 className="mt-8 mb-6">Conclusion: Your Perfect Event Partner</h2>
        <Conclusion />
      </>
    ),
  },
  {
    slug: 'top-marriage-halls-in-samba',
    title: 'Top Marriage Halls in Samba for Weddings & Events',
    excerpt: 'Find elegant marriage halls and wedding venues in Samba. Make your celebrations memorable with exquisite catering from GG Caterers.',
    content: (
      <>
        <p>Samba District, often called the “Gateway of Jammu and Kashmir,” is known for its vibrant culture, historical forts, and welcoming atmosphere. Located along the Jammu–Pathankot National Highway, Samba has become a growing destination for weddings and grand celebrations. With a mix of modern banquet halls, open-air farms, and well-connected venues, it offers the perfect blend of tradition and convenience.</p>
        <h2 className="mt-8 mb-6">List of Famous Marriage Halls in Samba</h2>
        <p className="mb-6">This is a placeholder list. We are gathering information for the best venues in Samba. Stay tuned!</p>
        <HallList halls={sambaHalls} />
        <CtaSection district="Srinagar" />
        <h2 className="mt-8 mb-6">Conclusion: Your Perfect Event Partner</h2>
        <Conclusion />
      </>
    ),
  },
  {
    slug: 'best-catering-service-in-jammu',
    title: 'जम्मू में बेस्ट कैटरिंग सर्विस – जीजी कैटरर्स (GG Caterers)',
    excerpt: 'जम्मू में आपकी हर ज़रूरत के लिए बेहतरीन कैटरिंग सर्विस: शादियों, रोका, रिंग सेरेमनी, ठका समारोह और कॉर्पोरेट इवेंट्स के लिए GG Caterers।',
    content: (
      <>
        <p className="mb-4 text-lg leading-relaxed">
          जम्मू, मंदिरों के शहर के नाम से प्रसिद्ध, अपने शानदार समारोहों और भव्य आयोजनों के लिए जाना जाता है। चाहे शादी हो, कोई पारिवारिक उत्सव या कॉर्पोरेट इवेंट, खाने का महत्व सर्वोपरि होता है। एक अच्छी <span className="font-semibold">कैटरिंग सर्विस</span> आपके कार्यक्रम को यादगार बना सकती है, और यहीं पर GG Caterers जम्मू में अपनी बेहतरीन सेवाएं प्रदान करता है।
        </p>

        <h2 className="mt-8 mb-6 text-3xl font-bold">जम्मू में आयोजनों में कैटरिंग का महत्व</h2>
        <p className="mb-4 text-lg leading-relaxed">
          किसी भी आयोजन की सफलता में खाने की भूमिका महत्वपूर्ण होती है। स्वादिष्ट भोजन मेहमानों के मूड को खुशनुमा बनाता है और उन्हें आपके कार्यक्रम की अच्छी यादें देता है। जम्मू में, जहाँ मेहमान नवाज़ी को बहुत महत्व दिया जाता है, वहाँ एक भरोसेमंद और कुशल <span className="font-semibold">फूड कैटरर्स</span> चुनना बेहद ज़रूरी है। GG Caterers जम्मू में यह सुनिश्चित करता है कि आपके मेहमान उंगलियां चाटते रह जाएं!
        </p>

        <h2 className="mt-8 mb-6 text-3xl font-bold">GG Caterers: स्वाद, गुणवत्ता और प्रोफेशनल सर्विस का संगम</h2>
        <p className="mb-4 text-lg leading-relaxed">
          GG Caterers पिछले 15 से अधिक वर्षों से जम्मू और कश्मीर में <span className="font-semibold">बेस्ट कैटरिंग सर्विस</span> प्रदान करने में अग्रणी रहा है। हमारी पहचान सिर्फ स्वादिष्ट भोजन ही नहीं, बल्कि त्रुटिहीन सर्विस, स्वच्छता और ग्राहक संतुष्टि है। हम हर व्यंजन को जुनून के साथ बनाते हैं, यह सुनिश्चित करते हुए कि प्रत्येक बाइट एक यादगार अनुभव हो।
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg leading-relaxed">
          <li>
            <strong>अद्वितीय स्वाद:</strong> हमारे शेफ पारंपरिक और आधुनिक व्यंजनों को एक साथ मिलाकर ऐसे स्वाद बनाते हैं जो हर किसी को पसंद आते हैं।
          </li>
          <li>
            <strong>उच्च गुणवत्ता:</strong> हम केवल सबसे ताज़ी और बेहतरीन सामग्री का उपयोग करते हैं।
          </li>
          <li>
            <strong>प्रोफेशनल स्टाफ:</strong> हमारी टीम प्रशिक्षित और अनुभवी है, जो आपके मेहमानों की ज़रूरतों का ध्यान रखती है।
          </li>
        </ul>

        <h2 className="mt-8 mb-6 text-3xl font-bold">हमारी विशेष कैटरिंग सेवाएं</h2>
        <p className="mb-4 text-lg leading-relaxed">
          GG Caterers आपकी हर ज़रूरत के लिए व्यापक <span className="font-semibold">इवेंट कैटरर्स</span> सेवाएं प्रदान करता है। हम समझते हैं कि हर इवेंट अद्वितीय होता है, और हम आपकी आवश्यकताओं के अनुरूप अनुकूलित मेनू और पैकेज प्रदान करते हैं।
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg leading-relaxed">
          <li>
            <strong>मैरिज कैटरर्स:</strong> जम्मू में आपकी शादी को एक शाही दावत में बदलने के लिए हम सबसे अच्छे <span className="font-semibold">मैरिज कैटरर्स</span> हैं। मेहंदी से लेकर रिसेप्शन तक, हम हर समारोह के लिए खास मेनू और थीम प्रदान करते हैं।
          </li>
          <li>
            <strong>रोका कैटरर्स:</strong> रोका समारोह एक नए रिश्ते की शुरुआत का प्रतीक है। हमारे <span className="font-semibold">रोका कैटरर्स</span> आपके इस विशेष दिन को स्वादिष्ट भोजन के साथ और भी मीठा बना देंगे।
          </li>
          <li>
            <strong>रिंग सेरेमनी कैटरर्स:</strong> अपनी रिंग सेरेमनी को GG Caterers के साथ शानदार बनाएं। हमारे <span className="font-semibold">रिंग सेरेमनी कैटरर्स</span> यह सुनिश्चित करते हैं कि भोजन उतना ही यादगार हो जितना कि अंगूठी का आदान-प्रदान।
          </li>
          <li>
            <strong>ठका सेरेमनी कैटरर्स:</strong> ठका सेरेमनी की परंपरा को बनाए रखते हुए, हमारे <span className="font-semibold">ठका सेरेमनी कैटरर्स</span> स्वादिष्ट व्यंजनों के साथ इस शुभ अवसर को और भी खास बनाते हैं।
          </li>
          <li>
            <strong>कॉर्पोरेट इवेंट्स:</strong> मीटिंग, कॉन्फ़्रेंस या ऑफिस पार्टी हो, हम प्रोफेशनल और प्रभावशाली कैटरिंग सेवाएं प्रदान करते हैं जो आपके ब्रांड की छवि को दर्शाती हैं।
          </li>
          <li>
            <strong>सामाजिक समारोह:</strong> जन्मदिन की पार्टी से लेकर वर्षगांठ तक, हम आपके सभी सामाजिक आयोजनों के लिए अनुकूलित कैटरिंग समाधान प्रदान करते हैं।
          </li>
        </ul>

        <h2 className="mt-8 mb-6 text-3xl font-bold">जम्मू और आसपास के इलाकों में GG Caterers की खासियत</h2>
        <p className="mb-4 text-lg leading-relaxed">
          GG Caterers को जम्मू में सबसे भरोसेमंद <span className="font-semibold">कैटरिंग सर्विस</span> प्रदाता क्यों माना जाता है?
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg leading-relaxed">
          <li>
            <strong>ताज़ा और पौष्टिक भोजन:</strong> हम हमेशा ताज़ी और स्थानीय रूप से sourced सामग्री का उपयोग करते हैं।
          </li>
          <li>
            <strong>उत्कृष्ट स्टाफ सर्विस:</strong> हमारा विनम्र और कुशल स्टाफ यह सुनिश्चित करता है कि आपके मेहमानों को बेहतरीन सेवा मिले।
          </li>
          <li>
            <strong>कठोर स्वच्छता मानक:</strong> हम भोजन की तैयारी और परोसने में उच्चतम स्वच्छता मानकों का पालन करते हैं।
          </li>
          <li>
            <strong>ऑन-टाइम डिलीवरी:</strong> हम समय के पाबंद हैं, और आपका भोजन हमेशा तय समय पर ताज़ा और गर्म परोसा जाएगा।
          </li>
          <li>
            <strong>अनुकूलित मेनू:</strong> आपकी पसंद और बजट के अनुसार मेनू बनाने की सुविधा।
          </li>
        </ul>

        <div className="my-12 p-8 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4">आज ही GG Caterers से बुकिंग करें!</h2>
          <p className="mb-6 text-lg">
            अपने अगले इवेंट को एक शानदार culinary अनुभव में बदलना चाहते हैं? GG Caterers से संपर्क करें और जानें कि हम कैसे आपके सपनों को हकीकत में बदल सकते हैं। हमारी विशेषज्ञ टीम आपकी सभी कैटरिंग आवश्यकताओं के लिए एक मुफ्त परामर्श और अनुकूलित कोटेशन प्रदान करने के लिए तैयार है।
          </p>
          <p className="text-lg">
            अभी कॉल करें: <a href="tel:+916005807488" className="font-bold underline hover:text-orange-200">+91-60058-07488</a> या हमारी वेबसाइट पर जाएं: <a href="https://ggcaterers.com" className="font-bold underline hover:text-orange-200">ggcaterers.com</a>
          </p>
        </div>

        <h2 className="mt-8 mb-6 text-3xl font-bold">निष्कर्ष: GG Caterers – जहाँ स्वाद मिलता है गुणवत्ता से।</h2>
        <p className="mb-4 text-lg leading-relaxed">
          जम्मू में कैटरिंग सर्विस चुनना एक महत्वपूर्ण निर्णय है, और GG Caterers के साथ, आप निश्चिंत रह सकते हैं कि आपका इवेंट सफल होगा। हम न केवल भोजन परोसते हैं, बल्कि हम एक अनुभव प्रदान करते हैं – ऐसा अनुभव जो आपके मेहमानों को लंबे समय तक याद रहेगा। गुणवत्ता, स्वाद और बेहतरीन सर्विस के लिए, GG Caterers पर भरोसा करें।
        </p>
        <p className="font-bold text-xl text-center mt-8">GG Caterers – जहाँ स्वाद मिलता है गुणवत्ता से।</p>
      </>
    ),
  },
];