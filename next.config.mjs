/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate static HTML in `out/` for GitHub Pages
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  }
};

export default nextConfig;