import '@/styles/globals.css';

export const metadata = {
  title: 'climate_tech-saas-modern',
  description: 'climate_tech-saas-modern',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
