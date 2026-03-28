import React from "react";

interface Props {
  label: string;
  value: string | number;
  mandatory: boolean;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function InputText({
  label,
  mandatory,
  value,
  name,
  onChange,
  placeholder,
}: Props) {
  return (
    <div className="flex flex-col gap-1.5 w-full max-w-sm">
      <label
        htmlFor={name}
        className="text-sm font-medium text-white flex items-center gap-0.5"
      >
        {label}
        {mandatory && (
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <input
        id={name}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm 
                   placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 transition-all duration-200 text-sm"
      />
    </div>
  );
}
