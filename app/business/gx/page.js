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

const float = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function GXBusiness() {
  return (
    <main className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION: ENERGY & RHYTHM (사선 레이아웃) */}
      <section className="relative pt-60 pb-40 px-6 bg-gray-50 overflow-hidden">
        {/* Decorative Background Diagonals */}
        <div className="absolute inset-0 -skew-y-6 transform origin-top-left bg-blue-50 z-0" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-60 z-0" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="text-blue-600 font-black tracking-[0.4em] uppercase text-xs mb-8 block">
              Business Area 04
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-10 break-keep">
              고객 맞춤형 <br />
              <span className="text-blue-600">프로그램 설계</span>
            </h1>
            <p className="text-2xl font-bold text-gray-500 leading-snug break-keep max-w-2xl">
              참여도를 높이는 다채로운 콘텐츠 운영. <br />
              삼성웰니스는 트렌디하고 검증된 G.X 프로그램으로 단지에 활력을
              선사합니다.
            </p>
          </motion.div>

          <motion.div
            variants={float}
            animate="animate"
            className="lg:col-span-5 relative aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white group"
          >
            <Image
              src="/images/home/bentogrid/2.webp"
              alt="Dynamic GX Class"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: CUSTIMIZED CONTENT (맞춤형 콘텐츠 - 플로팅 카드) */}
      <section className="py-40 px-6 BG-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-28 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-black tracking-tighter text-gray-900 break-keep leading-tight mb-6">
              입주민의 성향과 트렌드를 분석한
              <br /> <span className="text-blue-600">독창적인 프로그램</span>
            </h2>
            <p className="text-lg text-gray-500 font-medium break-keep">
              단순한 반복 운동이 아닙니다. 삼성웰니스는 참여 데이터와 사용자
              니즈를 바탕으로 매월 새로운 맞춤형 콘텐츠를 기획하여 이용 만족도를
              제고합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Trending GX",
                desc: "Zumba, Les Mills 등 글로벌 트렌드 프로그램을 신속하게 도입하여 젊은 세대의 참여를 유도합니다.",
                color: "from-blue-500 to-pink-500",
              },
              {
                title: "Healing & Mind",
                desc: "요가, 필라테스, 명상 등 스트레스 해소와 심신 안정을 위한 다양한 힐링 콘텐츠를 제공합니다.",
                color: "from-blue-400 to-cyan-400",
              },
              {
                title: "Kids & Senior",
                desc: "성장기 어린이와 액티브 시니어를 위한 연령별 맞춤형 체육 프로그램을 별도로 구성합니다.",
                color: "from-amber-400 to-orange-400",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className={`p-10 rounded-[3rem] bg-gradient-to-br ${card.color} text-white shadow-2xl relative overflow-hidden`}
              >
                <div className="absolute -right-10 -bottom-10 text-[10rem] font-black opacity-10 tracking-tighter select-none">
                  {i + 1}
                </div>
                <h3 className="text-3xl font-black mb-10 tracking-tight relative z-10">
                  {card.title}
                </h3>
                <p className="text-lg font-medium leading-relaxed break-keep relative z-10 opacity-90">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: ENGAGEMENT BOOST (참여도 향상 솔루션 - 모던 리스트) */}
      {/* <section className="py-40 px-6 bg-gray-900 text-white rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div
            {...fadeInUp}
            className="lg:col-span-5 lg:sticky lg:top-32 space-y-6"
          >
            <h2 className="text-xs font-black tracking-[0.4em] text-blue-400 uppercase">
              Engagement Boost
            </h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight break-keep">
              지루할 틈 없는 <br />
              <span className="text-blue-500 italic">참여 중심의 운영</span>
            </h3>
            <p className="text-xl text-gray-400 font-medium leading-relaxed break-keep">
              운동은 즐거워야 지속됩니다. 삼성웰니스는 단순 수업 제공을 넘어,
              소통과 재미를 더한 커뮤니티형 운영으로 입주민들의 자발적인 참여를
              이끌어냅니다.
            </p>
          </motion.div>

          <div className="lg:col-span-7 space-y-4 divide-y divide-white/10">
            {[
              {
                title: "커뮤니티 이벤트 클래스",
                desc: "시즌별 테마(할로윈, 크리스마스 등)를 반영한 특별 원데이 클래스를 통해 공동체의 유대감을 강화합니다.",
              },
              {
                title: "챌린지 & 리워드 시스템",
                desc: "출석왕, 목표 달성 챌린지 등 동기 부여 프로그램을 운영하고 다양한 리워드를 제공하여 성취감을 높입니다.",
              },
              {
                title: "모바일 기반 피드백",
                desc: "전용 앱을 통해 수업 만족도를 실시간으로 파악하고, 입주민 건의 사항을 즉각적으로 프로그램에 반영합니다.",
              },
              {
                title: "전문 강사 로테이션",
                desc: "검증된 인기 강사진의 유연한 로테이션 배치를 통해 수업의 신선함과 품질을 지속적으로 유지합니다.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-8 p-8 hover:bg-white/5 transition-colors rounded-2xl"
              >
                <div className="w-10 h-10 border-2 border-blue-500 flex items-center justify-center rounded-full shrink-0">
                  <span className="text-blue-500 font-black text-xs">→</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed break-keep">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* SECTION 3: VISUAL GALLERY ( GX의 에너지) */}
      <section className="py-40 px-6 BG-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-24 gap-8 px-4">
            <h2 className="text-xs font-black tracking-[0.4em] uppercase text-gray-400">
              02 / Lively Moment
            </h2>
            <p className="text-4xl font-black tracking-tighter text-gray-900 break-keep leading-tight">
              함께 만드는 건강한 루틴
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/images/business/gx1.webp",
              "/images/business/gx2.webp",
              "/images/business/gx33.webp",
              "/images/business/gx4.webp",
            ].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: i % 2 === 0 ? -10 : 10,
                  transition: { duration: 0.4 },
                }}
                className={`relative h-[400px] rounded-3xl overflow-hidden shadow-xl ${i % 2 !== 0 ? "mt-10" : ""}`}
              >
                <Image
                  src={img}
                  alt="GX Energy"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </main>
  );
}
