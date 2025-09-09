const nextConfig = {
    reactStrictMode: true,
    output: "standalone",
    images: { unoptimized: true },
    eslint: { ignoreDuringBuilds: true }
};
module.exports = nextConfig;
