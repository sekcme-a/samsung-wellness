"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CEOGreeting() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <main className="bg-white min-h-screen selection:bg-blue-600 selection:text-white">
      {/* TOP HEADER SECTION */}
      <section className="pt-48 pb-20 px-6">
        <div className="max-w-7xl mx-auto border-b-2 border-gray-900 pb-12">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-blue-600 font-black tracking-widest uppercase text-xs mb-6"
          >
            CEO Greeting
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 leading-[0.9]"
          >
            대표 인사말
          </motion.h1>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="pb-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* LEFT: CEO IMAGE & PROFILE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="aspect-[3/4] rounded-[4rem] overflow-hidden bg-gray-100 shadow-2xl relative group">
              <Image
                src="/images/greeting/ceo.webp"
                alt="삼성웰니스 대표이사 이육행"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-12 left-12 text-white z-10">
                <p className="text-sm font-bold opacity-70 mb-2 tracking-widest">
                  SAMSUNG WELLNESS CEO
                </p>
                <h2 className="text-4xl font-black tracking-tight italic">
                  이육행
                </h2>
              </div>
            </div>

            {/* <div className="pl-6 border-l-4 border-blue-600">
              <p className="text-gray-400 font-bold text-sm tracking-widest uppercase mb-2">
                Philosophy
              </p>
              <p className="text-xl font-bold text-gray-900 break-keep">
                {`"우리는 공간의 안전을 책임지고, 삶의 활기를 설계합니다."`}
              </p>
            </div> */}
          </motion.div>

          {/* RIGHT: MESSAGE TEXT (기본 텍스트 유지) */}
          <div className="lg:col-span-7 space-y-12 pt-10">
            {/* ... 기존 텍스트 코드 동일 ... */}
            <motion.div {...fadeInUp} className="space-y-6 text-gray-900">
              <h3 className="text-3xl font-black tracking-tight leading-tight break-keep">
                안녕하십니까. <br />
                주식회사 삼성웰니스 대표이사{" "}
                <span className="text-blue-600 underline decoration-4 underline-offset-8">
                  이육행
                </span>{" "}
                입니다.
              </h3>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="space-y-8 text-xl text-gray-600 font-medium leading-relaxed break-keep"
            >
              <p>존경하는 고객 여러분, 안녕하십니까.</p>
              <p>
                주식회사 삼성웰니스를 방문해 주셔서 진심으로 감사드립니다.
                삼성웰니스는 전문적인 체육시설 위탁운영 서비스를 기반으로 다양한
                시설을 체계적으로 관리하고 운영하는 기업입니다.
              </p>
              {/* 
              <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
                <p className="text-gray-900 italic font-bold">
                  특히 아파트 커뮤니티 내 체육시설 운영을 핵심 사업으로 하여
                  수영장, 피트니스센터, GX시설 등 다양한 생활체육 공간을 보다
                  안전하고 효율적으로 운영하고 있습니다.
                </p>
              </div> */}
              <p>
                {" "}
                특히 아파트 커뮤니티 내 체육시설 운영을 핵심 사업으로 하여
                수영장, 피트니스센터, GX시설 등 다양한 생활체육 공간을 보다
                안전하고 효율적으로 운영하고 있습니다.
              </p>
              <p>
                저희 삼성웰니스는 단순한 시설 관리에 머무르지 않고 전문 인력
                운영, 프로그램 기획, 시설 안전관리, 서비스 품질 향상까지
                종합적인 운영 시스템을 구축하여 고객 여러분께 보다 수준 높은
                체육시설 운영 서비스를 제공하고 있습니다.
              </p>
              <p>
                아파트 커뮤니티 시설은 입주민의 건강과 여가, 그리고 단지의
                가치를 높이는 중요한 공간인 만큼 전문성과 책임감을 바탕으로
                안정적이고 체계적인 운영을 실현하고 있습니다.
              </p>
              <p>
                앞으로도 삼성웰니스는 축적된 경험과 전문성을 바탕으로 고객
                여러분께 신뢰받는 체육시설 위탁운영 전문기업으로 성장해
                나가겠습니다.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="pt-10 space-y-4">
              <p className="text-gray-400 font-bold tracking-widest">
                고객 여러분의 지속적인 관심과 성원을 부탁드립니다.
              </p>
              <p className="text-gray-400 font-bold tracking-widest mb-10">
                감사합니다.
              </p>

              {/* ✅ Signature Section: 싸인 이미지로 교체 */}
              <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-10 border-t border-gray-100 pt-12 relative">
                <div></div>

                {/* ✅ 수정된 싸인 이미지 영역 */}
                {/* sm:absolute를 사용해 데스크탑에선 이름 옆에 자연스럽게 겹치도록 배치 */}
                <div className="relative w-40 h-20 sm:w-48 sm:h-24 sm:absolute sm:right-10 sm:bottom-10 opacity-80">
                  <Image
                    src="/images/greeting/sign.webp" // ✅ 싸인 이미지 경로 (PNG 권장)
                    alt="대표이사 이육행 싸인"
                    fill
                    className="object-contain object-bottom" // 원본 비율 유지하며 하단 정렬
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
