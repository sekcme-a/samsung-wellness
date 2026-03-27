"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MotionImage = motion(Image);

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

export default function BentoGrid() {
  return (
    <section className="py-32 px-6 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-[1.15] break-keep tracking-tight">
            삼성웰니스는 독보적인 전문성으로 <br />
            대한민국 커뮤니티 시설의 내일을 설계합니다.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          // h-auto md:h-[600px] 구조에서 자식 요소들이 높이를 가져야 함
          className="flex flex-col md:flex-row gap-4 h-auto md:h-[600px]"
        >
          {/* 1. 좌측 메인: 커뮤니티 시설운영 */}
          <Link href="/business/community" className="flex-1 contents">
            <motion.div
              variants={itemVariants}
              // ✨ 중요: 모바일에서 높이가 없으면 fill 이미지가 안 보임. h-[400px] 추가
              className="flex-1 relative group rounded-[2.5rem] overflow-hidden shadow-sm bg-white cursor-pointer h-[400px] md:h-full"
            >
              <MotionImage
                src="/images/home/bentogrid/1.webp"
                alt="커뮤니티 시설운영"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  커뮤니티 시설운영
                </h3>
                <p className="text-white/80 mt-2 font-medium">
                  주거 단지의 품격을 완성합니다.
                </p>
              </div>
            </motion.div>
          </Link>

          {/* 2. 우측 컬럼 1: 피트니스 + 안전관리 */}
          <div className="flex-[0.8] flex flex-col gap-4">
            <Link href="/business/fitness" className="flex-[0.95] contents">
              <motion.div
                variants={itemVariants}
                // ✨ h-[250px] md:h-full 추가
                className="w-full relative group rounded-[2.5rem] overflow-hidden shadow-sm bg-white cursor-pointer h-[250px] md:h-full"
              >
                <MotionImage
                  src="/images/home/bentogrid/2.webp"
                  alt="피트니스 센터운영"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex flex-col justify-end p-8 text-left">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    피트니스 센터운영
                  </h3>
                </div>
              </motion.div>
            </Link>

            <Link href="/business/safety" className="flex-[1.05] contents">
              <motion.div
                variants={itemVariants}
                // ✨ h-[250px] md:h-full 추가
                className="w-full relative group rounded-[2.5rem] overflow-hidden shadow-sm bg-white cursor-pointer h-[250px] md:h-full"
              >
                <MotionImage
                  src="/images/home/bentogrid/4.webp"
                  alt="안전관리"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex flex-col justify-end p-8 text-left">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    안전관리 시스템
                  </h3>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* 3. 우측 컬럼 2: 수영장 + 프로그램 */}
          <div className="flex-[0.8] flex flex-col gap-4">
            <Link href="/business/pool" className="flex-[1.05] contents">
              <motion.div
                variants={itemVariants}
                // ✨ h-[250px] md:h-full 추가
                className="w-full relative group rounded-[2.5rem] overflow-hidden shadow-sm bg-white cursor-pointer h-[250px] md:h-full"
              >
                <MotionImage
                  src="/images/home/bentogrid/3.webp"
                  alt="수영장 운영"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex flex-col justify-end p-8 text-left">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    수영장 운영
                  </h3>
                </div>
              </motion.div>
            </Link>

            <Link href="/business/gx" className="flex-[0.95] contents">
              <motion.div
                variants={itemVariants}
                // ✨ h-[250px] md:h-full 추가
                className="w-full relative group rounded-[2.5rem] overflow-hidden shadow-sm bg-white cursor-pointer h-[250px] md:h-full"
              >
                <MotionImage
                  src="/images/home/bentogrid/5.webp"
                  alt="프로그램 (G.X)운영"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex flex-col justify-end p-8 text-left">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    G.X 프로그램
                  </h3>
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
