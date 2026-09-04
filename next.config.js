/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Email-signature logo assets: stable URLs, long-lived cache, no query-string busting.
        source: '/assets/email/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
