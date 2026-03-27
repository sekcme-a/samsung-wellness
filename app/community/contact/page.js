// "use client";

// import InquiryForm from "@/components/InquiryForm";
// import { motion } from "framer-motion";

// export default function Inquiry() {
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="w-full max-w-xl mt-20 mb-10"
//       >
//         <InquiryForm
//           formId="8ee9571b-61c6-477b-b473-ebe3f0fa449f"
//           companyId="b3949df3-1fa5-4f8b-a4e2-fb311e118087"
//         />
//       </motion.div>
//     </div>
//   );
// }

import { createClient } from "@/utils/supabase/server";
import InquiryForm from "@/components/InquiryForm";

const FORM_ID = "8ee9571b-61c6-477b-b473-ebe3f0fa449f";
const COMPANY_ID = "b3949df3-1fa5-4f8b-a4e2-fb311e118087";

// 동적 SEO 메타데이터 설정
export async function generateMetadata() {
  const supabase = await createClient();

  const { data: formConfig } = await supabase
    .from("inquiry_forms")
    .select("title, description")
    .eq("id", FORM_ID)
    .single();

  return {
    title: formConfig?.title || "문의하기",
    description:
      formConfig?.description || "상세 내용을 입력하여 문의를 남겨주세요.",
  };
}

export default async function InquiryPage() {
  const supabase = await createClient();

  // 서버에서 데이터를 미리 페칭 (SEO의 핵심)
  const { data: formConfig, error } = await supabase
    .from("inquiry_forms")
    .select("*")
    .eq("id", FORM_ID)
    .maybeSingle();

  console.log(error);
  if (!formConfig) {
    return (
      <div className="p-10 text-center mt-42 mb-30">
        존재하지 않는 양식입니다.{FORM_ID}
        {JSON.stringify(error)}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-28">
      {/* 클라이언트 컴포넌트에 서버에서 받은 데이터를 props로 전달 */}
      <InquiryForm
        formConfig={formConfig}
        companyId={COMPANY_ID}
        formId={FORM_ID}
      />
    </div>
  );
}
