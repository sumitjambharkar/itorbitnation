export default async function sitemap() {
  let blogData = [];

  // Fetch blog data from API endpoint with error handling
  try {
    const response = await fetch("https://itorbitnation.com/api/blog");
    if (!response.ok) {
      throw new Error("Failed to fetch blog data");
    }
    blogData = await response.json();
  } catch (error) {
    console.error("Error fetching blog data: ", error);
    // Handle the error, e.g., log or return a default static sitemap
  }

  // Map fetched blog data to sitemap format, handling empty blogData
  const sitemapData = blogData.length
    ? blogData.map((blog) => ({
        url: `https://itorbitnation.com/blog/${blog.slug}`,
        lastModified: new Date(blog.updatedAt).toISOString(), // Ensuring proper format
      }))
    : [];

  // Add other static URLs to the sitemap
  const staticUrls = [
    { url: "https://itorbitnation.com/", lastModified: new Date().toISOString() },
    { url: "https://itorbitnation.com/about", lastModified: new Date().toISOString() },
    { url: "https://itorbitnation.com/service", lastModified: new Date().toISOString() },
    { url: "https://itorbitnation.com/course", lastModified: new Date().toISOString() },
    { url: "https://itorbitnation.com/freetech", lastModified: new Date().toISOString() },
    { url: "https://itorbitnation.com/blog", lastModified: new Date().toISOString() },
    { url: "https://itorbitnation.com/contact", lastModified: new Date().toISOString() },
    { url: "https://itorbitnation.com/signup", lastModified: new Date().toISOString() },
    { url: "https://itorbitnation.com/inquiry", lastModified: new Date().toISOString() },
    { url: "https://itorbitnation.com/resume", lastModified: new Date().toISOString() },
    { url: "https://itorbitnation.com/inquiry/student", lastModified: new Date().toISOString() },
    { url: "https://itorbitnation.com/inquiry/services", lastModified: new Date().toISOString() },
  ];

  // Combine dynamic and static URLs
  const allUrls = [...staticUrls, ...sitemapData];

  return allUrls;
}
