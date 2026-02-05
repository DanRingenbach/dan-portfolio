import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production';
 
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/dan-portfolio' : '',
  assetPrefix: isProd ? '/dan-portfolio/' : '',
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
}
 
export default nextConfig