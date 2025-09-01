import React from "react";

export default function InputLabel({
    label = ""
}) {
  return (
    <div>
      <label className="text-sm mt-2 text-gray-600  font-bold">{label}</label>
    </div>
  );
}