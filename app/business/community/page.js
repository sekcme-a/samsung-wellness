"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // ✅ Image 컴포넌트 추가
import CallToAction from "../CallToAction";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function CommunityBusiness() {
  return (
    <main className="bg-white min-h-screen selection:bg-blue-600 selection:text-white">
      {/* HERO SECTION: STRATEGIC IMPACT */}
      <section className="relative pt-60 pb-32 px-6 overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="z-10"
          >
            <span className="text-blue-600 font-black tracking-[0.4em] uppercase text-xs mb-8 block">
              Community Business
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-10 break-keep">
              가치를 높이는 <br />
              <span className="text-blue-600 italic">통합 운영 시스템</span>
            </h1>
            <p className="text-2xl font-bold text-gray-500 leading-snug break-keep">
              입주민 만족과 자산가치를 동시에 높입니다. <br />
              삼성웰니스만의 데이터 기반 최적화 솔루션을 경험하세요.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-[5rem] overflow-hidden shadow-2xl aspect-[4/3] bg-gray-200"
          >
            {/* ✅ Hero Image 최적화 */}
            <Image
              src="/images/business/community.webp"
              alt="통합 운영 시스템"
              fill
              priority // ✅ 첫 화면 이미지이므로 우선 로드
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: SYSTEM CORE */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-32">
            <h2 className="text-4xl font-black tracking-tight mb-6 uppercase">
              Total Management Solution
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "스마트 예약 시스템",
                icon: "APP",
                desc: "전용 모바일 앱을 통한 실시간 예약 및 결제 시스템으로 입주민의 이용 편의성을 극대화합니다.",
              },
              {
                title: "에너지 세이빙 관리",
                icon: "ECO",
                desc: "피크 시간대 분석을 통한 공조 및 조명 제어로 공용 관리비를 효율적으로 절감합니다.",
              },
              {
                title: "전문 인력 매칭",
                icon: "PRO",
                desc: "CS 교육을 이수한 전문 매니저와 국가 공인 자격증 보유 강사진을 직접 배치합니다.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className="p-12 border border-gray-100 rounded-[3.5rem] bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all group"
              >
                <span className="text-xs font-black text-blue-600 tracking-widest mb-8 block uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                  System {item.icon}
                </span>
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
      </section>

      {/* SECTION 2: ASSET VALUE (주석 해제 시에도 Image 적용됨) */}
      {/* <section className="py-40 bg-gray-900 text-white rounded-[5rem] mx-4 md:mx-10 mb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.h2
              {...fadeInUp}
              className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-10 break-keep"
            >
              단순 관리를 넘어, <br />
              <span className="text-blue-500">단지의 브랜드</span>를 바꿉니다.
            </motion.h2>
            <motion.p
              {...fadeInUp}
              className="text-xl text-gray-400 font-medium leading-relaxed mb-12 break-keep"
            >
              체계적인 커뮤니티 운영은 입주민의 주거 만족도를 높이는 가장 강력한
              지표입니다.
            </motion.p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
              <div>
                <p className="text-5xl font-black text-white mb-2">
                  98<span className="text-2xl text-blue-500">%</span>
                </p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Average Satisfaction
                </p>
              </div>
              <div>
                <p className="text-5xl font-black text-white mb-2">
                  12<span className="text-2xl text-blue-500">%</span>
                </p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Cost Efficiency Up
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[500px] rounded-[4rem] overflow-hidden bg-gray-800"
          >
            <Image
              src="https://images.unsplash.com/photo-1574333081543-9902f682d0de?q=80&w=1200"
              alt="Asset Value"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </div>
      </section> */}

      {/* CALL TO ACTION */}
      <CallToAction />
    </main>
  );
}
