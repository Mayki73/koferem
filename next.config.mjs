/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/(//)+", // Match any number of consecutive slashes
        destination: "/", // Redirect to the root path
        statusCode: 301, // Use 301 status code for permanent redirect
      },
    ];
  },
};

export default nextConfig;
