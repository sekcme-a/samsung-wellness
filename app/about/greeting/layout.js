// app/about/greeting/layout.js

import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "대표 인사말",
  description:
    "대표이사 이육행의 인사말입니다. 전문성과 책임감을 바탕으로 체계적인 체육시설 운영을 약속드립니다.",
  url: "/about/greeting",
});

export default function GreetingLayout({ children }) {
  return <>{children}</>;
}
