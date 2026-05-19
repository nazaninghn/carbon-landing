export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://carbonless.network/#org',
        name: 'Carbonless Network',
        url: 'https://carbonless.network',
        logo: {
          '@type': 'ImageObject',
          url: 'https://carbonless.network/logo.png',
        },
        description:
          'Carbonless Network develops digital infrastructure for carbon accounting and sustainability assessment aligned with ISO 14064-1 and the GHG Protocol.',
        sameAs: ['https://www.linkedin.com/company/carbonless-network/'],
        parentOrganization: {
          '@type': 'Organization',
          name: 'Academia Danışmanlık',
          url: 'https://www.academiadanismanlik.com/',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://carbonless.network/#website',
        url: 'https://carbonless.network',
        name: 'Carbonless Network',
        publisher: { '@id': 'https://carbonless.network/#org' },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Carbonless',
        applicationCategory: 'BusinessApplication',
        description:
          'A carbon accounting platform for measuring and managing greenhouse gas emissions in accordance with ISO 14064-1 and the GHG Protocol.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Sustindex',
        applicationCategory: 'BusinessApplication',
        description:
          'A sustainability assessment platform evaluating ESG performance using structured KPI-based scoring methodologies.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
