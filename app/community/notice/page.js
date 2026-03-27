// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation"; // ✅ useRouter 추가
// import Navbar from "@/components/Navbar";
// import { createClient } from "@/utils/supabase/client";

// export default function NoticeList() {
//   const supabase = createClient();
//   const router = useRouter(); // ✅ 초기화
//   const [posts, setPosts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalCount, setTotalCount] = useState(0);
//   const postsPerPage = 10;

//   const NOTICE_BOARD_ID = "1b5a75db-2feb-4e7d-bbfb-9df0f34bb407";

//   const fetchPosts = async () => {
//     const from = (currentPage - 1) * postsPerPage;
//     const to = from + postsPerPage - 1;

//     let query = supabase
//       .from("posts")
//       .select("id, title, created_at", { count: "exact" }) // profiles 제거 (필요시 추가)
//       .eq("board_id", NOTICE_BOARD_ID)
//       .order("created_at", { ascending: false })
//       .range(from, to);

//     if (searchTerm) {
//       query = query.ilike("title", `%${searchTerm}%`);
//     }

//     const { data, count, error } = await query;
//     if (error) console.error("Error fetching posts:", error);
//     else {
//       setPosts(data);
//       setTotalCount(count || 0);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, [currentPage]);

//   const totalPages = Math.ceil(totalCount / postsPerPage);

//   return (
//     <main className="bg-white min-h-screen selection:bg-blue-100">
//       <Navbar />

//       <section className="pt-60 pb-40 px-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mb-20"
//           >
//             <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 mb-6 uppercase">
//               공지사항
//             </h1>
//             <p className="text-xl font-medium text-gray-500">
//               삼성웰니스의 새로운 소식을 전해드립니다.
//             </p>
//           </motion.div>

//           {/* Search Bar */}
//           <div className="mb-12 flex justify-end">
//             <div className="relative w-full md:w-96">
//               <input
//                 type="text"
//                 placeholder="검색어를 입력하세요"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && fetchPosts()}
//                 className="w-full px-8 py-4 bg-gray-50 rounded-full border-none focus:ring-2 focus:ring-blue-600 font-medium transition-all"
//               />
//               <button
//                 onClick={fetchPosts}
//                 className="absolute right-6 top-1/2 -translate-y-1/2 text-blue-600 font-bold"
//               >
//                 검색
//               </button>
//             </div>
//           </div>

//           {/* Table List */}
//           <div className="border-t-2 border-gray-900 overflow-x-auto">
//             <table className="w-full text-left border-collapse min-w-[800px]">
//               <thead>
//                 <tr className="bg-gray-50">
//                   <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">
//                     No.
//                   </th>
//                   <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">
//                     Subject
//                   </th>
//                   <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest text-center">
//                     Date
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {posts.map((post, index) => (
//                   <motion.tr
//                     key={post.id}
//                     whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
//                     onClick={() => router.push(`/community/notice/${post.id}`)}
//                     className="group transition-colors cursor-pointer"
//                   >
//                     <td className="px-8 py-8 text-sm font-bold text-gray-400">
//                       {totalCount - (currentPage - 1) * postsPerPage - index}
//                     </td>
//                     <td className="px-8 py-8">
//                       <span className="text-xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
//                         {post.title}
//                       </span>
//                     </td>
//                     <td className="px-8 py-8 text-sm font-medium text-gray-400 text-center">
//                       {new Date(post.created_at).toLocaleDateString("ko-KR")}
//                     </td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination */}
//           <div className="mt-20 flex justify-center gap-4">
//             {Array.from({ length: totalPages }, (_, i) => (
//               <button
//                 key={i + 1}
//                 onClick={() => setCurrentPage(i + 1)}
//                 className={`w-12 h-12 rounded-full font-black transition-all cursor-pointer
//                   ${
//                     currentPage === i + 1
//                       ? "bg-blue-600 text-white shadow-xl shadow-blue-100"
//                       : "text-gray-400 hover:bg-gray-100"
//                   }`}
//               >
//                 {i + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// app/community/notice/page.js (Server Component)
import { createClient } from "@/utils/supabase/server";
import NoticeListClient from "./NoticeListClient";
import Navbar from "@/components/Navbar";

// app/community/notice/page.js

export async function generateMetadata({ searchParams }) {
  const sParams = await searchParams;
  const currentPage = sParams.page || "1";
  const baseUrl = "https://samsungwellness.com/community/notice";

  return {
    title: currentPage === "1" ? "공지사항" : `공지사항 ${currentPage}페이지`,
    // 현재 페이지가 1페이지라면 파라미터가 없는 주소를 표준으로 설정
    alternates: {
      canonical:
        currentPage === "1" ? baseUrl : `${baseUrl}?page=${currentPage}`,
    },
  };
}

export default async function NoticePage({ searchParams }) {
  const supabase = await createClient();
  const NOTICE_BOARD_ID = "374a69c3-c48c-45e3-9820-5ae0309e325a";
  const postsPerPage = 10;

  // 현재 페이지 번호 (URL 쿼리스트링에서 가져옴, 없으면 1)
  const currentPage = Number(searchParams.page) || 1;
  const from = (currentPage - 1) * postsPerPage;
  const to = from + postsPerPage - 1;

  // 서버에서 첫 데이터 페칭 (SEO 핵심: HTML에 공지글 제목들이 포함됨)
  const {
    data: initialPosts,
    count,
    error,
  } = await supabase
    .from("posts")
    .select("id, title, created_at", { count: "exact" })
    .eq("board_id", NOTICE_BOARD_ID)
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) console.error("Error fetching posts:", error);

  return (
    <main className="bg-white min-h-screen selection:bg-blue-100">
      <Navbar />
      <NoticeListClient
        initialPosts={initialPosts || []}
        totalCount={count || 0}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        NOTICE_BOARD_ID={NOTICE_BOARD_ID}
      />
    </main>
  );
}
