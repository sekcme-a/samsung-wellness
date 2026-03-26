"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ y: -5 }}
          className="group relative  h-[400px] rounded-[3rem] overflow-hidden bg-gray-50 p-12 flex flex-col justify-between"
        >
          <div className="z-10">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              함께 성장할 인재를 기다립니다
            </h3>
            <p className="text-gray-600">
              웰니스 문화를 선도할 전문가를 찾습니다.
            </p>
          </div>
          <Link
            href="/careers/apply"
            className="z-10 inline-flex items-center text-lg font-bold cursor-pointer"
          >
            입사지원 바로가기{" "}
            <span className="ml-2 group-hover:translate-x-2 transition-transform">
              →
            </span>
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="group relative h-[400px]  rounded-[3rem] overflow-hidden bg-blue-600 p-12 text-white flex flex-col justify-between"
        >
          <div className="z-10">
            <h3 className="text-3xl font-bold mb-4">운영 및 위탁 문의하기</h3>
            <p className="text-blue-100">
              성공적인 커뮤니티 시설 운영의 파트너가 되어 드립니다.
            </p>
          </div>
          <Link
            href="/community/contact"
            className="z-10 inline-flex items-center cursor-pointer text-lg font-bold"
          >
            문의 보내기{" "}
            <span className="ml-2 group-hover:translate-x-2 transition-transform">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
