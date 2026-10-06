export const phone = {
  display: "416-261-2112",
  href: "tel:+14162612112",
};

export const address = {
  street: "2893 Lawrence Avenue East, Unit 11",
  city: "Scarborough",
  region: "ON",
  postal: "M1P 2S8",
  country: "CA",
  cross: "Brimley and Lawrence",
};

export const addressLine = `${address.street}, ${address.city}, ${address.region} ${address.postal}`;

export const links = {
  instagram: "https://www.instagram.com/perlasdepilipinas/",
  instagramDm: "https://ig.me/m/perlasdepilipinas",
  facebook: "https://www.facebook.com/PerlasDePilipinas/",
  uberEats: "https://www.ubereats.com/ca/store/perlas-de-pilipinas/jD6bCwiDToGP9QnhTVyb2g",
  doorDash: "https://www.doordash.com/store/perlas-de-pilipinas-scarborough-1007935/",
  maps: "https://www.google.com/maps/search/?api=1&query=Perlas+de+Pilipinas+2893+Lawrence+Avenue+East+Scarborough+ON",
  mapEmbed:
    "https://maps.google.com/maps?q=2893+Lawrence+Avenue+East,+Scarborough,+ON+M1P+2S8&hl=en&z=16&output=embed",
  claudaura: "https://www.claudaura.ca",
};

export const messages = {
  catering: `Hi Perlas de Pilipinas! I would like to ask about catering.

Name:
Phone:
Date:
Number of guests:
Occasion:
Dishes in mind (lechon, party trays, or your suggestion):

Salamat!`,
  order: `Hi Perlas de Pilipinas! I would like to place an order.

Name:
Phone:
Pickup or a question about delivery:
What I would like:
Ready by:

Salamat!`,
};

export function siteUrl() {
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const preview = process.env.VERCEL_URL;
  if (production) return `https://${production}`;
  if (preview) return `https://${preview}`;
  return "http://localhost:3000";
}

export const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "Closed" },
  { day: "Wednesday", time: "7:00 a.m. to 7:00 p.m." },
  { day: "Thursday", time: "7:00 a.m. to 7:00 p.m." },
  { day: "Friday", time: "7:00 a.m. to 7:00 p.m." },
  { day: "Saturday", time: "7:00 a.m. to 7:00 p.m." },
  { day: "Sunday", time: "7:00 a.m. to 7:00 p.m." },
];

export type Dish = {
  name: string;
  detail: string;
  price: string;
  note?: string;
};

export const breakfast: Dish[] = [
  {
    name: "Longsilog",
    detail: "6 pieces longganisa with garlic rice and two eggs.",
    price: "$21.99",
  },
  {
    name: "Tapsilog",
    detail: "Homemade thin slices of cured beef with garlic rice and two eggs.",
    price: "$21.99",
  },
  {
    name: "Tocilog",
    detail: "Homemade sweet cured pork with garlic rice and two eggs.",
    price: "$21.99",
  },
  {
    name: "Bangsilog",
    detail: "Fried marinated milkfish, garlic rice, two eggs, and a drink.",
    price: "$20.99",
  },
  {
    name: "Tuyosilog",
    detail: "Salted dried fish, garlic rice, and two eggs.",
    price: "$20.99",
  },
];

export const plates: Dish[] = [
  {
    name: "Sisig",
    detail:
      "Deep fried pork (snout, cheeks, and ears) with lemon, onion, and chili. About 24 oz, good for 2 to 3 people.",
    price: "$19.99",
  },
  {
    name: "Lechon kawali",
    detail: "1 lb deep fried pork belly with homemade pork liver sauce on the side.",
    price: "$24.99",
  },
  {
    name: "Chicken adobo",
    detail: "Savoury chicken with a rich, tangy flavour. With rice, $14.99.",
    price: "$16.99",
  },
  {
    name: "Sinigang",
    detail: "Sour soup of meat or fish and vegetables.",
    price: "$22.99",
  },
  {
    name: "Kalderetang baka",
    detail: "Beef, carrots, and potatoes stewed in tomato sauce. Good for 2 to 3 people.",
    price: "$19.99",
  },
  {
    name: "Kare-kare",
    detail: "Stew in a thick peanut sauce with eggplant, bok choy, and green beans.",
    price: "$21.99",
  },
  {
    name: "Pancit bihon",
    detail: "Stir fried rice noodles with mixed vegetables and a choice of meat.",
    price: "$16.99",
  },
  {
    name: "Palabok",
    detail:
      "Noodles in a seafood sauce, topped with shrimp, fried belly and rinds, and sliced boiled egg.",
    price: "$14.99",
  },
  {
    name: "Lomi",
    detail:
      "Thick egg noodles, beef balls, fish balls, and shrimp, topped with pork belly, fried garlic, and green onion.",
    price: "$17.99",
  },
  {
    name: "Lumpiang Shanghai",
    detail: "10 pork spring rolls. A tray of 50 is $52 on Uber Eats.",
    price: "$10.99",
  },
];

export const sweets: Dish[] = [
  {
    name: "Turon",
    detail: "Two fried banana rolls with jackfruit, dusted with brown sugar.",
    price: "$5.99",
  },
  {
    name: "Cassava cake",
    detail: "Moist cassava dessert.",
    price: "$5.99",
  },
  {
    name: "Leche flan",
    detail: "Caramel custard.",
    price: "$11.99",
  },
  {
    name: "Suman malagkit",
    detail: "Four sticky rice cakes with coconut milk, wrapped in banana leaves.",
    price: "$6.99",
  },
];

