/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'henszvzcktnwvspttjvo.supabase.co',
        pathname: '/storage/v1/object/public/challenges/**',
      },
      {
        protocol: 'https',
        hostname: 'henszvzcktnwvspttjvo.supabase.co',
        pathname: '/storage/v1/object/public/items/**',
      },
    ],
  },
};

export default nextConfig;
