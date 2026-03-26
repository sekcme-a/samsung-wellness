"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // ✅ Next.js Image 컴포넌트 추가

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

export default function VisionPhilosophy() {
  return (
    <main className="bg-white min-h-screen selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* HERO SECTION: THE VISION */}
      <section className="relative pt-60 pb-40 px-6 bg-gray-900 text-white overflow-hidden">
        {/* Decorative Background Element */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[120px]"
        />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="text-blue-400 font-black uppercase text-xs mb-10 block"
          >
            Our Vision
          </motion.span>
          <motion.h1
            {...fadeIn}
            className="text-4xl md:text-7xl font-black tracking-tighter leading-tight mb-16 break-keep"
          >
            공동주택 커뮤니티의 <br />
            <span className="text-blue-500 italic mr-4">새로운 기준</span>이
            됩니다.
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            className="h-1 bg-white mx-auto mb-16"
          />
          <motion.p
            {...fadeIn}
            className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium break-keep"
          >
            삼성웰니스는 공동주택 커뮤니티 운영의 신뢰받는 전문 기업으로
            성장하여, <br className="hidden md:block" />
            입주민의 <span className="text-white">삶의 질 향상</span>과{" "}
            <span className="text-white">단지의 가치</span>를 높이는 최고의
            파트너가 되겠습니다.
          </motion.p>
        </div>
      </section>

      {/* PHILOSOPHY SECTION: THE CORE VALUES */}
      <section className="py-40 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute -left-10 -top-10 text-[12rem] font-black text-gray-50 -z-10 select-none">
              VALUE
            </div>
            <h2 className="text-5xl font-black tracking-tighter text-gray-900 mb-8 uppercase">
              Operating
              <br />
              Philosophy.
            </h2>
            <p className="text-lg text-blue-600 font-bold tracking-widest uppercase mb-12">
              운영 철학
            </p>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <span className="text-blue-600 font-black">01</span>
                </div>
                <p className="text-xl text-gray-700 font-medium leading-snug break-keep">
                  <strong className="text-gray-900">신의와 성실</strong>을
                  바탕으로 투명한 운영을 실천합니다.
                </p>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <span className="text-blue-600 font-black">02</span>
                </div>
                <p className="text-xl text-gray-700 font-medium leading-snug break-keep">
                  <strong className="text-gray-900">봉사의 정신</strong>으로
                  안전하고 쾌적한 운동시설 환경을 제공합니다.
                </p>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <span className="text-blue-600 font-black">03</span>
                </div>
                <p className="text-xl text-gray-700 font-medium leading-snug break-keep">
                  회원의 <strong className="text-gray-900">건강한 삶</strong>과
                  공동체의 발전에 기여합니다.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ✅ 이미지 영역 최적화 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative rounded-[4rem] overflow-hidden shadow-3xl aspect-square lg:aspect-auto lg:h-[700px] bg-gray-100"
          >
            <Image
              src="/images/home/philosopy.webp"
              alt="삼성웰니스 커뮤니티 라이프와 운영 철학"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
