/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enabling React Strict Mode
    reactStrictMode: true,
  
    // Enabling TypeScript support
    typescript: {
      ignoreBuildErrors: false,
    },
  
    // Enabling Image Optimization
    images: {
      domains: ['images.unsplash.com'], // Add your domains here
    },
  
    // Custom Webpack Configuration
    webpack: (config, { isServer }) => {
      // Modify or extend the Webpack configuration here
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          path: false,
        };
      }
      return config;
    },
  
    // Internationalized Routing
    i18n: {
      locales: ['en', 'fr'], // Add your locales here
      defaultLocale: 'en',
    },
  
    // Other configurations...
  };
  
  export default nextConfig;
  