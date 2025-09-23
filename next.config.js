/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',          // перехватываем все пути
        destination: 'https://koferem.by/', // всегда на главную
        permanent: true,            // 308 Permanent Redirect
      },
    ]
  },
}

module.exports = nextConfig
