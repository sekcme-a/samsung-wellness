// "use client";
// import { useEffect, useState, use } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import Navbar from "@/components/Navbar";
// import { createClient } from "@/utils/supabase/client";

// // Tiptap 관련
// import { useEditor, EditorContent, Extension } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import { Link as TiptapLink } from "@tiptap/extension-link";
// import { Youtube } from "@tiptap/extension-youtube";
// import { TextStyle } from "@tiptap/extension-text-style";
// import { FontFamily } from "@tiptap/extension-font-family";
// import ResizeImage from "tiptap-extension-resize-image";

// // Lucide 아이콘 추가 (UI 개선용)
// import { FileText, Calendar, User, paperclip, List } from "lucide-react";

// const FontSize = Extension.create({
//   name: "fontSize",
//   addOptions() {
//     return { types: ["textStyle"] };
//   },
//   addGlobalAttributes() {
//     return [
//       {
//         types: this.options.types,
//         attributes: {
//           fontSize: {
//             default: null,
//             parseHTML: (element) =>
//               element.style.fontSize.replace(/['"]+/g, ""),
//             renderHTML: (attributes) => {
//               if (!attributes.fontSize) return {};
//               return { style: `font-size: ${attributes.fontSize}` };
//             },
//           },
//         },
//       },
//     ];
//   },
//   addCommands() {
//     return {
//       setFontSize:
//         (fontSize) =>
//         ({ chain }) =>
//           chain().setMark("textStyle", { fontSize }).run(),
//       unsetFontSize:
//         () =>
//         ({ chain }) =>
//           chain()
//             .setMark("textStyle", { fontSize: null })
//             .removeEmptyTextStyle()
//             .run(),
//     };
//   },
// });

// export default function NoticeDetail({ params: paramsPromise }) {
//   const supabase = createClient();
//   const params = use(paramsPromise);
//   const router = useRouter();
//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const editor = useEditor({
//     editable: false,
//     content: "",
//     extensions: [
//       StarterKit.configure({
//         bulletList: { keepMarks: true, keepAttributes: false },
//         orderedList: { keepMarks: true, keepAttributes: false },
//       }),
//       TextStyle,
//       FontFamily,
//       FontSize,
//       ResizeImage.configure({ allowBase64: true }),
//       TiptapLink.configure({ openOnClick: true }), // 뷰어에서는 클릭 가능하게
//       Youtube.configure({ width: 640, height: 360 }),
//     ],
//     immediatelyRender: false,
//     editorProps: {
//       attributes: {
//         class: "prose prose-slate max-w-none focus:outline-none",
//       },
//     },
//   });

//   useEffect(() => {
//     const fetchPost = async () => {
//       const { data, error } = await supabase
//         .from("posts")
//         .select("*, profiles(full_name)")
//         .eq("id", params.id)
//         .single();

//       if (!error && data) {
//         setPost(data);
//         editor?.commands.setContent(data.content);
//       }
//       setLoading(false);
//     };
//     if (editor) fetchPost();
//   }, [params.id, editor]);

//   if (loading)
//     return (
//       <div className="min-h-screen flex items-center justify-center font-bold text-gray-500">
//         데이터를 불러오는 중입니다...
//       </div>
//     );

//   if (!post) return null;

//   return (
//     <main className=" min-h-screen pb-20">
//       <Navbar />

//       {/* 상단 여백 조절 (pt-60 -> pt-32) */}
//       <section className="pt-32 px-4">
//         <div className="max-w-5xl mx-auto">
//           {/* Breadcrumbs - 더 조밀하게 */}
//           <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
//             <Link href="/" className="hover:text-black">
//               Home
//             </Link>
//             <span>/</span>
//             <Link
//               href="/community/notice"
//               className="hover:text-black text-blue-600 font-bold"
//             >
//               공지사항
//             </Link>
//           </nav>

//           {/* 한국식 게시판 헤더 스타일 */}
//           <div className="bg-white border-t-2 border-black border-b border-gray-200">
//             <header className="px-6 py-8 md:px-10">
//               <motion.h1
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 break-keep leading-snug"
//               >
//                 {post.title}
//               </motion.h1>

