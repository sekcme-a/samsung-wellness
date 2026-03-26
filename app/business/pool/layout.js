import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "수영장 운영",
  description:
    "전문 인력과 철저한 수질 관리 시스템으로 안전하고 깨끗한 수영장을 만듭니다.",
  url: "/business/pool",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
