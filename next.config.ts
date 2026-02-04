import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  distDir: 'build',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/dan-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/dan-portfolio/' : '',
}
 
export default nextConfig