import { build } from "velite";

class VeliteWebpackPlugin {
  static started = false;
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    // executed three times in nextjs
    // twice for the server (nodejs / edge runtime) and once for the client
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === "development";
      await build({ watch: dev, clean: !dev });
    });
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
    ],
  },
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value: `
  //             default-src 'self';
  //             script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://*.google-analytics.com https://www.google.com https://www.gstatic.com https://assets.aceternity.com https://*.vercel-scripts.com https://*.vercel.com;
  //             style-src 'self' 'unsafe-inline' https://vercel.live;
  //             img-src 'self' data: blob: https://assets.aceternity.com https://*.google-analytics.com;
  //             media-src 'none';
  //             connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://www.google.com https://*.vercel.com;
  //             font-src 'self' data: https://fonts.googleapis.com https://fonts.gstatic.com https://use.typekit.net https://p.typekit.net https://fonts.google.com/;
  //             frame-src 'self' https://vercel.live;
  //             object-src 'none';
  //             base-uri 'self';
  //             form-action 'self';
  //             frame-ancestors 'none';
  //             block-all-mixed-content;
  //             upgrade-insecure-requests;
  //           `
  //             .replace(/\s+/g, " ")
  //             .trim(),
  //         },
  //         {
  //           key: "X-DNS-Prefetch-Control",
  //           value: "on",
  //         },
  //         {
  //           key: "X-Frame-Options",
  //           value: "DENY",
  //         },
  //         {
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         {
  //           key: "X-XSS-Protection",
  //           value: "1; mode=block",
  //         },
  //         {
  //           key: "Referrer-Policy",
  //           value: "origin-when-cross-origin",
  //         },
  //         {
  //           key: "Strict-Transport-Security",
  //           value: "max-age=63072000; includeSubDomains; preload",
  //         },
  //         {
  //           key: "Permissions-Policy",
  //           value: "camera=(), microphone=(), geolocation=()",
  //         },
  //       ],
  //     },
  //   ];
  // },
};
export default nextConfig;
