"use client";
import { motion } from "framer-motion";

export default function CompanyOverview() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const lineDraw = {
    initial: { width: 0 },
    animate: { width: "100%" },
    transition: { duration: 1.2, delay: 0.5 },
  };

  return (
    <main className="bg-white min-h-screen selection:bg-blue-100">
      {/* HEADER SECTION */}
      <section className="pt-40 pb-20 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs mb-6 block"
          >
            Company Overview
          </motion.span>
          <motion.h1
            {...fadeIn}
            className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 leading-none mb-10"
          >
            투명함으로 쌓아온 <br />
            <span className="text-gray-300 italic">신뢰의 기록.</span>
          </motion.h1>
        </div>
      </section>

      {/* SECTION 1: 사훈 (PRECEPT) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <h2 className="text-sm font-black text-gray-400 tracking-widest uppercase mb-4">
              01 / 사훈
            </h2>
            <p className="text-xl font-bold text-gray-900 break-keep">
              삼성웰니스가 나아가야 할 <br />
              올바른 길의 이정표입니다.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "신의 (信義)",
                desc: "믿음과 의리를 바탕으로 고객과의 약속을 최우선으로 지킵니다.",
                en: "TRUST",
              },
              {
                title: "성실 (誠實)",
                desc: "모든 업무에 정성을 다하며 끊임없이 노력하여 완벽을 기합니다.",
                en: "SINCERITY",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-12 bg-gray-50 rounded-[3rem] border border-gray-100 relative overflow-hidden group"
              >
                <span className="absolute -right-4 -top-4 text-9xl font-black text-gray-100 group-hover:text-blue-50 transition-colors">
                  {item.en}
                </span>
                <h3 className="text-4xl font-black text-gray-900 mb-6 relative z-10">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed break-keep relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: 경영이념 (MANAGEMENT PHILOSOPHY) */}
      <section className="py-32 px-6 bg-gray-900 text-white rounded-[4rem] mx-4 md:mx-10 mb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-sm font-black text-blue-500 tracking-[0.4em] uppercase mb-8 text-center">
              Management Philosophy
            </h2>
            <motion.div
              {...lineDraw}
              className="h-[1px] bg-white/20 mx-auto max-w-xs mb-12"
            />
            <h3 className="text-4xl md:text-6xl font-bold text-center tracking-tighter break-keep leading-tight">
              가치를 향상시키는 <br />
              삼성이념의 세 가지 기둥
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-20">
            {[
              {
                idx: "01",
                title: "투명한 운영",
                text: "신의와 성실을 바탕으로 한 정직하고 투명한 운영 체계를 구축합니다.",
              },
              {
                idx: "02",
                title: "쾌적한 환경",
                text: "봉사의 정신으로 안전하고 쾌적한 최상의 운동시설 환경을 제공합니다.",
              },
              {
                idx: "03",
                title: "공동체 가치",
                text: "회원의 건강한 삶을 지원하고 지역 공동체의 가치를 지속적으로 향상시킵니다.",
              },
            ].map((phil, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="space-y-6"
              >
                <span className="text-5xl font-black text-blue-600 italic">
                  {phil.idx}
                </span>
                <h4 className="text-2xl font-bold">{phil.title}</h4>
                <p className="text-gray-400 font-medium leading-relaxed break-keep">
                  {phil.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CALL-TO-ACTION */}
      {/* <section className="py-40 text-center px-6">
        <motion.div
          whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-gray-400 font-bold mb-8 tracking-widest uppercase text-xs">
            Beyond the Excellence
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 break-keep">
            우리는 원칙을 지키며 <br />
            웰니스의 새로운 미래를 엽니다.
          </h2>
          <button className="px-12 py-5 bg-blue-600 text-white rounded-full font-black hover:bg-gray-900 transition-all shadow-xl shadow-blue-100 hover:shadow-none">
            문의하기
          </button>
        </motion.div>
      </section> */}
    </main>
  );
}
