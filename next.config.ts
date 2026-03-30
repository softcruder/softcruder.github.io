/** @type {import('next').NextConfig} */
// GitHub Pages: static export (no Next.js API routes). Data fetching uses
// client-side calls — see src/utils/github.ts. Optional: NEXT_PUBLIC_GITHUB_API_TOKEN.
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
