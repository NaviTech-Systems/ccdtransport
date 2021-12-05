module.exports = {
  globDirectory: "static/",
  globPatterns: ["**/*.{png,jpeg}"],
  runtimeCaching: [
    {
      // Match any request ends with .png, .jpg, .jpeg or .svg.
      urlPattern: /.(?:png|jpg|jpeg|svg|js)$/,

      // Apply a cache-first strategy.
      handler: "StaleWhileRevalidate",

      options: {
        // Use a custom cache name.
        cacheName: "svelte-app",

        // Only cache 50 images.
        expiration: {
          maxEntries: 100,
        },
      },
    },
  ],
  swDest: "static/sw.js",
};
