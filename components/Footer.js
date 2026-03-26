import Link from "next/link";
import Image from "next/image"; // ✅ Image 컴포넌트 추가

export default function Footer() {
  return (
    <footer className="py-24 bg-black text-white px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-20">
        <div className="flex-1">
          {/* ✅ 텍스트 로고 대신 이미지 로고 적용 */}
          <Link href="/" className="inline-block mb-8">
            <Image
              src="/images/logo-white.png" // 💡 실제 로고 이미지 경로로 수정하세요
              alt="SAMSUNG WELLNESS"
              width={200} // 💡 로고 너비에 맞게 조절하세요
              height={40} // 💡 로고 높이에 맞게 조절하세요
              className="object-contain"
              // unoptimized
            />
          </Link>

          <p className="text-gray-500 max-w-xs leading-relaxed">
            당신의 웰니스 라이프, <br />
            삼성웰니스가 설계합니다.
          </p>
        </div>

        <div className="flex-[2] grid grid-cols-2 md:grid-cols-3 gap-12">
          {/* 회사소개 섹션 */}
          <div>
            <h4 className="font-bold mb-6 text-blue-500 uppercase tracking-widest text-xs">
              회사소개
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link
                  href="/about/overview"
                  className="hover:text-white transition-colors"
                >
                  회사개요(사훈, 경영이념)
                </Link>
              </li>
              <li>
                <Link
                  href="/about/vision"
                  className="hover:text-white transition-colors"
                >
                  비전 및 운영철학
                </Link>
              </li>
              <li>
                <Link
                  href="/about/greeting"
                  className="hover:text-white transition-colors"
                >
                  대표 인사말
                </Link>
              </li>
            </ul>
          </div>

          {/* 사업분야 섹션 */}
          <div>
            <h4 className="font-bold mb-6 text-blue-500 uppercase tracking-widest text-xs">
              사업분야
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link
                  href="/business/community"
                  className="hover:text-white transition-colors"
                >
                  커뮤니티 시설운영
                </Link>
              </li>
              <li>
                <Link
                  href="/business/fitness"
                  className="hover:text-white transition-colors"
                >
                  피트니스센터 운영
                </Link>
              </li>
              <li>
                <Link
                  href="/business/gx"
                  className="hover:text-white transition-colors"
                >
                  프로그램(G.X)운영
                </Link>
              </li>
              <li>
                <Link
                  href="/business/pool"
                  className="hover:text-white transition-colors"
                >
                  수영장 운영
                </Link>
              </li>
              <li>
                <Link
                  href="/business/safety"
                  className="hover:text-white transition-colors"
                >
                  안전관리
                </Link>
              </li>
            </ul>
          </div>

          {/* Address 섹션 */}
          <div>
            <h4 className="font-bold mb-6 text-blue-500 uppercase tracking-widest text-xs">
              Contact
            </h4>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm leading-loose">
                서울시 도봉구 시루봉로 234, 2층
                <br />
                T. 02-3492-7700
                <br />
                E. sswellness@naver.com
              </p>
              {/* 추가 문의 링크 */}
              <div className="pt-2">
                <Link
                  href="/community/contact"
                  className="text-xs font-bold bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  문의하기 바로가기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-white/10 text-xs text-gray-600 tracking-widest flex flex-col md:flex-row justify-between gap-4 uppercase">
        <p>© 2026 SAMSUNG WELLNESS. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <Link
            href="/community/notice"
            className="hover:text-white transition-colors"
          >
            Notice
          </Link>
          <Link
            href="/careers/apply"
            className="hover:text-white transition-colors font-bold text-gray-400"
          >
            Careers
          </Link>
        </div>
      </div>
    </footer>
  );
}
