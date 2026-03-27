"use client";

import { useRouter } from "next/navigation";

export default function CallToAction() {
  const router = useRouter();
  return (
    <section className="py-40 bg-blue-600 text-white text-center rounded-t-[5rem]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl break-keep md:text-5xl font-black  mb-12 leading-[1.3]">
          단지의 품격을 높이는 여정, <br />
          삼성웰니스가 함께하겠습니다.
        </h2>
        <button
          className="px-10 py-4 bg-white text-blue-600 cursor-pointer rounded-full font-black text-xl shadow-2xl hover:bg-gray-900 hover:text-white transition-all"
          onClick={() => router.push("/community/inquiry")}
        >
          문의하기
        </button>
      </div>
    </section>
  );
}
