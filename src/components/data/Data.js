export const nav = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "gallary",
    path: "/gallary",
  },
  {
    text: "recruitment",
    path: "/recruitment",
    submenu: [
      {
        text: "What we do",
        path: "/recruitment/service",
      },
      {
        text: "How we recruit",
        path: "/recruitment/proccess",
      },
      {
        text: "Training Partnership",
        path: "/recruitment/partnership",
      },
      {
        text: "we serve globally",
        path: "/recruitment/global",
      },
    ],
  },
  {
    text: "concern",
    path: "/concern",
    submenu: [
      {
        text: "JPN Properties Ltd",
        path: "/",
      },
      {
        text: "JPN Security Ltd",
        path: "/",
      },
      {
        text: "JPN Trading Corp",
        path: "/",
      },
      {
        text: "HEERAQ BARNALI Overseas",
        path: "/",
      },
      {
        text: "JPN DB General Trading LLC",
        path: "/",
      },
    ],
  },
  {
    text: "blog",
    path: "/blog",
  },
  {
    text: "pricing",
    path: "/pricing",
  },
  {
    text: "contact",
    path: "/contact",
  },
];

export const featured = [
  {
    cover: "../images/hero/h1.png",
    name: "Family House",
    total: "122 Property",
  },
  {
    cover: "../images/hero/h2.png",
    name: "House & Villa",
    total: "155 Property",
  },
  {
    cover: "../images/hero/h3.png",
    name: "Apartment",
    total: "300 Property",
  },
  {
    cover: "../images/hero/h4.png",
    name: "Office & Studio",
    total: "80 Property",
  },
  {
    cover: "../images/hero/h6.png",
    name: "Villa & Condo",
    total: "80 Property",
  },
];
export const list = [
  {
    id: 1,
    cover: "../images/list/p-1.png",
    name: "Red Carpet Real Estate",
    location: "210 Zirak Road, Canada",
    category: "Ongoing",
    price: "$3,700",
    type: "Apartment",
    size: "1200 sqft",
    bedrooms: 2,
    bathrooms: 2,
    description:
      "Beautiful apartment located in a prime location with stunning views and modern amenities.",
    features: ["Balcony", "Gym", "Swimming Pool", "Parking"],
    images: [
      "../images/list/p-1.png",
      "../images/list/p-1.png",
      "../images/list/p-1.png",
    ],
  },
  {
    id: 2,
    cover: "../images/list/p-2.png",
    name: "Fairmount Properties",
    location: "5698 Zirak Road, NewYork",
    category: "Ongoing",
    price: "$9,750",
    type: "Condos",
    size: "1800 sqft",
    bedrooms: 3,
    bathrooms: 2.5,
    description:
      "Luxurious condominium with breathtaking city views and high-end finishes.",
    features: ["Terrace", "Fitness Center", "Concierge Service", "Garage"],
    images: [
      "../images/list/p-2.png",
      "../images/list/p-2.png",
      "../images/list/p-2.png",
    ],
  },
  {
    id: 3,
    cover: "../images/list/p-7.png",
    name: "The Real Estate Corner",
    location: "5624 Mooker Market, USA",
    category: "Completed",
    price: "$5,860",
    type: "Offices",
    size: "2000 sqft",
    bedrooms: 0,
    bathrooms: 1,
    description:
      "Modern office space in a bustling area, perfect for startups and established businesses.",
    features: ["Conference Rooms", "Cafeteria", "Parking"],
    images: [
      "../images/list/p-7.png",
      "../images/list/p-7.png",
      "../images/list/p-7.png",
    ],
  },
  {
    id: 4,
    cover: "../images/list/p-4.png",
    name: "Herringbone Realty",
    location: "5621 Liverpool, London",
    category: "Upcoming",
    price: "$7,540",
    type: "Homes & Villas",
    size: "3000 sqft",
    bedrooms: 4,
    bathrooms: 3,
    description:
      "Spacious villa with a private garden and modern interiors, perfect for a family.",
    features: ["Garden", "Swimming Pool", "Garage", "Security System"],
    images: [
      "../images/list/p-4.png",
      "../images/list/p-4.png",
      "../images/list/p-4.png",
    ],
  },
  {
    id: 5,
    cover: "../images/list/p-5.png",
    name: "Brick Lane Realty",
    location: "210 Montreal Road, Canada",
    category: "Upcoming",
    price: "$4,850",
    type: "Commercial",
    size: "5000 sqft",
    bedrooms: 0,
    bathrooms: 2,
    description:
      "Large commercial space suitable for retail or office use, located in a busy area.",
    features: ["Storefront", "Large Windows", "Parking"],
    images: [
      "../images/list/p-5.png",
      "../images/list/p-5.png",
      "../images/list/p-5.png",
    ],
  },
  {
    id: 6,
    cover: "../images/list/p-6.png",
    name: "Banyon Tree Realty",
    location: "210 Zirak Road, Canada",
    category: "Ongoing",
    price: "$2,742",
    type: "Apartment",
    size: "1000 sqft",
    bedrooms: 1,
    bathrooms: 1,
    description:
      "Cozy apartment in a serene neighborhood, perfect for a young professional.",
    features: ["Balcony", "Fitness Center", "Parking"],
    images: [
      "../images/list/p-6.png",
      "../images/list/p-6.png",
      "../images/list/p-6.png",
    ],
  },
];
export const awards = [
  {
    icon: <i class="fa-solid fa-trophy"></i>,
    num: "32 M	",
    name: "Blue Burmin Award",
  },
  {
    icon: <i class="fa-solid fa-briefcase"></i>,
    num: "43 M",
    name: "Mimo X11 Award",
  },
  {
    icon: <i class="fa-solid fa-lightbulb"></i>,
    num: "51 M",
    name: "Australian UGC Award",
  },
  {
    icon: <i class="fa-solid fa-heart"></i>,
    num: "42 M",
    name: "IITCA Green Award",
  },
];
export const location = [
  {
    id: 1,
    name: "New Orleans, Louisiana",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-1.png",
  },
  {
    id: 2,
    name: "Jerrsy, United State",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-2.png",
  },
  {
    id: 3,
    name: "Liverpool, London",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-3.png",
  },
  {
    id: 4,
    name: "NewYork, United States",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-4.png",
  },
  {
    id: 5,
    name: "Montreal, Canada",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-5.png",
  },
  {
    id: 6,
    name: "California, USA",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-6.png",
  },
];
export const team = [
  {
    list: "50",
    cover: "../images/customer/team-1.jpg",
    address: "Liverpool, Canada",
    name: "Sargam S. Singh",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "70",
    cover: "../images/customer/team-2.jpg",
    address: "Montreal, Canada",
    name: "Harijeet M. Siller",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "80",
    cover: "../images/customer/team-3.jpg",
    address: "Denever, USA",
    name: "Anna K. Young",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "51",
    cover: "../images/customer/team-4.jpg",
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "42",
    cover: "../images/customer/team-5.jpg",
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "38",
    cover: "../images/customer/team-5.jpg",
    address: "Montreal, USA",
    name: "Adam K. Jollio",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
];
export const price = [
  {
    plan: "Basic",
    price: "29",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "120GB CDN Bandwidth",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "5GB Cloud Storage",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    best: "Best Value",
    plan: "Standard",
    price: "49",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "150GB CDN Bandwidth",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "10GB Cloud Storage",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    plan: "Platinum",
    price: "79",
    ptext: "2 user, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "100% Uptime Guarantee",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "200GB CDN Bandwidth",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "20GB Cloud Storage",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Personal Help Support",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
];
export const footer = [
  {
    title: "LAYOUTS",
    text: [
      { list: "Home Page" },
      { list: "About Page" },
      { list: "Service Page" },
      { list: "Property Page" },
      { list: "Contact Page" },
      { list: "Single Blog" },
    ],
  },
  {
    title: "ALL SECTIONS",
    text: [
      { list: "Headers" },
      { list: "Features" },
      { list: "Attractive" },
      { list: "Testimonials" },
      { list: "Videos" },
      { list: "Footers" },
    ],
  },
  {
    title: "COMPANY",
    text: [
      { list: "About" },
      { list: "Blog" },
      { list: "Pricing" },
      { list: "Affiliate" },
      { list: "Login" },
      { list: "Changelog" },
    ],
  },
];
