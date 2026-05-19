export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://www.carbonless.network/sitemap.xml',
    host: 'https://www.carbonless.network',
  };
}
