/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true, // Required for static exports
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Remove the invalid experimental option
  // experimental: {
  //   missingSuspenseWithCSRBailout: false, // ❌ Not a valid option
  // },
};

module.exports = nextConfig;