//               <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[13px] text-gray-500 border-t border-gray-50 pt-6">
//                 <div className="flex items-center gap-1.5">
//                   <User className="w-4 h-4 text-gray-400" />
//                   <span className="font-semibold text-gray-700">관리자</span>
//                 </div>
//                 <div className="flex items-center gap-1.5">
//                   <Calendar className="w-4 h-4 text-gray-400" />
//                   <span>
//                     {new Date(post.created_at).toLocaleDateString("ko-KR", {
//                       year: "numeric",
//                       month: "long",
//                       day: "numeric",
//                     })}
//                   </span>
//                 </div>
//                 {/* 조회수 등 추가 데이터가 있다면 여기에 배치 */}
//               </div>
//             </header>

//             {/* 본문 영역 */}
//             <article className="px-6 py-12 md:px-10 border-t border-gray-100 min-h-[500px]">
//               <div className="tiptap-content text-gray-800 leading-relaxed break-keep">
//                 <EditorContent editor={editor} />
//               </div>
//             </article>

//             {/* 첨부파일 섹션 - 본문 바로 아래에 간결하게 배치 */}
//             {post.file_urls && post.file_urls.length > 0 && (
//               <div className="px-6 py-6 md:px-10 bg-gray-50 border-t border-gray-100">
//                 <div className="flex items-start gap-4">
//                   <span className="flex items-center gap-1 text-[13px] font-bold text-gray-500 mt-1 uppercase tracking-tight">
//                     <paperclip className="w-3.5 h-3.5" /> Attachments
//                   </span>
//                   <div className="flex flex-wrap gap-2">
//                     {post.file_urls.map((url, i) => (
//                       <a
//                         key={i}
//                         href={url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-xs font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm"
//                       >
//                         {url.split("/").pop()}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* 하단 버튼 바 */}
//           <div className="mt-8 flex justify-center">
//             <Link
//               href="/community/notice"
//               className="flex items-center gap-2 px-8 py-3 bg-white border border-gray-300 rounded-full text-sm font-bold text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all shadow-sm"
//             >
//               <List className="w-4 h-4" />
//               목록으로 돌아가기
//             </Link>
//           </div>
//         </div>
//       </section>

//       <style jsx global>{`
//         /* Tiptap 스타일 정밀 조정 */
//         .tiptap-content .prose {
//           font-size: 1.05rem;
//           color: #333;
//         }
//         .tiptap-content .prose p {
//           margin-bottom: 1.5rem;
//         }
//         .tiptap-content .prose img {
//           border-radius: 8px;
//           margin: 2rem auto;
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
//         }
//         .tiptap-content .prose a {
//           color: #2563eb;
//           text-decoration: underline;
//           font-weight: 500;
//         }
//         .tiptap-content .prose ul {
//           list-style-type: disc !important;
//           padding-left: 1.5rem !important;
//         }
//         .tiptap-content .prose ol {
//           list-style-type: decimal !important;
//           padding-left: 1.5rem !important;
//         }
//         .tiptap-content .prose blockquote {
//           border-left: 4px solid #000 !important;
//           background: #f9f9f9;
//           padding: 1.5rem !important;
//           font-style: normal !important;
//           border-radius: 0 8px 8px 0;
//         }
//       `}</style>
//     </main>
//   );
// }

// app/community/notice/[id]/page.js (Server Component)
import { createClient } from "@/utils/supabase/server";
import NoticeDetailClient from "./NoticeDetailClient";
import { notFound } from "next/navigation";

// 동적 SEO 메타데이터 설정
export async function generateMetadata({ params }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: post } = await supabase
    .from("posts")
    .select("title, content")
    .eq("id", id)
    .single();

  if (!post) return { title: "게시글을 찾을 수 없습니다" };

  // 본문 요약 (Description용)
  const description = post.content?.replace(/<[^>]*>/g, "").slice(0, 45);

  return {
    title: `${post.title}`,
    description: description || "삼성웰니스의 새로운 소식을 전해드립니다.",
    openGraph: {
      title: post.title,
      description: description,
      type: "article",
    },
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  const supabase = await createClient();

  // 서버에서 게시글 데이터 가져오기
  const { data: post, error } = await supabase
    .from("posts")
    .select("*, profiles(full_name)")
    .eq("id", id)
    .single();

  if (error || !post) {
    notFound();
  }

  return <NoticeDetailClient post={post} />;
}
