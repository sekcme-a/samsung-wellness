import { NextResponse } from "next/server";

export function GET() {
  const content = `
User-agent: *
Allow: /
Sitemap: https://www.xn--9i1bp8xbkap3cd5j.kr/sitemap.xml
  `.trim();

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
