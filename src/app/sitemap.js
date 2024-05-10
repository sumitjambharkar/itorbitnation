export default async function sitemap() {
  // Fetch blog data from API endpoint
  const response = await fetch("https://itorbitnation.com/api/blog");
  const blogData = await response.json();

  // Map fetched blog data to sitemap format
  const sitemapData = blogData.map((blog) => ({
    url: `https://itorbitnation.com/blog/${blog.slug}`,
    lastModified: new Date(blog.updatedAt),
  }));

  // Add other static URLs to the sitemap
  const staticUrls = [
    { url: "https://itorbitnation.com/",
     lastModified: new Date() 
    },
    { url: "https://itorbitnation.com/about",
     lastModified: new Date() 
    },
    { url: "https://itorbitnation.com/service",
     lastModified: new Date() 
    },
    {
      url: "https://itorbitnation.com/course",
      lastModified: new Date(),
    },
    {
      url: "https://itorbitnation.com/freetech",
      lastModified: new Date(),
    },
    {
      url: "https://itorbitnation.com/blog",
      lastModified: new Date(),
    },
    {
      url: "https://itorbitnation.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://itorbitnation.com/signup",
      lastModified: new Date(),
    },
    {
      url: "https://itorbitnation.com/inquiry",
      lastModified: new Date(),
    },
    {
      url: "https://itorbitnation.com/resume",
      lastModified: new Date(),
    },
    {
      url: "https://itorbitnation.com/inquiry/student",
      lastModified: new Date(),
    },
    {
      url: "https://itorbitnation.com/inquiry/services",
      lastModified: new Date(),
    },
  ];

  // Combine dynamic and static URLs
  const allUrls = [...staticUrls, ...sitemapData];

  return allUrls;
}
