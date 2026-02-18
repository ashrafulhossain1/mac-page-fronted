"use client";

import { Upload } from "lucide-react";
import { useRef, useState } from "react";

type ImageUploadBoxProps = {
  label: string;
  sub?: string;
  onFileSelect?: (file: File | null) => void;
};

export default function ImageUploadBox({
  label,
  sub,
  onFileSelect,
}: ImageUploadBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }

    onFileSelect?.(file);
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>

      {sub && (
        <p className="text-xs text-gray-500 mb-2">{sub}</p>
      )}

      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleChange}
        className="hidden"
      />

      <div
        onClick={() => inputRef.current?.click()}
        className="border rounded-xl h-24 overflow-hidden flex items-center justify-center cursor-pointer hover:bg-gray-50 transition"
      >
        {preview ? (
          <img
            src={preview}
            alt="preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400 text-center">
            <Upload className="text-center mx-auto "/>
            <span className="text-sm">Upload</span>
          </div>
        )}
      </div>
    </div>
  );
}
