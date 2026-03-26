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

export default function SafetyManagementBusiness() {
  return (
    <main className="bg-white min-h-screen selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION: ZERO ACCIDENT VISION */}
      <section className="relative pt-60 pb-32 px-6 overflow-hidden bg-gray-900 text-white">
        {/* Decorative Background Grid */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] bg-repeat" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <span className="text-red-blue font-black tracking-[0.4em] uppercase text-xs mb-8 block">
              safety
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-10 break-keep">
              사고를 예방하는 <br />
              <span className="text-blue-500 ">선제적 관리 시스템</span>
            </h1>
            <p className="text-2xl font-bold text-gray-400 leading-snug break-keep max-w-3xl">
              안전은 선택이 아닌 기본입니다. <br />
              삼성웰니스는 무사고를 목표로 하는 철저한 세이프티 거버넌스를
              가동합니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-4 relative aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/home/bentogrid/4.webp"
              alt="Safety First Management"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: PROACTIVE PREVENT (선제적 예방 시스템) */}
      <section className="py-40 px-6 bg-white border-t border-gray-100 rounded-t-[5rem] -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[4rem] overflow-hidden"
          >
            <Image
              src="/images/business/community.webp"
              alt="안전 모니터링"
              fill
              className="object-covergrayscale hover:grayscale-0 transition-all duration-1000"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" /> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight break-keep">
              발생 전 차단하는 <br />
              <span className="text-red-600 italic">365 세이프티 매뉴얼</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium leading-relaxed break-keep border-l-4 border-red-600 pl-8 overflow-x-hidden">
              {`삼성웰니스의 안전관리는 사후 처리가 아닌 '사전 예방'에 집중합니다.
              다년간의 데이터 분석을 통해 도출한 사고 발생 패턴을 기반으로 기구
              점검, 인력 배치, 긴급 대응까지 빈틈없는 매뉴얼을 가동합니다.`}
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-12">
              <div>
                <p className="text-5xl font-black text-gray-900 mb-2">
                  0<span className="text-2xl text-red-600">%</span>
                </p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-loose">
                  사고 목표 수치
                </p>
              </div>
              <div>
                <p className="text-5xl font-black text-gray-900 mb-2">
                  24<span className="text-2xl text-red-600">H</span>
                </p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-loose">
                  모니터링
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: SAFETY GOVERNANCE (시스템 3대 지장) */}
      {/* <section className="py-40 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-28 max-w-2xl mx-auto"
          >
            <h2 className="text-xs font-black tracking-[0.5em] text-red-600 uppercase mb-4">
              Safety Governance
            </h2>
            <p className="text-4xl font-black tracking-tighter text-gray-900 break-keep leading-tight">
              삼성웰니스 안전의 <br />
              흔들리지 않는 세 가지 기둥
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "체계적인 시설 점검",
                desc: "매일 상시 기구 위생 소독, 주간 단위 시설 정밀 점검, 분기별 국가 공인 기관 합동 점검을 실시합니다.",
                tag: "CHECK",
              },
              {
                title: "검증된 전문 인력",
                desc: "모든 인명구조원 및 강사는 자격증 보유자이며, 매월 정기 안전 교육 및 응급 처치 훈련을 이수합니다.",
                tag: "EXPERT",
              },
              {
                title: "스마트 대응 시스템",
                desc: "사고 발생 시 실시간 알림 시스템과 즉각적인 Emergency Response 매뉴얼을 가동하여 골든타임을 확보합니다.",
                tag: "SYSTEM",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="p-16 bg-white rounded-[4rem] border border-gray-100 relative overflow-hidden group shadow-lg hover:shadow-2xl hover:border-red-100"
              >
                <div className="absolute -right-8 -top-8 text-[12rem] font-black text-gray-100 group-hover:text-red-50 transition-colors tracking-tighter select-none">
                  {item.tag}
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-8 relative z-10 leading-tight break-keep">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 font-medium leading-relaxed break-keep relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* SECTION 3: SAFETY MAINTENANCE PROCESS (안전 관리 프로세스) */}
      {/* <section className="py-40 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-gray-100 pb-16 gap-8">
            <h2 className="text-5xl font-black tracking-tighter">
              PREVENTIVE PROCESS.
            </h2>
            <p className="text-lg text-gray-400 font-medium max-w-sm break-keep">
              365일 무사고를 보장하는 삼성웰니스만의 체계적 안전 솔루션
            </p>
          </div>

          <div className="space-y-4 divide-y divide-gray-100">
            {[
              {
                step: "01",
                title: "현장 분석 및 기획",
                desc: "시설 특성 및 이용 데이터를 분석하여 최적의 안전 인력 배치 및 매뉴얼 수립",
              },
              {
                step: "02",
                title: "시스템 구축 및 도입",
                desc: "자동 제세동기 배치, 수질 분석기 등 첨단 안전 및 환경 관리 시스템 구축",
              },
              {
                step: "03",
                title: "정기적 훈련 및 점검",
                desc: "전 직원을 대상으로 긴급 상황 대응 훈련 및 매월 정기 무사고 점검 실시",
              },
              {
                step: "04",
                title: "지속적 개선 및 공개",
                desc: "분기별 사고 발생 패턴 분석 및 매뉴얼 업데이트를 통한 품질 고도화",
              },
            ].map((proc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group flex flex-col md:flex-row gap-8 items-start md:items-center p-12 hover:bg-red-50 transition-colors rounded-3xl"
              >
                <span className="text-4xl font-black text-gray-200 group-hover:text-red-600 transition-colors w-16">
                  {proc.step}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 w-full md:w-1/3 break-keep">
                  {proc.title}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed break-keep flex-1">
                  {proc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <CallToAction />
    </main>
  );
}
