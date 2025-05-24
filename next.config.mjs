import { withSentryConfig } from '@sentry/nextjs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // add any custom Next.js config here if needed
};

// Wrap with Sentry first, then Bundle Analyzer
const sentryConfig = withSentryConfig(nextConfig, {
  org: "dipayan",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});

export default withBundleAnalyzer(sentryConfig);



// import {withSentryConfig} from '@sentry/nextjs';
// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default withSentryConfig(nextConfig, {
// // For all available options, see:
// // https://github.com/getsentry/sentry-webpack-plugin#options

// org: "dipayan",
// project: "javascript-nextjs",

// // Only print logs for uploading source maps in CI
// silent: !process.env.CI,

// // For all available options, see:
// // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// // Upload a larger set of source maps for prettier stack traces (increases build time)
// widenClientFileUpload: true,

// // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
// // This can increase your server load as well as your hosting bill.
// // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
// // side errors will fail.
// // tunnelRoute: "/monitoring",

// // Hides source maps from generated client bundles
// hideSourceMaps: true,

// // Automatically tree-shake Sentry logger statements to reduce bundle size
// disableLogger: true,

// // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
// // See the following for more information:
// // https://docs.sentry.io/product/crons/
// // https://vercel.com/docs/cron-jobs
// automaticVercelMonitors: true,
// });


// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
//   });
  
//   module.exports = withBundleAnalyzer({
//     // your existing Next.js config
//   });
  