/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/",
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/*",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/repair/(//)+",
        destination: "/repair/",
        statusCode: 301,
      },
      {
        source: "/delivery/(//)+",
        destination: "/delivery/",
        statusCode: 301,
      },
      {
        source: "/about/(//)+",
        destination: "/about/",
        statusCode: 301,
      },
      {
        source: "/contacts/(//)+",
        destination: "/contacts/",
        statusCode: 301,
      },
      {
        source: "/repair/household/:brand/(//)+",
        destination: "/repair/household/:brand/",
        statusCode: 301,
      },
      {
        source: "/repair/built-in/:brand/(//)+",
        destination: "/repair/built-in/:brand/",
        statusCode: 301,
      },
      {
        source: "/index.html",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/repair/household/:brand/index.html",
        destination: "/repair/household/:brand/",
        statusCode: 301,
      },
      {
        source: "/repair/built-in/:brand/index.html",
        destination: "/repair/built-in/:brand/",
        statusCode: 301,
      },
      {
        source: "/delivery/index.html",
        destination: "/delivery/",
        statusCode: 301,
      },
      {
        source: "/about/index.html",
        destination: "/about/",
        statusCode: 301,
      },
      {
        source: "/contacts/index.html",
        destination: "/contacts/",
        statusCode: 301,
      },
      {
        source: "/repair/index.html",
        destination: "/repair/",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
