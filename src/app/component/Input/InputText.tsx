"use client";
import React from "react";

interface InputTextProps {
  type: "text" | "password";
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void; // ✅ proper typing
}

export default function InputText({
  type,
  name,
  id,
  placeholder,
  value,
  onChangeInput,
}: InputTextProps) {
  return (
    <div className="pb-5">
      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeInput} // ✅ directly pass the function
        className="w-full border border-gray-500 h-10 rounded-md px-2"
      />
    </div>
  );
}
