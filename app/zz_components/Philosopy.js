import Image from "next/image";
import Link from "next/link";

export default function Philosophy() {
  return (
    <section className="py-40 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* 상단: 비전(Vision) 기반 타이포그래피 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-8">
            <span className="inline-block text-blue-600 font-black tracking-[0.2em] uppercase text-sm mb-6">
              Our Vision & Philosophy
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter break-keep">
              단지의 가치를 높이는 <br />
              <span className="text-blue-600">신뢰받는 파트너</span>
            </h2>
          </div>
          <div className="lg:col-span-4 pb-2">
            <p className="text-xl text-gray-500 leading-relaxed font-medium break-keep">
              삼성웰니스는 공동주택 커뮤니티 운영의 전문성을 바탕으로 입주민의
              삶의 질을 향상시키고, 주거 단지의 품격을 완성하는 동반자가 됩니다.
            </p>
          </div>
        </div>

        {/* 비대칭 레이아웃: 운영철학 및 경영이념 */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* 왼쪽: 운영철학 (이미지 카드) */}
          <div className="flex-[1.4] relative group rounded-[3.5rem] overflow-hidden min-h-[550px] shadow-2xl">
            <Image
              src="/images/home/philosopy.webp"
              alt="삼성웰니스 비전"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
            />
            {/* 오버레이: 운영철학 핵심 문구 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-12 flex flex-col justify-end">
              <span className="text-blue-400 font-bold mb-4 tracking-widest uppercase text-sm">
                Operation Philosophy
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight break-keep">
                신의와 성실로 빚어내는 <br />
                투명한 운영의 가치
              </h3>
              <p className="text-white/70 max-w-md leading-relaxed break-keep font-medium">
                우리는 정직과 신뢰를 바탕으로 모든 시설을 투명하게 관리하며,
                봉사의 정신으로 입주민이 체감할 수 있는 쾌적한 환경을
                실현합니다.
              </p>
            </div>
          </div>

          {/* 오른쪽: 경영이념 기반 핵심 가치 리스트 */}
          <div className="flex-1 flex flex-col gap-8">
            {/* 가치 1: 안전과 쾌적함 */}
            <div className="group p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:bg-blue-600 transition-all duration-500 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-600 group-hover:text-blue-200 tracking-widest uppercase block mb-2">
                    Management Ideology
                  </span>
                  <h4 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors break-keep">
                    안전하고 쾌적한 <br />
                    운동 시설 환경 제공
                  </h4>
                </div>
              </div>
              <p className="text-gray-500 group-hover:text-blue-100 mt-6 leading-relaxed transition-colors break-keep">
                봉사의 정신을 핵심으로 삼아, 회원이 안심하고 이용할 수 있는
                최상의 스포츠 인프라를 유지합니다.
              </p>
            </div>

            {/* 가치 2: 건강과 공동체 */}
            <div className="group p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:bg-blue-600 transition-all duration-500 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-600 group-hover:text-blue-200 tracking-widest uppercase block mb-2">
                    Social Value
                  </span>
                  <h4 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors break-keep">
                    건강한 삶과 <br />
                    공동체의 가치 향상
                  </h4>
                </div>
              </div>
              <p className="text-gray-500 group-hover:text-blue-100 mt-6 leading-relaxed transition-colors break-keep">
                회원 개인의 건강 증진을 넘어, 단지 내 소통과 공동체의 발전에
                기여하는 활기찬 문화를 만듭니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 푸터 느낌의 버튼 존 */}
      <div className="mt-20 flex justify-center">
        <Link href="/about/vision">
          <button className="  cursor-pointer px-12 py-6 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-200 transition-all duration-300 flex items-center gap-4 group">
            삼성웰니스 비전 더보기
            <svg
              className="w-5 h-5 group-hover:translate-x-2 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}
