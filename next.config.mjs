/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/welcome",
        permanent: true,
      },
      {
        source: "/docs/core",
        destination: "/docs/core/source-file",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
