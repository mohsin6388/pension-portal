import React from 'react';

const StepIndicator = ({ currentStep }) => {
  const steps = [
    { num: 1, label: 'Fill Form' },
    { num: 2, label: 'Preview' },
    { num: 3, label: 'Approved' },
  ];

  return (
    <div className="flex items-center gap-2">
      {steps.map((step, i) => (
        <React.Fragment key={step.num}>
          <div className="flex items-center gap-1">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
                currentStep === step.num
                  ? 'bg-amber-400 border-amber-400 text-white'
                  : currentStep > step.num
                  ? 'bg-green-500 border-green-500 text-white'
                  : 'bg-gray-300 border-gray-300 text-gray-600'
              }`}
            >
              {step.num}
            </div>
            <span
              className={`text-xs font-medium ${
                currentStep === step.num ? 'text-amber-400' : 'text-blue-200'
              }`}
            >
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className="text-blue-300 text-xs">——</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;
