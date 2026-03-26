import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "프로그램 운영",
  description:
    "트렌디한 맞춤형 GX 프로그램으로 입주민의 참여를 이끌고 단지에 활력을 더합니다.",
  url: "/business/gx",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
