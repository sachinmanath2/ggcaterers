import React from 'react';
import { Heart, Globe, Briefcase, PartyPopper, UtensilsCrossed, Camera, Gem, Circle as Ring } from 'lucide-react';

export const servicesData = [
  {
    slug: 'indian-wedding-planning',
    title: 'Indian Wedding Planning',
    icon: Heart,
    color: 'from-pink-500 to-rose-600',
    excerpt: 'Bespoke wedding planning to celebrate your traditions with grandeur and elegance.',
    imageText: 'Colorful Indian wedding mandap decoration with flowers',
    content: (
      <>
        <p>An Indian wedding is more than just a ceremony; it's a grand festival of love, tradition, and family. At GG Caterers, we specialize in <strong>Indian Wedding Planning in Jammu and Kashmir</strong>, transforming your dream wedding into a breathtaking reality. We understand the cultural nuances and intricate details that make each wedding unique, from a vibrant Punjabi celebration to a serene Kashmiri ceremony.</p>
        <h2 className="mt-8 mb-4 text-2xl font-bold">Why Choose GG Caterers for Your Wedding?</h2>
        <p>As leading <strong>event organizers in Jammu</strong>, we bring over 15 years of experience to the table. Our local knowledge of Jammu, Kathua, Udhampur, and Srinagar allows us to source the best venues, vendors, and materials. We blend professionalism with a personal touch, ensuring every aspect of your wedding, from the food to the decor, is nothing short of perfection. Our reputation as the <strong>best catering services in Jammu</strong> means your guests will be treated to an unforgettable culinary journey.</p>
        <h3 className="mt-6 mb-3 text-xl font-semibold">Our Key Wedding Planning Services:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Theme Design & Decoration:</strong> Crafting stunning themes, from royal and rustic to modern and elegant.</li>
          <li><strong>Venue Selection:</strong> Finding the perfect banquet hall, resort, or outdoor space in Jammu & Kashmir.</li>
          <li><strong>Exquisite Catering:</strong> Customized menus featuring traditional and contemporary cuisines, handled by top <strong>wedding caterers in Jammu</strong>.</li>
          <li><strong>Entertainment & Music:</strong> Arranging DJs, live bands, and traditional folk performers.</li>
          <li><strong>Guest Management:</strong> Ensuring your guests feel welcomed and comfortable throughout the celebrations.</li>
          <li><strong>Ritual Coordination:</strong> Seamless management of all ceremonies, from Mehendi and Sangeet to the Wedding and Reception.</li>
        </ul>
        <h3 className="mt-6 mb-3 text-xl font-semibold">The GG Caterers Advantage:</h3>
        <p>Enjoy a completely hassle-free planning experience. We offer end-to-end management, allowing you to relax and immerse yourself in the joy of your wedding. Our custom packages are designed to fit your vision and budget, providing unparalleled value without compromising on quality. Trust <strong>GG Caterers Jammu</strong> to handle every detail with precision and care.</p>
      </>
    ),
    faq: [
      {
        question: "Do you plan weddings outside of Jammu city?",
        answer: "Yes, absolutely! We are experts in planning weddings across Jammu & Kashmir, including key locations like Kathua, Udhampur, and Srinagar. We handle all logistics for out-of-station events."
      },
      {
        question: "Can you customize the catering menu for our wedding?",
        answer: "Of course. Customization is our specialty. We work with you to create a bespoke menu that reflects your tastes and traditions, whether you want authentic local cuisine, international dishes, or a fusion menu."
      },
      {
        question: "How far in advance should we book your wedding planning services?",
        answer: "We recommend booking us at least 6 to 12 months in advance, especially for popular wedding dates, to ensure we can secure the best venues and vendors for you."
      }
    ]
  },
  {
    slug: 'destination-weddings',
    title: 'Destination Weddings',
    icon: Globe,
    color: 'from-teal-500 to-cyan-600',
    excerpt: 'Celebrate your love in a breathtaking location with our expert destination wedding planning.',
    imageText: 'Scenic mountain view with a wedding arch setup',
    content: (
      <>
        <p>Escape the ordinary and say "I do" against a backdrop of stunning landscapes. GG Caterers specializes in planning unforgettable <strong>Destination Weddings in Jammu and Kashmir</strong>. Whether you dream of a serene wedding by the Dal Lake in Srinagar or a majestic celebration amidst the hills of Patnitop, we bring your vision to life. A destination wedding is an intimate and immersive experience for you and your guests.</p>
        <h2 className="mt-8 mb-4 text-2xl font-bold">Your Dream Destination Wedding with GG Caterers</h2>
        <p>As premier <strong>event organizers in Jammu</strong>, our expertise extends across the most beautiful locales in the region. We handle all the logistics, so you can focus on making memories. Our team’s deep-rooted knowledge of Jammu, Kathua, and especially the scenic wonders of Srinagar, makes us the perfect partner for your destination wedding. We combine spectacular venues with the <strong>best catering services in Jammu</strong> to create a truly magical event.</p>
        <h3 className="mt-6 mb-3 text-xl font-semibold">Our Destination Wedding Offerings:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Venue Scouting & Booking:</strong> Securing exclusive resorts, houseboats, and scenic properties.</li>
          <li><strong>Travel & Accommodation Logistics:</strong> Managing guest travel, transfers, and comfortable stays.</li>
          <li><strong>Local Vendor Management:</strong> Coordinating with the best local photographers, decorators, and entertainers.</li>
          <li><strong>Gourmet Location-Based Catering:</strong> Crafting menus that can be served anywhere, bringing gourmet dining to your chosen destination.</li>
          <li><strong>Guest Experiences:</strong> Planning local tours and activities for your guests to enjoy.</li>
        </ul>
        <h3 className="mt-6 mb-3 text-xl font-semibold">Benefits of a GG Caterers Destination Wedding:</h3>
        <p>Planning a wedding from afar can be daunting, but with <strong>GG Caterers Jammu</strong>, it's a seamless and enjoyable process. We provide a single point of contact for all your needs, offering custom packages that cover every detail. Enjoy a stress-free celebration where every moment is curated to perfection.</p>
      </>
    ),
    faq: [
        {
          question: "What are the best locations for a destination wedding in J&K?",
          answer: "Jammu & Kashmir offers stunning options. Srinagar, with its lakes and gardens, is perfect for a romantic, scenic wedding. Patnitop offers majestic mountain views, while places around Jammu provide a blend of tradition and accessibility."
        },
        {
          question: "How do you handle catering for a remote destination?",
          answer: "We have a robust logistical network and experienced teams capable of setting up a complete professional kitchen anywhere. We ensure the food is fresh, delicious, and served impeccably, no matter the location."
        },
        {
          question: "Can you manage guest travel and accommodation?",
          answer: "Yes, we offer complete end-to-end services, which include managing all travel logistics and booking comfortable accommodations for your guests, ensuring they have a wonderful experience."
        }
      ]
  },
  {
    slug: 'corporate-events',
    title: 'Corporate Events',
    icon: Briefcase,
    color: 'from-blue-500 to-indigo-600',
    excerpt: 'Professional and polished event management for your conferences, seminars, and launches.',
    imageText: 'Modern conference room setup for a corporate event',
    content: (
      <>
        <p>In the corporate world, a well-executed event can make a lasting impression on clients, partners, and employees. GG Caterers offers professional management for <strong>Corporate Events in Jammu</strong> and Srinagar. From large-scale conferences and product launches to intimate business dinners, we deliver flawless events that reflect your company's brand and standards.</p>
        <h2 className="mt-8 mb-4 text-2xl font-bold">Why GG Caterers for Your Corporate Needs?</h2>
        <p>As experienced <strong>event organizers in Jammu</strong>, we understand the importance of precision, professionalism, and punctuality. Our team is adept at managing the unique demands of corporate functions. We provide sophisticated solutions and ensure your event runs smoothly. Our renowned <strong>catering services in Jammu</strong> offer a wide range of culinary options, from formal seated dinners to stylish cocktail receptions, impressing your guests and elevating your event.</p>
        <h3 className="mt-6 mb-3 text-xl font-semibold">Our Corporate Event Services Include:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Conferences & Seminars:</strong> Full logistical support including AV equipment, seating, and stage setup.</li>
          <li><strong>Product Launches:</strong> Creating a buzz with creative themes and professional presentations.</li>
          <li><strong>Gala Dinners & Award Ceremonies:</strong> Elegant setups with gourmet dining and seamless service.</li>
          <li><strong>Team-Building Events:</strong> Organizing engaging activities and catering to match.</li>
          <li><strong>Exhibitions & Trade Shows:</strong> Booth design, management, and hospitality services.</li>
        </ul>
        <h3 className="mt-6 mb-3 text-xl font-semibold">A Partnership for Success:</h3>
        <p>Partnering with <strong>GG Caterers Jammu</strong> means you can focus on your business objectives while we handle the complexities of event management. We offer custom packages to meet your specific goals and budget, ensuring a high return on your investment. Let us help you host a corporate event that is both successful and memorable.</p>
      </>
    ),
    faq: [
        {
          question: "What types of corporate events do you manage?",
          answer: "We manage a wide range of corporate events, including conferences, seminars, product launches, gala dinners, award ceremonies, team-building activities, and exhibitions in Jammu and Srinagar."
        },
        {
          question: "Can you provide catering for a multi-day conference?",
          answer: "Absolutely. We specialize in providing comprehensive catering for multi-day events, including breakfast, lunch, high-tea, and dinner, ensuring variety and quality throughout the conference."
        },
        {
          question: "Do you provide technical equipment like projectors and sound systems?",
          answer: "Yes, as part of our full-service event management, we arrange for all necessary audio-visual (AV) equipment, staging, and technical support required for your corporate event."
        }
      ]
  },
  {
    slug: 'social-events',
    title: 'Social Events',
    icon: PartyPopper,
    color: 'from-purple-500 to-pink-600',
    excerpt: 'Celebrate life’s special moments with our creative and fun event planning services.',
    imageText: 'Festive birthday party decoration with balloons and cake',
    content: (
      <>
        <p>Life is full of moments worth celebrating. At GG Caterers, we plan and manage memorable <strong>Social Events in Jammu and Kashmir</strong>. Whether it's a milestone birthday, a cherished anniversary, a baby shower, or a festive gathering, we add a touch of magic to your celebration. We believe every party should be a unique reflection of its host and a joyous occasion for every guest.</p>
        <h2 className="mt-8 mb-4 text-2xl font-bold">Celebrate in Style with GG Caterers</h2>
        <p>Our creative team of <strong>event organizers in Jammu</strong> loves to bring parties to life. We work with you to develop a unique theme, design stunning decor, and create a vibrant atmosphere. The heart of any celebration is the food, and with the <strong>best catering services in Jammu</strong>, we promise a menu that will delight your guests. From fun live-cooking stations to elegant buffet spreads, our food is always a highlight.</p>
        <h3 className="mt-6 mb-3 text-xl font-semibold">We Plan All Kinds of Social Events:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Birthday Parties:</strong> Themed parties for all ages, from kids to adults.</li>
          <li><strong>Anniversary Celebrations:</strong> Elegant and romantic events to honor your milestone.</li>
          <li><strong>Festive Parties:</strong> Grand celebrations for Diwali, Eid, Christmas, and other festivals.</li>
          <li><strong>Baby Showers & Gender Reveals:</strong> Cute themes and fun activities for the parents-to-be.</li>
          <li><strong>Get-Togethers:</strong> Casual or formal gatherings to connect with friends and family.</li>
        </ul>
        <h3 className="mt-6 mb-3 text-xl font-semibold">Effortless and Fun Planning:</h3>
        <p>With <strong>GG Caterers Jammu</strong>, planning your social event is as enjoyable as the party itself. We handle everything from start to finish, offering custom packages that fit your needs and budget. You get to be a guest at your own party while we take care of the details, ensuring a stress-free and unforgettable celebration.</p>
      </>
    ),
    faq: [
        {
          question: "Can you plan a themed birthday party?",
          answer: "Yes! We love creating themed parties. Whether it's a superhero theme for a child or a retro theme for an adult, we can handle everything from decorations and cake to themed food and entertainment."
        },
        {
          question: "What is the smallest group size you cater for social events?",
          answer: "We can cater to social events of all sizes. While we are known for large-scale events, we are happy to provide our premium catering and planning services for intimate gatherings of 25-50 guests as well."
        },
        {
          question: "Do you organize entertainment for parties?",
          answer: "Yes, we can arrange a variety of entertainment options to suit your event, including DJs, live music, magicians, and fun activities for kids to make your party more engaging."
        }
      ]
  },
  {
    slug: 'catering-services',
    title: 'Catering Services',
    icon: UtensilsCrossed,
    color: 'from-orange-500 to-red-600',
    excerpt: 'Exquisite culinary experiences with our top-rated catering for any event.',
    imageText: 'Elaborate buffet spread with a variety of dishes',
    content: (
      <>
        <p>At the heart of every great event is unforgettable food. GG Caterers offers premier <strong>Catering Services in Jammu</strong>, Kathua, and Udhampur, designed to delight the senses and create a lasting impression. Our culinary philosophy is simple: use the freshest ingredients, innovate with passion, and serve with a smile. We bring a world of flavors to your table, tailored to your event and preferences.</p>
        <h2 className="mt-8 mb-4 text-2xl font-bold">The Culinary Excellence of GG Caterers</h2>
        <p>We are proud to be known for providing the <strong>best catering services in Jammu and Kashmir</strong>. Our experienced chefs are masters of their craft, capable of creating authentic regional Indian cuisines, exotic international dishes, and trendy fusion menus. As expert <strong>wedding caterers in Jammu</strong> and for all other occasions, hygiene, quality, and presentation are our top priorities. Every dish is a work of art, prepared with love and served with elegance.</p>
        <h3 className="mt-6 mb-3 text-xl font-semibold">Our Diverse Catering Offerings:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Multi-Cuisine Buffets:</strong> Lavish spreads featuring Indian, Continental, Asian, and more.</li>
          <li><strong>Live Cooking Stations:</strong> Interactive stations for pasta, chaat, grills, and desserts that entertain and delight.</li>
          <li><strong>Formal Plated Dinners:</strong> Elegant multi-course meals served with sophistication.</li>
          <li><strong>Cocktail & Canapé Menus:</strong> Stylish and delicious bites perfect for receptions and parties.</li>
          <li><strong>High Tea & Brunches:</strong> Curated menus for relaxed and chic daytime events.</li>
        </ul>
        <h3 className="mt-6 mb-3 text-xl font-semibold">Service That Makes a Difference:</h3>
        <p>What sets <strong>GG Caterers Jammu</strong> apart is not just our food, but our service. Our professional and courteous staff ensure your guests are well taken care of, providing a seamless and enjoyable dining experience. We offer complete solutions, including crockery, cutlery, and thematic presentation, making us the one-stop-shop for all your catering needs.</p>
      </>
    ),
    faq: [
        {
          question: "What cuisines do you offer?",
          answer: "We offer a wide range of cuisines, including authentic Indian (Kashmiri, Punjabi, Dogri), Continental, Pan-Asian (Chinese, Thai), and Italian. We are also experts in creating fusion menus."
        },
        {
          question: "Do you provide purely vegetarian catering?",
          answer: "Yes, we provide 100% vegetarian catering services, with a vast menu of delicious and innovative vegetarian dishes. We maintain separate cooking practices to ensure purity."
        },
        {
          question: "Do you handle the setup, service, and cleanup?",
          answer: "Absolutely. Our catering service is all-inclusive. We manage the complete setup of buffet counters, provide professional service staff, and handle the cleanup after the event, ensuring a hassle-free experience for you."
        }
      ]
  },
  {
    slug: 'event-photography',
    title: 'Event Photography',
    icon: Camera,
    color: 'from-green-500 to-emerald-600',
    excerpt: 'Capture your precious moments with our professional event photography services.',
    imageText: 'Photographer taking a candid shot at a wedding reception',
    content: (
      <>
        <p>Events are fleeting, but memories last a lifetime. GG Caterers provides professional <strong>Event Photography in Jammu</strong> to capture the magic of your special day. Our team of skilled photographers specializes in documenting the emotions, details, and candid moments that make your event unique. We believe that every picture should tell a story, preserving your celebration for years to come.</p>
        <h2 className="mt-8 mb-4 text-2xl font-bold">Why Add Photography with GG Caterers?</h2>
        <p>When you book your event with <strong>GG Caterers Jammu</strong>, adding our photography service ensures seamless coordination. Our photographers work in tandem with our event planning team, so they know the schedule, key moments, and important people. As one of the top <strong>event organizers in Jammu and Kashmir</strong>, we understand how to capture the essence of an event we’ve helped create, from stunning decor shots to lively guest interactions.</p>
        <h3 className="mt-6 mb-3 text-xl font-semibold">Our Photography & Videography Services:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Candid Wedding Photography:</strong> Capturing natural emotions and unscripted moments.</li>
          <li><strong>Traditional Photography:</strong> Classic portraits and group shots to document everyone present.</li>
          <li><strong>Cinematic Wedding Films:</strong> A beautifully edited movie of your celebration.</li>
          <li><strong>Pre-Wedding Shoots:</strong> Creative and romantic photoshoots at scenic locations.</li>
          <li><strong>Corporate Event Coverage:</strong> Professional photos for your company’s portfolio and marketing.</li>
          <li><strong>Photo Booths:</strong> Fun and interactive booths for guests to enjoy.</li>
        </ul>
        <h3 className="mt-6 mb-3 text-xl font-semibold">Lasting Memories, Professionally Delivered:</h3>
        <p>Our commitment is to quality, both in service and in the final product. We use high-end equipment and modern editing techniques to deliver a stunning collection of high-resolution images and a beautifully crafted film. Trust us to immortalize your event with artistry and professionalism, ensuring your precious memories are captured perfectly.</p>
      </>
    ),
    faq: [
        {
          question: "Can I book your photography services without booking catering?",
          answer: "Yes, you can book our photography and videography services as a standalone offering. However, booking them together with our event management or catering ensures better coordination and a smoother experience."
        },
        {
          question: "What is the difference between candid and traditional photography?",
          answer: "Traditional photography involves posed shots and group photos, ensuring everyone is documented. Candid photography focuses on capturing spontaneous, unscripted moments and emotions, telling the story of your event naturally."
        },
        {
          question: "How long does it take to receive the photos and videos?",
          answer: "Typically, we deliver the fully edited, high-resolution photos within 4-6 weeks and the cinematic film within 6-8 weeks after the event. We also provide a small set of highlight photos within a few days."
        }
      ]
  },
  {
    slug: 'roka-caterers',
    title: 'Roka Caterers',
    icon: Gem,
    color: 'from-amber-500 to-yellow-600',
    excerpt: 'Celebrate the first step of your journey together with delicious food and impeccable service.',
    imageText: 'Elegant setup for a Roka ceremony with floral decorations',
    content: (
      <>
        <p>A Roka ceremony marks the beautiful beginning of a new journey for two families. It’s an intimate and joyous occasion that deserves to be celebrated with warmth and wonderful food. As specialized <strong>Roka Caterers in Jammu</strong>, GG Caterers helps you make this first official step memorable. We create a delightful culinary experience that perfectly complements the sweetness of the moment.</p>
        <h2 className="mt-8 mb-4 text-2xl font-bold">Perfect Catering for Your Roka Ceremony</h2>
        <p>While Roka ceremonies are often more intimate than a wedding, the food still plays a central role. As providers of the <strong>best catering services in Jammu</strong>, we offer customized menus perfect for such gatherings. Whether you prefer a traditional spread, a chic high-tea, or a trendy brunch menu, we tailor our offerings to your taste. Our focus is on providing delicious, high-quality food served with grace and professionalism.</p>
        <h3 className="mt-6 mb-3 text-xl font-semibold">Our Roka Catering Highlights:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Customized Menus:</strong> From welcome drinks and appetizers to main courses and desserts.</li>
          <li><strong>Elegant Presentation:</strong> Beautifully arranged food counters that add to the decor.</li>
          <li><strong>Live Chaat & Snack Counters:</strong> A fun and interactive element for your guests.</li>
          <li><strong>Professional Service:</strong> Attentive and courteous staff to cater to your guests' needs.</li>
        </ul>
        <h3 className="mt-6 mb-3 text-xl font-semibold">A Sweet Start with GG Caterers:</h3>
        <p>Let <strong>GG Caterers Jammu</strong> take care of the culinary details, so you can focus on celebrating with your loved ones. Our expertise as <strong>event organizers in Jammu and Kashmir</strong> ensures that even the smallest details are handled with care, making your Roka ceremony a beautifully seamless and delicious affair.</p>
      </>
    ),
    faq: [
        {
          question: "What kind of menu is best for a Roka ceremony?",
          answer: "For a Roka, we often recommend a high-tea menu with elegant snacks, canapés, and desserts, or a lavish lunch/dinner with a mix of appetizers and a focused main course. Live counters are also a popular choice."
        },
        {
          question: "Can you provide catering for a small home-based Roka ceremony?",
          answer: "Yes, we are fully equipped to cater for intimate, home-based ceremonies. We ensure the setup is compact, the service is discreet, and the food quality is top-notch, regardless of the venue."
        },
        {
          question: "Do you also help with Roka decorations?",
          answer: "While our primary focus is catering, we can certainly assist with elegant and simple decorations suitable for a Roka ceremony as part of our event management services."
        }
      ]
  },
  {
    slug: 'ring-ceremony-caterers',
    title: 'Ring Ceremony Caterers',
    icon: Ring,
    color: 'from-violet-500 to-fuchsia-600',
    excerpt: 'Make your engagement unforgettable with a feast that’s as special as your commitment.',
    imageText: 'Close-up of wedding rings on a decorative pillow',
    content: (
      <>
        <p>The Ring Ceremony or engagement is the official announcement of your intention to marry, a celebration of love and commitment. Make this milestone event truly special with exceptional food from GG Caterers, the leading <strong>Ring Ceremony Caterers in Jammu</strong>. We design spectacular culinary experiences that elevate your celebration and leave your guests raving.</p>
        <h2 className="mt-8 mb-4 text-2xl font-bold">A Feast for Your Engagement</h2>
        <p>As premier <strong>wedding caterers in Jammu</strong>, we understand that an engagement party sets the tone for the wedding to come. Our team works with you to create a menu that is both sophisticated and celebratory. From elegant canapés and cocktails to a lavish multi-cuisine buffet, our food is designed to impress. We bring the same level of quality and professionalism that defines the <strong>best catering services in Jammu</strong> to your special day.</p>
        <h3 className="mt-6 mb-3 text-xl font-semibold">Our Engagement Catering Features:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Gourmet Appetizers & Welcome Drinks:</strong> Start the celebration in style.</li>
          <li><strong>Elaborate Main Course Spreads:</strong> A wide variety of dishes to please every palate.</li>
          <li><strong>Decadent Dessert Bars:</strong> From traditional sweets to modern pastries and cakes.</li>
          <li><strong>Thematic Food Presentation:</strong> Our setups are designed to complement your event's theme and decor.</li>
        </ul>
        <h3 className="mt-6 mb-3 text-xl font-semibold">Celebrate Your Love with GG Caterers:</h3>
        <p>Your engagement is a once-in-a-lifetime event. Trust <strong>GG Caterers Jammu</strong> to provide a culinary experience that matches the occasion's importance. Our end-to-end service ensures you can relax and enjoy this magical time with your family and friends, confident that every detail is in expert hands.</p>
      </>
    ),
    faq: [
        {
          question: "What's the difference in catering for a Roka vs. a Ring Ceremony?",
          answer: "A Ring Ceremony is typically a larger affair than a Roka. The menu is often more elaborate, with a wider variety of dishes, multiple live counters, and a more extensive dessert bar to cater to a larger guest list."
        },
        {
          question: "Can you create a custom cake for our engagement?",
          answer: "Yes, we can arrange for a beautiful, custom-designed engagement cake that matches your theme and flavor preferences through our network of premium bakers."
        },
        {
          question: "How do you ensure food quality and freshness for a large engagement party?",
          answer: "We use only the freshest ingredients and prepare most dishes live or just before serving. Our experienced team and efficient processes ensure that every dish served, even to a large number of guests, is hot, fresh, and delicious."
        }
      ]
  },
];