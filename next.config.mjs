/** @type {import('next').NextConfig} */
const nextConfig = {
    crossOrigin: 'anonymous',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com'
            }
        ]
    }
};

export default nextConfig;
