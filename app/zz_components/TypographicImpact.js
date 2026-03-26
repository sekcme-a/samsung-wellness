"use client";

import { motion } from "framer-motion";

// 애니메이션 프리셋
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function TypographicImpact() {
  return (
    <section className="py-40 px-8 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-20">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-[10vw] font-black tracking-tighter leading-[0.85] text-balance"
        >
          {`WE DON'T JUST MANAGE, `}
          <br />
          <motion.span
            whileInView={{ color: ["#ffffff1a", "#2563eb", "#ffffff1a"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-white/10"
          >
            WE OPTIMIZE SPACE.
          </motion.span>
        </motion.h2>
        <motion.div
          {...fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end"
        >
          <p className="text-2xl font-medium text-gray-400 leading-tight italic break-keep">
            {`"삼성웰니스의 철학은 단순합니다.`} <br />
            {` 기술은 사람을 향해야 하며, 공간은 삶의 질을 증명해야 합니다."`}
          </p>
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5 }}
              className="h-[1px] bg-blue-500"
            />
            <p className="text-xs font-black tracking-widest text-white uppercase leading-relaxed">
              CEO Message / SAMSUNG WELLNESS
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
