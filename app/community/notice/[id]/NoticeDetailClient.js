// NoticeDetailClient.js (Client Component)
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useEditor, EditorContent, Extension } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Link as TiptapLink } from "@tiptap/extension-link";
import { Youtube } from "@tiptap/extension-youtube";
import { TextStyle } from "@tiptap/extension-text-style";
import { FontFamily } from "@tiptap/extension-font-family";
import ResizeImage from "tiptap-extension-resize-image";
import { Calendar, User, Paperclip, List } from "lucide-react";

// FontSize 익스텐션 (기존과 동일)
const FontSize = Extension.create({
  name: "fontSize",
  addGlobalAttributes() {
    return [
      {
        types: ["textStyle"],
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element) =>
              element.style.fontSize.replace(/['"]+/g, ""),
            renderHTML: (attributes) =>
              attributes.fontSize
                ? { style: `font-size: ${attributes.fontSize}` }
                : {},
          },
        },
      },
    ];
  },
});

export default function NoticeDetailClient({ post }) {
  const editor = useEditor({
    editable: false,
    content: post.content, // 서버에서 받은 초기 데이터 삽입
    extensions: [
      StarterKit,
      TextStyle,
      FontFamily,
      FontSize,
      ResizeImage.configure({ allowBase64: true }),
      TiptapLink.configure({ openOnClick: true }),
      Youtube.configure({ width: 640, height: 360 }),
    ],
    immediatelyRender: false,
    editorProps: {
      attributes: { class: "prose prose-slate max-w-none focus:outline-none" },
    },
  });

  // 에디터가 로드된 후 콘텐츠 업데이트 (필요 시)
  useEffect(() => {
    if (editor && post.content) {
      editor.commands.setContent(post.content);
    }
  }, [editor, post.content]);

  return (
    <main className="min-h-screen pb-20">
      <Navbar />

      <section className="pt-32 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/community/notice"
              className="hover:text-black text-blue-600 font-bold"
            >
              공지사항
            </Link>
          </nav>

          <div className="bg-white border-t-2 border-black border-b border-gray-200">
            <header className="px-6 py-8 md:px-10">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 break-keep leading-snug"
              >
                {post.title}
              </motion.h1>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[13px] text-gray-500 border-t border-gray-50 pt-6">
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="font-semibold text-gray-700">
                    {post.profiles?.full_name || "관리자"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>
                    {new Date(post.created_at).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </header>

            <article className="px-6 py-12 md:px-10 border-t border-gray-100 min-h-[500px]">
              {/* SEO를 위해 에디터가 로드되기 전에도 서버 데이터가 보일 수 있도록 처리 가능 */}
              <div className="tiptap-content text-gray-800 leading-relaxed break-keep">
                <EditorContent editor={editor} />
                {/* 에디터 미로딩 시 보일 백업 (선택사항) */}
                {!editor && (
                  <div
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    className="prose max-w-none"
                  />
                )}
              </div>
            </article>

            {/* 첨부파일 섹션 */}
            {post.file_urls?.length > 0 && (
              <div className="px-6 py-6 md:px-10 bg-gray-50 border-t border-gray-100">
                <div className="flex items-start gap-4">
                  <span className="flex items-center gap-1 text-[13px] font-bold text-gray-500 mt-1 uppercase tracking-tight">
                    <Paperclip className="w-3.5 h-3.5" /> Attachments
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {post.file_urls.map((url, i) => (
                      <a
                        key={i}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-xs font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm"
                      >
                        {url.split("/").pop()}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/community/notice"
              className="flex items-center gap-2 px-8 py-3 bg-white border border-gray-300 rounded-full text-sm font-bold text-gray-600 hover:bg-gray-900 hover:text-white transition-all"
            >
              <List className="w-4 h-4" /> 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .tiptap-content .prose {
          font-size: 1.05rem;
          color: #333;
        }
        .tiptap-content .prose p {
          margin-bottom: 1.5rem;
        }
        .tiptap-content .prose img {
          border-radius: 8px;
          margin: 2rem auto;
        }
        .tiptap-content .prose ul {
          list-style-type: disc !important;
          padding-left: 1.5rem !important;
        }
        .tiptap-content .prose ol {
          list-style-type: decimal !important;
          padding-left: 1.5rem !important;
        }
        .tiptap-content .prose a {
          color: #2563eb;

          text-decoration: underline;

          font-weight: 500;
        }
      `}</style>
    </main>
  );
}
