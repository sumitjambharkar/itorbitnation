/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  // redirects: async () => {
  //   return [
  //     {
  //       source: "/blog/digital-marketing-services-in-andheri",
  //       destination: "/",
  //       permanent: false,
  //     },
  //   ];
  // },
};

export default nextConfig;
