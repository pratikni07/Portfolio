import { Linkedin, Github, Twitter, Instagram, MapPin } from "lucide-react";

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: (
      <Linkedin className="text-gray-600 hover:text-blue-600 cursor-pointer" />
    ),
    url: "https://www.linkedin.com/in/omkar-khoche-964a86259/",
  },
  {
    name: "GitHub",
    icon: <Github className="text-gray-600 hover:text-black cursor-pointer" />,
    url: "https://github.com/omkarkhoche3448",
  },
  {
    name: "Twitter",
    icon: (
      <Twitter className="text-gray-600 hover:text-blue-600 cursor-pointer" />
    ),
    url: "https://twitter.com/Omkarkhoche",
  },
  {
    name: "Instagram",
    icon: (
      <Instagram className="text-gray-600 hover:text-blue-600 cursor-pointer" />
    ),
    url: "https://www.instagram.com/omkar_khoche/",
  },
  {
    name: "Map",
    icon: (
      <MapPin className="text-gray-600 hover:text-red-600 cursor-pointer" />
    ),
    url: "https://www.google.com/maps/place/Khandobanagar,+Baramati,+Maharashtra+413102/@18.1545582,74.5518112,15z/data=!3m1!4b1!4m6!3m5!1s0x3bc3a06bc2a3af7f:0xbceb75fdc5adbabb!8m2!3d18.1530234!4d74.5653682!16s%2Fg%2F1tjrnf81?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D",
  },
];
