"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// 1. Image 컴포넌트를 motion 컴포넌트로 변환
const MotionImage = motion(Image);

// 애니메이션 프리셋
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function ValueCards() {
  const cards = [
    {
      title: "생활 스포츠 공간의 혁신",
      desc: "피트니스와 수영장을 하나로 잇는 전문 운영 서비스를 통해 공공과 민간 모두가 만족하는 쾌적한 운동 환경을 실현합니다.",
      img: "/images/home/valuecards/1.webp",
      side: -100,
    },
    {
      title: "차별화된 위탁 경영",
      desc: "축적된 경험과 데이터를 바탕으로 기관과 기업의 특수성을 반영한 고품격 피트니스 서비스 산업의 새로운 기준을 제시합니다.",
      img: "/images/home/valuecards/2.webp",
      side: 100,
    },
    {
      title: "일상 속 가치 실현",
      desc: "삼성웰니스는 주거 공간 내 스포츠 시설을 통해 모든 세대가 함께 건강의 즐거움을 누리는 웰니스 라이프를 실현합니다.",
      img: "/images/home/valuecards/3.webp",
      side: -100,
    },
    {
      title: "맞춤형 프로그램(G.X) 운영",
      desc: "주거 단지의 여가부터 기업 사내 복지, 교육기관의 체육 활동까지 사용자의 라이프스타일에 맞춘 다채로운 프로그램을 기획하고 운영합니다.",
      img: "/images/home/valuecards/4.webp",
      side: 100,
    },
  ];

  return (
    <section className="py-32 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          {...fadeInUp}
          className="text-4xl md:text-5xl font-bold text-center mb-24 text-gray-900 leading-[1.2] tracking-tight break-keep"
        >
          일상을 깨우는 웰니스 서비스,
          <br /> 모든 공간에 활력을 더합니다.
        </motion.h2>

        <div className="space-y-32">
          {cards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: item.side }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col md:flex-row items-center gap-16 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* 이미지 컨테이너 */}
              <div className="flex-1 w-full relative aspect-video overflow-hidden rounded-[3rem] shadow-xl bg-gray-100">
                <MotionImage
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  className="object-cover"
                />
              </div>

              {/* 텍스트 컨테이너 */}
              <div className="flex-1 space-y-6">
                <span className="text-blue-600 font-black text-2xl tracking-tighter">
                  0{i + 1}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight break-keep">
                  {item.title}
                </h3>
                <p className="text-xl text-gray-500 leading-relaxed break-keep font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
