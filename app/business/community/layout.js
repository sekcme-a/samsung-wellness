import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "커뮤니티 시설 운영",
  description:
    "데이터 기반 통합 운영 시스템으로 단지의 가치와 입주민의 만족도를 높입니다.",
  url: "/business/community",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
