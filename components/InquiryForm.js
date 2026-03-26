// InquiryFormClient.js (Client Component)
"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2, Paperclip, X, FileText } from "lucide-react";

export default function InquiryForm({ formConfig, companyId, formId }) {
  const [formData, setFormData] = useState({});
  const [selectedFiles, setSelectedFiles] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const supabase = createClient();

  const handleFileChange = (label, files, inputElement) => {
    if (!files) return;
    const newFiles = Array.from(files);
    setSelectedFiles((prev) => ({
      ...prev,
      [label]: [...(prev[label] || []), ...newFiles],
    }));
    if (inputElement) inputElement.value = "";
  };

  const removeFile = (label, index) => {
    setSelectedFiles((prev) => ({
      ...prev,
      [label]: prev[label].filter((_, i) => i !== index),
    }));
  };

  const uploadAllFiles = async () => {
    const uploadResults = {};
    for (const label in selectedFiles) {
      const paths = [];
      for (const file of selectedFiles[label]) {
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `companies/${companyId}/inquiries/${formId}/${fileName}`;

        const { error } = await supabase.storage
          .from("inquiry_attachments")
          .upload(filePath, file);

        if (error) throw new Error(`${file.name} 업로드 실패`);
        paths.push(filePath);
      }
      uploadResults[label] = paths;
    }
    return uploadResults;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const filePaths = await uploadAllFiles();
      const finalSubmissionData = { ...formData, ...filePaths };

      const { error } = await supabase.from("inquiry_submissions").insert({
        form_id: formId,
        content: finalSubmissionData,
      });

      if (error) throw error;
      setIsSuccess(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 부드럽게 스크롤
      });
    } catch (error) {
      alert(error.message || "제출 중 오류 발생");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 mt-16 mb-5 rounded-[2.5rem] border border-gray-100 shadow-xl text-center"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-2">접수 완료!</h2>
          <p className="text-gray-800">
            접수하신 내용이 정상적으로 전달되었습니다.
          </p>
        </motion.div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8"
        >
          <div className="text-center mb-10">
            {/* 서버에서 렌더링되어 소스코드에 잡히는 H1 태그 (SEO 최적화) */}
            <h1 className="text-3xl font-bold">{formConfig.title}</h1>
            <p className="text-gray-900 mt-2 break-keep">
              {formConfig.description}
            </p>
          </div>

          {formConfig.fields.map((field) => (
            <div key={field.id} className="space-y-2">
              <label className="text-xs font-bold text-gray-900 ml-1 uppercase tracking-widest">
                {field.label} {field.required && "•"}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  required={field.required}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.label]: e.target.value })
                  }
                  className="w-full bg-gray-50 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-black/5 min-h-[120px]"
                />
              ) : field.type === "file" ? (
                <div className="space-y-3">
                  <input
                    type="file"
                    multiple
                    onChange={(e) =>
                      handleFileChange(field.label, e.target.files, e.target)
                    }
                    className="hidden"
                    id={`file-${field.id}`}
                  />
                  <label
                    htmlFor={`file-${field.id}`}
                    className="flex items-center justify-center gap-2 w-full border-2 border-dashed border-gray-200 rounded-2xl px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <Paperclip className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500 font-medium">
                      파일 첨부하기
                    </span>
                  </label>

                  {selectedFiles[field.label]?.map((file, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between bg-gray-50 p-3 rounded-xl"
                    >
                      <div className="flex items-center gap-2 overflow-hidden">
                        <FileText className="w-4 h-4 text-blue-500 shrink-0" />
                        <span className="text-sm truncate">{file.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(field.label, idx)}
                      >
                        <X className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <input
                  type={field.type}
                  required={field.required}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.label]: e.target.value })
                  }
                  className="w-full bg-gray-50 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-black/5"
                />
              )}
            </div>
          ))}

          <button
            disabled={isSubmitting}
            className="w-full bg-black text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 disabled:bg-gray-400"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin w-5 h-5" />
            ) : (
              "제출하기"
            )}
          </button>
        </form>
      )}
    </AnimatePresence>
  );
}
