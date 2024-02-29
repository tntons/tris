// const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');
 
// module.exports = withNextIntl({
//   // Other Next.js configuration ...
// });

// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

const withNextIntl = require('next-intl/plugin')();

// import withNextIntl from "next-intl/plugin";
/** @type {import('next').NextConfig} */
const nextConfig = {
};

module.exports = withNextIntl(nextConfig);