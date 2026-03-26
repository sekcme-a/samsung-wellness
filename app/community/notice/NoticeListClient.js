// NoticeListClient.js (Client Component)
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function NoticeListClient({
  initialPosts,
  totalCount,
  currentPage: serverPage,
  postsPerPage,
  NOTICE_BOARD_ID,
}) {
  const supabase = createClient();
  const router = useRouter();

  const [posts, setPosts] = useState(initialPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(serverPage);
  const [currentTotalCount, setCurrentTotalCount] = useState(totalCount);

  // 페이지 이동 시 데이터 페칭 (클라이언트 사이드 탐색용)
  const fetchPosts = async (targetPage = 1) => {
    const from = (targetPage - 1) * postsPerPage;
    const to = from + postsPerPage - 1;

    let query = supabase
      .from("posts")
      .select("id, title, created_at", { count: "exact" })
      .eq("board_id", NOTICE_BOARD_ID)
      .order("created_at", { ascending: false })
      .range(from, to);

    if (searchTerm) {
      query = query.ilike("title", `%${searchTerm}%`);
    }

    const { data, count, error } = await query;
    if (!error) {
      setPosts(data);
      setCurrentTotalCount(count || 0);
      setCurrentPage(targetPage);
      // URL 주소 업데이트 (뒤로가기 지원 및 SEO 유지)
      router.push(`?page=${targetPage}`, { scroll: false });
    }
  };

  const totalPages = Math.ceil(currentTotalCount / postsPerPage);

  return (
    <section className="pt-60 pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 mb-6 uppercase">
            공지사항
          </h1>
          <p className="text-xl font-medium text-gray-500">
            삼성웰니스의 새로운 소식을 전해드립니다.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="mb-12 flex justify-end">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && fetchPosts(1)}
              className="w-full px-8 py-4 bg-gray-50 rounded-full border-none focus:ring-2 focus:ring-blue-600 font-medium transition-all"
            />
            <button
              onClick={() => fetchPosts(1)}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-blue-600 font-bold"
            >
              검색
            </button>
          </div>
        </div>

        {/* Table List */}
        <div className="border-t-2 border-gray-900 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">
                  No.
                </th>
                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">
                  제목
                </th>
                <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest text-center">
                  날짜
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {posts.map((post, index) => (
                <motion.tr
                  key={post.id}
                  whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                  onClick={() => router.push(`/community/notice/${post.id}`)}
                  className="group transition-colors cursor-pointer"
                >
                  <td className="px-8 py-8 text-sm font-bold text-gray-400">
                    {currentTotalCount -
                      (currentPage - 1) * postsPerPage -
                      index}
                  </td>
                  <td className="px-8 py-8">
                    <span className="text-xl font-black line-clamp-1 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </span>
                  </td>
                  <td className="px-8 py-8 text-sm font-medium text-gray-400 text-center">
                    {new Date(post.created_at).toLocaleDateString("ko-KR")}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-20 flex justify-center gap-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => {
                fetchPosts(i + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`w-12 h-12 rounded-full font-black transition-all cursor-pointer
                ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white shadow-xl shadow-blue-100"
                    : "text-gray-400 hover:bg-gray-100"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
