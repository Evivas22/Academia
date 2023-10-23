"use client"
import React, { useState } from 'react';
import TextH3 from "../atoms/TextH3";

function Input({ label, placeHolder, onChange, value }) {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <TextH3 content={label} />
      <input
        type="text"
        className="shadow-inner px-3 rounded-md p-2 appearance-none border-b bg-color-base-100 border- border-color-neutral-400 w-full py-3 text-color-title leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeHolder}
        onChange={handleInputChange}
        value={inputValue}
      />
    </div>
  );
}

export default Input;
