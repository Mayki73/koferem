/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  trailingSlash: false,
  permanent: false,
  async redirects() {
    return [
      {
        source: "/(//)+",
        destination: "/",
        permanent: false,
        statusCode: 301,
      },
      {
        source: "/repair/(//)+",
        destination: "/repair/",
        permanent: false,
        statusCode: 301,
      },
      {
        source: "/delivery/(//)+",
        destination: "/delivery/",
        permanent: false,
        statusCode: 301,
      },
      {
        source: "/about/(//)+",
        destination: "/about/",
        permanent: false,
        statusCode: 301,
      },
      {
        source: "/contacts/(//)+",
        destination: "/contacts/",
        permanent: false,
        statusCode: 301,
      },
      {
        source: "/repair/household/:brand/(//)+",
        destination: "/repair/household/:brand/",
        permanent: false,
        statusCode: 301,
      },
      {
        source: "/repair/built-in/:brand/(//)+",
        destination: "/repair/built-in/:brand/",
        permanent: false,
        statusCode: 301,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: false,
        statusCode: 301,
      },
      {
        source: "/repair/household/:brand/index.html",
        destination: "/repair/household/:brand/",
        permanent: false,
        statusCode: 301,
      },
      {
        source: "/repair/built-in/:brand/index.html",
        destination: "/repair/built-in/:brand/",
        permanent: false,
        statusCode: 301,
      },
      {
        source: "/delivery/index.html",
        destination: "/delivery/",
        permanent: false,
        statusCode: 301,
      },
      {
        source: "/about/index.html",
        destination: "/about/",
        permanent: false,
        statusCode: 301,
      },
      {
        source: "/contacts/index.html",
        destination: "/contacts/",
        permanent: false,
        statusCode: 301,
      },
      {
        source: "/repair/index.html",
        destination: "/repair/",
        permanent: false,
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
