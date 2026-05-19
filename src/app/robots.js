export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://carbonless.network/sitemap.xml',
    host: 'https://carbonless.network',
  };
}
