import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://my-portfolio-tan-nine-54.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://my-portfolio-tan-nine-54.vercel.app/blog",
      lastModified: new Date(),
    },
    {
      url: "https://my-portfolio-tan-nine-54.vercel.app/dashboard",
      lastModified: new Date(),
    },
  ];
}