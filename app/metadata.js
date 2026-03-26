const metadata = {
  title: "삼성웰니스",
  title: {
    default: "삼성웰니스",
    template: "%s | 삼성웰니스",
  },
  description:
    "당신의 웰니스 라이프, 모든 공간에 활력을 더하는 삼성웰니스가 설계합니다.",
  icons: { shortcut: "/favicon.ico" },
  keywords: [
    "삼성웰니스",
    "수영장 위탁운영",
    "커뮤니티 센터 관리",
    "아파트 커뮤니티 운영",
    "G.X 프로그램",
    "스포츠 시설 관리",
    "수질 관리 시스템",
    "안전 관리 솔루션",
  ],
  openGraph: {
    title: "삼성웰니스",
    description:
      "당신의 웰니스 라이프, 모든 공간에 활력을 더하는 삼성웰니스가 설계합니다.",
    url: "https://samsungwellness.com", // 실제 도메인으로 변경 필요
    siteName: "삼성웰니스",
    images: [
      {
        url: "/images/og-logo.png", // public 폴더 내 대표 이미지 경로
        width: 1200,
        height: 630,
        alt: "삼성웰니스 로고",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "삼성웰니스",
    description:
      "당신의 웰니스 라이프, 모든 공간에 활력을 더하는 삼성웰니스가 설계합니다.",
    images: ["/images/og-logo.png"],
  },
  alternates: {
    canonical: "https://samsungwellness.com",
  },
};

export default metadata;
