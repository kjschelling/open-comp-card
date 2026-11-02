const model = {
  name: "Cage Noir",
  locations: ["Boston", "Los Angeles"],
  stats: { height: 70, bust: 33, waist: 26, hips: 36 }, //inches
  details: { shoes: "8.5 US", dress: "2 US", hair: "Brown", eyes: "Brown" },
  contact: { email: "hello@cagenoir.com", instagram: "cagenoir" },
  images: [
    { src: "/images/digitals-headshot.jpg", alt: "headshot", type: "digital" },
    { src: "/images/digitals-3:4.jpg", alt: "three quarter", type: "digital" },
    { src: "/images/digitals-full", alt: "full", type: "digital" },
    { src: "/images/digitals-side", alt: "side profile", type: "digital" },
  ],
};

export default model;
