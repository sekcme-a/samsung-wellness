import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "피트니스센터 운영",
  description:
    "전문적인 트레이닝과 체계적인 시설 관리로 입주민의 건강한 루틴을 설계합니다.",
  url: "/business/fitness",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
