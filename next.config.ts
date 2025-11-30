import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Find the existing rule that handles SVG files
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.('.svg')
    );

    if (fileLoaderRule) {
      config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/,
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [/url/] },
          use: ['@svgr/webpack'],
        }
      );

      // Modify the file loader rule to ignore *.svg
      fileLoaderRule.exclude = /\.svg$/i;
    } else {
      // Fallback if no existing rule is found
      config.module.rules.push({
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
      });
    }

    return config;
  },
  turbopack: {},
};

export default nextConfig;
