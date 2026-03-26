import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "비전 및 운영철학",
  description:
    "공동주택 커뮤니티의 새로운 기준을 제시하며 입주민의 삶의 가치를 높입니다.",
  url: "/about/vision",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
