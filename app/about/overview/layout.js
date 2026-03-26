import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "회사 개요",
  description:
    "투명한 운영과 신뢰를 바탕으로 체육시설의 새로운 가치를 만듭니다.",
  url: "/about/overview",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
