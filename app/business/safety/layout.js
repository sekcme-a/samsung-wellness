import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "안전관리",
  description:
    "선제적 예방 시스템과 철저한 매뉴얼로 365일 빈틈없는 무사고 현장을 만듭니다.",
  url: "/business/safety",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
