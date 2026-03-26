"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function KineticHero() {
  return (
    <section className="relative h-screen flex items-center px-6 mt-12 md:px-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className=" md:hidden inline-block px-4 py-1 bg-blue-50 text-blue-600 text-xs font-black tracking-widest rounded-full mb-8"
          >
            SAMSUNG WELLNESS
          </motion.span>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-10 break-keep">
            당신의 <br />
            웰니스 라이프,
            <br />{" "}
            <span className="text-blue-600">삼성웰니스가 설계합니다.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-md leading-relaxed font-medium break-keep mb-10">
            우리는 공간의 한계를 넘어 사람의 삶을 연구합니다. 대한민국
            커뮤니티의 새로운 표준을 경험하세요.
          </p>
          {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold shadow-lg hover:bg-blue-700 transition-colors">
              회사소개서 받기
            </button>
          </motion.div> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[600px] hidden lg:block"
        >
          <div className="absolute inset-0 bg-blue-600 rounded-[4rem] rotate-6 opacity-10"></div>
          <Image
            src="/images/home/kinetichero.webp"
            alt="러닝머신 메인이미지"
            fill // 부모 컨테이너(relative)를 꽉 채울 때 사용
            priority // Hero 이미지는 첫 화면에 바로 보이므로 우선순위 로드 설정
            className="object-cover rounded-[4rem] shadow-2xl transition-transform duration-700 hover:rotate-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