export const uberTrays: Dish[] = [
  {
    name: "Luzon Feast",
    detail: "Good for 4 to 5. Garlic rice, pork BBQ, 12 pork spring rolls, crispy sisig, lechon kawali, and pancit.",
    price: "$86",
  },
  {
    name: "Ultimate Breakfast Platter",
    detail: "Good for 4 to 6. Tapa, tocino, longganisa, tuyo, eggs, garlic rice, atchara, cucumber, and tomato.",
    price: "$75",
  },
  {
    name: "Kamayan for two",
    detail: "Garlic rice, spring rolls, shrimp, mussels, pancit, lechon kawali, and pork BBQ sticks.",
    price: "$55",
  },
  {
    name: "M tray pancit",
    detail: "Stir fried noodles with a choice of meat. Good for 8 to 10.",
    price: "$70",
  },
  {
    name: "S tray lechon kawali",
    detail: "Crispy pork belly. Serves 10 to 12.",
    price: "$85",
  },
  {
    name: "Kinilaw na tuna",
    detail: "Tuna in vinegar with onion, ginger, chili, calamansi, and lemon. Pre-order 1 day prior.",
    price: "$70",
  },
];

export const kareKareTrays = [
  { name: "Solo", price: "$19.99" },
  { name: "Small tray", price: "$65" },
  { name: "Medium", price: "$85" },
  { name: "Large", price: "$170" },
];

export const reviews = [
  {
    quote:
      "I always order in Perlas and their food is always fresh and they also listen to every clients needs and always go beyond and above when it comes to food quality and servings. I wish I can give them a review each time I order because they trully are one of the best Filipino Restaurant that deserves recognition.",
    author: "Caroline P.",
    source: "DoorDash",
  },
  {
    quote: "Their Sisig captures all the flavours that is authentic in this dish!",
    author: "Myleen A.",
    source: "Uber Eats",
  },
  {
    quote: "So delicious. I am not even Filipino but I can guarantee this place is authentic.",
    author: "yj S.",
    source: "Uber Eats",
  },
  {
    quote: "Pancit bihon was delicious and big portions. I would highly recommend it!",
    author: "Florence G.",
    source: "Uber Eats",
  },
  {
    quote: "Tasted like home!",
    author: "Kara A.",
    source: "Uber Eats",
  },
  {
    quote:
      "This is my one of our favorite Filipino restaurant and we order from them 1-2x/week. They are always good!",
    author: "Sr. Mary Tomasita A.",
    source: "DoorDash",
  },
];

export const reels = [
  {
    src: "/media/reels/lumpia.mp4",
    poster: "/media/lumpia.webp",
    posterWidth: 900,
    posterHeight: 1600,
    title: "Reel of lumpiang Shanghai on a tray",
    quote: "Nobody ever eats just one. Crispy, golden lumpia, hot from the fryer.",
    href: "https://www.instagram.com/p/DeIkeJWS5ln/",
  },
  {
    src: "/media/reels/kinilaw.mp4",
    poster: "/media/counter.webp",
    posterWidth: 1200,
    posterHeight: 2134,
    title: "Reel from the counter at Perlas de Pilipinas",
    quote: "No rush, no plans. Just something cold to drink and a plate of kinilaw in front of you.",
    href: "https://www.instagram.com/p/Ddv7gnSSdEb/",
  },
  {
    src: "/media/reels/lechon.mp4",
    poster: "/media/lechon.webp",
    posterWidth: 900,
    posterHeight: 1600,
    title: "Reel of sliced lechon belly",
    quote: "DM us for your catering with lechon.",
    href: "https://www.instagram.com/p/Dd3CWmEyAfe/",
  },
  {
    src: "/media/reels/trays.mp4",
    poster: "/media/trays.webp",
    posterWidth: 900,
    posterHeight: 1600,
    title: "Reel of Filipino party trays on the counter",
    quote: "Just show up with a party tray and I'm already in the car.",
    href: "https://www.instagram.com/p/Dd0C0YEyCP8/",
  },
];

export const gallery = [
  {
    src: "/media/hero.webp",
    width: 1600,
    height: 2132,
    alt: "Palabok on a gold rimmed plate, topped with shrimp, egg, and crushed chicharon",
  },
  {
    src: "/media/pancit.webp",
    width: 1400,
    height: 1864,
    alt: "Stir fried noodles with cabbage, carrots, and green onion",
  },
  {
    src: "/media/lomi.webp",
    width: 1400,
    height: 1866,
    alt: "A bowl of thick noodle soup finished with fried garlic",
  },
  {
    src: "/media/mami.webp",
    width: 1400,
    height: 1866,
    alt: "Noodle soup with egg, greens, and fried garlic",
  },
  {
    src: "/media/wonton.webp",
    width: 1400,
    height: 1864,
    alt: "Noodle soup with a wonton, egg, and greens",
  },
  {
    src: "/media/noodles.webp",
    width: 1400,
    height: 1864,
    alt: "Stir fried noodles with shrimp, egg, and greens",
  },
];

export const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Perlas de Pilipinas",
  image: `${siteUrl()}/media/hero.webp`,
  servesCuisine: "Filipino",
  priceRange: "$$",
  telephone: "+1-416-261-2112",
  url: siteUrl(),
  address: {
    "@type": "PostalAddress",
    streetAddress: address.street,
    addressLocality: address.city,
    addressRegion: address.region,
    postalCode: address.postal,
    addressCountry: address.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  sameAs: [links.instagram, links.facebook, links.uberEats, links.doorDash],
  hasMenu: links.uberEats,
  menu: links.uberEats,
};
