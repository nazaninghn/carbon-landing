import '@/styles/globals.css';
import { LanguageProvider } from '@/components/LanguageProvider';

export const metadata = {
  title: 'Carbonless Network - Carbon and Sustainability Intelligence Platform',
  description: 'Digital platforms for carbon accounting and sustainability assessment aligned with international standards.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
