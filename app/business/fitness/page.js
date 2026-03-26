"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import CallToAction from "../CallToAction";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function FitnessBusiness() {
  return (
    <main className="bg-white min-h-screen selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* HERO SECTION: PERFORMANCE & CARE */}
      <section className="relative pt-60 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 z-10"
          >
            <span className="text-blue-600 font-black tracking-[0.4em] uppercase text-xs mb-8 block">
              Fitness Business
            </span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-10 break-keep">
              전문 트레이닝과 <br />
              <span className="text-blue-600  italic">체계적인 시설 관리</span>
            </h1>
            <p className="text-2xl font-bold text-gray-500 leading-snug break-keep max-w-2xl">
              이용률을 높이는 차별화된 운영 시스템. <br />
              단순한 운동 공간을 넘어 입주민의 건강한 루틴을 설계합니다.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            className="lg:col-span-5 relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/business/fitness1.webp"
              alt="피트니스 센터"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: CORE STRENGTHS (차별화 포인트) */}
      {/* <section className="py-40 px-6 bg-gray-50 rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-24">
            <h2 className="text-4xl font-black tracking-tight mb-4 uppercase">
              Operational Excellence
            </h2>
            <p className="text-gray-400 font-bold tracking-widest">
              삼성웰니스가 제안하는 피트니스 운영의 3대 원칙
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "검증된 전문 강사진",
                desc: "국가 공인 자격증 및 전문 교육을 이수한 트레이너를 배치하여 입주민 맞춤형 1:1 케어를 제공합니다.",
                tag: "EXPERT",
              },
              {
                title: "365 세이프티 관리",
                desc: "기구 정기 점검 매뉴얼과 실시간 안전 모니터링을 통해 무사고 운영 환경을 구축합니다.",
                tag: "SAFETY",
              },
              {
                title: "스마트 프로그램",
                desc: "이용 데이터를 분석하여 시간대별 인기 프로그램을 기획하고 시설 이용 효율을 극대화합니다.",
                tag: "DATA",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className="p-12 bg-white rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-black text-xs mb-8">
                  {item.tag}
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-6">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed break-keep">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* SECTION 2: VISUAL HIGHLIGHT (시설 관리 철학) */}
      <section className="py-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative aspect-video rounded-[3.5rem] overflow-hidden shadow-2xl order-2 lg:order-1"
            >
              <Image
                src="/images/home/kinetichero.webp"
                alt="Gym Maintenance"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
            <motion.div {...fadeInUp} className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight break-keep">
                최상의 컨디션을 유지하는 <br />
                <span className="text-blue-600 italic">무결점 시설 관리</span>
              </h2>
              <p className="text-xl text-gray-500 font-medium leading-relaxed break-keep">
                삼성웰니스는 단순히 청결을 유지하는 수준을 넘어, 기구의 마모도
                분석과 정기적인 보링 작업을 통해 운동 기구의 수명을 연장하고
                사용자의 부상을 방지합니다.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "매일 상시 기구 위생 소독",
                  "분기별 기구 정밀 점검 및 부품 교체",
                  "쾌적한 운동 환경을 위한 공조 시스템 관리",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-gray-900 font-bold"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full" />
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROGRAM DIVERSITY */}
      {/* <section className="py-40 bg-gray-900 text-white rounded-[5rem] mx-4 md:mx-10 mb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-24">
            <div className="lg:col-span-8">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 italic">
                Diverse Programs.
              </h2>
              <p className="text-xl text-gray-400 font-medium break-keep">
                체형 교정부터 고강도 트레이닝까지, <br />
                입주민의 라이프스타일에 맞춘 다채로운 GX 및 PT 프로그램을
                기획합니다.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="text-right">
                <p className="text-6xl font-black text-blue-500 mb-2">30+</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em]">
                  Monthly Programs
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Personal Training",
                img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800",
              },
              {
                title: "Yoga & Pilates",
                img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800",
              },
              {
                title: "Group Cycle",
                img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=800",
              },
              {
                title: "Silver Fitness",
                img: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?q=80&w=800",
              },
            ].map((prog, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 0.95 }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={prog.img}
                  alt={prog.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <h4 className="text-xl font-black tracking-tight">
                    {prog.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <CallToAction />
    </main>
  );
}
