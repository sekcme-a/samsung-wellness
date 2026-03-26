"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import CallToAction from "../CallToAction";

// 애니메이션 프리셋
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2 } },
};

export default function SwimmingPoolBusiness() {
  return (
    <main className="bg-white min-h-screen selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION: THE ESSENCE OF WATER */}
      <section className="relative pt-60 pb-32 px-6 overflow-hidden bg-gray-50">
        {/* Decorative Water Ripple Effect (CSS background) */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/water.png')] bg-repeat" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <span className="text-blue-600 font-black tracking-[0.4em] uppercase text-xs mb-8 block">
              Pool Business
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-10 break-keep">
              안전과 수질, <br />
              <span className="text-blue-600  ">두 가지를 모두 잡다</span>
            </h1>
            <p className="text-2xl font-bold text-gray-500 leading-snug break-keep max-w-3xl">
              전문 인력 기반의 안정적 운영 솔루션. <br />
              삼성웰니스는 타협하지 않는 원칙으로 가장 투명하고 안전한 수영장을
              만듭니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-4 relative aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/home/bentogrid/3.webp"
              alt="프리미엄 수영장"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              priority
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent pointer-events-none" /> */}
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: TWO PILLARS (핵심 가치) */}
      <section className="py-40 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-28 max-w-2xl mx-auto"
          >
            <h2 className="text-xs font-black tracking-[0.5em] text-blue-600 uppercase mb-4">
              Core Value
            </h2>
            <p className="text-4xl font-black tracking-tighter text-gray-900 break-keep leading-tight">
              삼성웰니스 수영장이 <br />
              신뢰받는 두 가지 이유
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "절대적 안전 (Absolute Safety)",
                desc: "국가 공인 인명구조원 상시 배치 및 매월 정기 안전 교육 실시. 사고 0%를 목표로 하는 철저한 세이프티 가이드를 준수합니다.",
                icon: "AQUA_SAFETY",
              },
              {
                title: "완벽한 수질 (Crystal Water)",
                desc: "최첨단 복합 여과 시스템 도입 및 실시간 수질 모니터링. 법적 기준보다 엄격한 자체 수질 관리 프로세스를 가동합니다.",
                icon: "PURE_WATER",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.3 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="p-16 bg-gray-50 rounded-[4rem] border border-gray-100 relative overflow-hidden group"
              >
                <div className="absolute -right-8 -top-8 text-[12rem] font-black text-gray-100/70 group-hover:text-blue-50 transition-colors tracking-tighter select-none">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-8 relative z-10 leading-tight break-keep">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 font-medium leading-relaxed break-keep relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: EXPERT POWER (전문 인력) */}
      {/* <section className="py-40 bg-gray-900 text-white rounded-[5rem] mx-4 md:mx-10 mb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight break-keep">
              검증된 전문가가 만드는 <br />
              <span className="text-blue-500 italic">안정적인 위탁 운영</span>
            </h2>
            <p className="text-xl text-gray-400 font-medium leading-relaxed break-keep border-l-4 border-blue-500 pl-8">
              수영장은 작은 실수가 큰 사고로 이어질 수 있는 공간입니다.
              삼성웰니스는 다년간의 운영 노하우와 데이터에 기반하여, 단순 인력
              매칭이 아닌 전사적 관리 시스템 하에 전문 인력을 운영합니다.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
              <div>
                <p className="text-5xl font-black text-white mb-2">
                  100<span className="text-2xl text-blue-500">%</span>
                </p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-loose">
                  Certified LifeGuards
                </p>
              </div>
              <div>
                <p className="text-5xl font-black text-white mb-2">15yr</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-loose">
                  Operational Experience
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[4rem] overflow-hidden order-1 lg:order-2"
          >
            <Image
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2158?q=80&w=1200"
              alt="Swimming Instructor"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-blue-950/30 mix-blend-multiply pointer-events-none" />
          </motion.div>
        </div>
      </section> */}

      {/* SECTION 3: MAINTENANCE PROCESS (수질 관리 프로세스) */}
      {/* <section className="py-40 px-6 BG-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-gray-100 pb-16 gap-8">
            <h2 className="text-5xl font-black tracking-tighter">
              PURE WATER PROCESS.
            </h2>
            <p className="text-lg text-gray-400 font-medium max-w-sm break-keep">
              365일 투명함을 유지하는 삼성웰니스만의 무결점 수질 관리 솔루션
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {[
              {
                step: "01",
                title: "실시간 모니터링",
                desc: "자동 수질 분석 장치를 통한 pH, 잔류염소 수치 실시간 계측 및 기록",
              },
              {
                step: "02",
                title: "첨단 여과 시스템",
                desc: "고성능 복합 여과재를 활용한 미세 부유물 및 이물질 완벽 제거",
              },
              {
                step: "03",
                title: "정기적 수질 검사",
                desc: "법적 공인 기관에 의뢰하여 월 1회 이상 정밀 수질 검사 실시 및 결과 공개",
              },
              {
                step: "04",
                title: "친환경 소독 시스템",
                desc: "피부 자극을 최소화하는 전해소독 등 친환경 방식을 우선 적용",
              },
            ].map((proc, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-10 bg-gray-50/50 rounded-3xl border border-gray-100 hover:bg-blue-50 transition-colors"
              >
                <div className="text-6xl font-black text-gray-100 mb-10 tracking-tighter">
                  {proc.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-6 break-keep">
                  {proc.title}
                </h4>
                <p className="text-gray-500 font-medium leading-relaxed break-keep">
                  {proc.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      <CallToAction />
    </main>
  );
}
