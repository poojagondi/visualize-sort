import React, { useState } from "react";

interface ArrayInputProps {
  onArraySubmit: (arr: number[]) => void;
}

const ArrayInput: React.FC<ArrayInputProps> = ({ onArraySubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    const array = inputValue.split(",").map((num) => parseInt(num.trim()));
    if (array.every((num) => !isNaN(num))) {
      onArraySubmit(array);
    } else {
      alert("Please enter valid numbers separated by commas.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter numbers separated by commas"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ArrayInput;
