export function createMetadata({ title, description, url }) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://samsungwellness.com${url}`,
      siteName: "삼성웰니스",
      type: "website",
      images: [
        {
          url: `/images/og_logo.png`,
          width: 1200,
          height: 630,
          alt: `삼성웰니스 로고`,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [`/images/og_logo.png`],
    },
    alternates: {
      canonical: `https://samsungwellness.com${url}`,
    },
  };
}
