import { createClient } from "@/utils/supabase/server";

export async function GET() {
  const supabase = await createClient();

  const baseUrl = "https://samsungwellness.com";
  const today = "2026-03-24T00:00:00Z";

  // 로그인은 SEO에서 의미 없으므로 생략 또는 priority 0.1
  const staticURLs = [
    {
      loc: baseUrl,
      lastmod: today,
      changefreq: "monthly",
      priority: "1.0",
    },
    {
      loc: `${baseUrl}/about/greeting`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/about/overview`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/about/vision`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/business/community`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/business/fitness`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/business/gx`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/business/pool`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/business/safety`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/careers/apply`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/community/notice`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/community/contact`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
  ];

  const noticesBoardId = "1b5a75db-2feb-4e7d-bbfb-9df0f34bb407";

  const { data: notices } = await supabase
    .from("posts")
    .select("id, created_at")
    .eq("board_id", noticesBoardId);

  const noticeURLS =
    notices?.map((notice) => ({
      loc: `${baseUrl}/community/notice/${notice.id}`,
      lastmod: new Date(notice.created_at).toISOString(),
      changefreq: "yearly",
      priority: "0.6",
    })) || [];

  const urls = [...staticURLs, ...noticeURLS]
    .map((url) => {
      return `
     <url>
       <loc>${url.loc}</loc>
       <lastmod>${url.lastmod}</lastmod>
       ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ""}
       <priority>${url.priority}</priority>
     </url>
   `;
    })
    .join("");

  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>  
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>
  `.trim();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
