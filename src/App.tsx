import React, { useState } from "react";
import "./App.css";
import ArrayInput from "./components/ArrayInput";
import SortVisualizer from "./components/SortVisualizer";
import { mergeSort, SortStep } from "./utils/mergeSort";

const App: React.FC = () => {
  const [steps, setSteps] = useState<SortStep[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleArraySubmit = (array: number[]) => {
    const newSteps: SortStep[] = [];
    mergeSort(array, newSteps);
    setSteps(newSteps);
    setIsSubmitted(true);
  };

  return (
    <div className="container">
      <h1>Visualize Merge Sort</h1>
      <ArrayInput onArraySubmit={handleArraySubmit} />
      {isSubmitted && <SortVisualizer steps={steps} />}
    </div>
  );
};

export default App;
