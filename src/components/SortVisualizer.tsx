import React from "react";
import { SortStep } from "../utils/mergeSort";
import "./SortVisualizer.css";

interface SortVisualizerProps {
  steps: SortStep[];
}

const SortVisualizer: React.FC<SortVisualizerProps> = ({ steps }) => {
  return (
    <div className="visualizer">
      {steps.map((step, index) => (
        <div key={index} className="visualizer-step">
          {index === 0 && (
            <div className="top-array">
              <div className="array">
                {step.array.map((num, idx) => (
                  <div key={idx} className="array-item">
                    {num}
                  </div>
                ))}
              </div>
            </div>
          )}

          {step.left.length > 0 && step.right.length > 0 && (
            <div className="split-level">
              <div className="split-side-left">
                <div className="box">
                  <div className="array">
                    {step.left.map((num, idx) => (
                      <div key={idx} className="array-item">
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="split-side-right">
                <div className="box">
                  <div className="array">
                    {step.right.map((num, idx) => (
                      <div key={idx} className="array-item">
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step.merged.length > 0 && (
            <>
              <div className="arrow-down">↓</div>
              <div className="merge-level">
                <div className="box">
                  <div className="array">
                    {step.merged.map((num, idx) => (
                      <div key={idx} className="array-item">
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {index < steps.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
};

export default SortVisualizer;
