"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileOpen]);

  // ✅ 각 메뉴 클릭 시 이동할 경로(href)를 추가했습니다.
  const menuItems = [
    {
      title: "회사소개",
      sub: [
        { name: "회사개요(사훈, 경영이념)", href: "/about/overview" },
        { name: "비전 및 운영철학", href: "/about/vision" },
        { name: "대표 인사말", href: "/about/greeting" },
      ],
    },
    {
      title: "사업분야",
      sub: [
        { name: "커뮤니티 시설 운영", href: "/business/community" },
        { name: "피트니스센터 운영", href: "/business/fitness" },
        { name: "프로그램(G.X)운영", href: "/business/gx" },
        { name: "수영장 운영", href: "/business/pool" },
        { name: "안전관리", href: "/business/safety" },
      ],
    },
    {
      title: "커뮤니티",
      sub: [
        { name: "공지사항", href: "/community/notice" },
        { name: "문의하기", href: "/community/contact" },
      ],
    },
    {
      title: "인재채용",
      sub: [{ name: "입사지원", href: "/careers/apply" }],
    },
  ];

  return (
    <>
      <nav className="fixed w-full z-[100] top-0 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between h-20 items-center">
            <Link href="/" className="relative z-[110] flex items-center">
              <div className="relative w-[160px] h-[40px] md:w-[200px] md:h-[50px]">
                <Image
                  src="/images/logo.webp"
                  alt="삼성웰니스 로고"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="relative group h-20 flex items-center"
                  onMouseEnter={() => setActiveMenu(item.title)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="text-[15px] font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-20 left-1/2 -translate-x-1/2 w-56 bg-white shadow-2xl rounded-2xl border border-gray-100 p-4 transition-all duration-300 ${
                      activeMenu === item.title
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {item.sub.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href} // ✅ href 연결
                        className="block px-4 py-2.5 text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Hamburger Button (모바일) */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 text-gray-900 z-[110] transition-transform duration-300"
              aria-label="Toggle Menu"
            >
              {isMobileOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[90] md:hidden transition-all duration-500 ease-in-out ${
          isMobileOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-full"
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-8 pb-10 overflow-y-auto">
          {menuItems.map((item, idx) => (
            <div key={item.title} className="mb-10">
              <p className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-4 opacity-50">
                0{idx + 1}
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {item.sub.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href} // ✅ href 연결
                    onClick={() => setIsMobileOpen(false)}
                    className="text-lg text-gray-500 hover:text-blue-600"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-auto pt-10 border-t border-gray-100 text-sm text-gray-400">
            <p>T. 02-3492-7700</p>
            <p>E. sswellness@naver.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
