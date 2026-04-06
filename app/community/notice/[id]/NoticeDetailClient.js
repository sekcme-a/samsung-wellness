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
import { Calendar, User, Paperclip, List, Download } from "lucide-react";

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
    content: post.content,
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

  useEffect(() => {
    if (editor && post.content) editor.commands.setContent(post.content);
  }, [editor, post.content]);

  return (
    <main className="min-h-screen pb-20 text-black">
      <Navbar />
      <section className="pt-32 px-4">
        <div className="max-w-5xl mx-auto">
          {/* 상단 네비게이션 */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <span>/</span>
            <Link href="/community/notice" className="text-blue-600 font-bold">
              공지사항
            </Link>
          </nav>

          <div className="bg-white border-t-2 border-black border-b border-gray-200">
            <header className="px-6 py-8 md:px-10">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-3xl font-bold mb-6"
              >
                {post.title}
              </motion.h1>
              <div className="flex flex-wrap items-center gap-x-6 text-[13px] text-gray-500 border-t pt-6">
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  <span className="font-semibold text-gray-700">
                    {post.profiles?.full_name || "관리자"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.created_at).toLocaleDateString()}</span>
                </div>
              </div>
            </header>

            <article className="px-6 py-12 md:px-10 border-t border-gray-100 min-h-[400px]">
              <div className="tiptap-content">
                <EditorContent editor={editor} />
                {!editor && (
                  <div
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    className="prose max-w-none"
                  />
                )}
              </div>
            </article>

            {/* 💡 첨부파일 섹션 (수정된 부분) */}
            {post.attachments && post.attachments.length > 0 && (
              <div className="px-6 py-6 md:px-10 bg-gray-50 border-t border-gray-100">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="flex items-center gap-1.5 text-[13px] font-bold text-gray-500 mt-1 uppercase">
                    <Paperclip className="w-4 h-4" /> 첨부파일 (
                    {post.attachments.length})
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.attachments.map((file, i) => (
                      <a
                        key={i}
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={file.name}
                        className="group flex items-center gap-3 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm"
                      >
                        <span className="max-w-[200px] truncate">
                          {file.name}
                        </span>
                        <Download className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-500" />
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
              className="flex items-center gap-2 px-8 py-3 bg-white border border-gray-300 rounded-full text-sm font-bold text-gray-600 hover:bg-black hover:text-white transition-all"
            >
              <List className="w-4 h-4" /> 목록으로
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .tiptap-content .prose img {
          border-radius: 8px;
          margin: 2rem auto;
        }
        .tiptap-content .prose a {
          color: #2563eb;
          text-decoration: underline;
        }
      `}</style>
    </main>
  );
}
