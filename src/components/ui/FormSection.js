import React from 'react';

const FormSection = ({ icon, title, children }) => (
  <div className="mb-12">
    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
      {/* <span className="text-gray-500">{icon}</span> */}
      <span
        className="text-lg font-bold text-black"
        style={{
          fontFamily: "Arial"
        }}
      >
        {title}
      </span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">{children}</div>
  </div>
);

export default FormSection;
