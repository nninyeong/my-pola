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
    ],
  },
};

export default nextConfig;
