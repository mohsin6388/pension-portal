import React from 'react';

const FormSection = ({ icon, title, children }) => (
  <div className="mb-6">
    <div className="flex items-center gap-2 mb-4 pb-1 border-b border-gray-200">
      <span className="text-gray-500">{icon}</span>
      <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">{title}</span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {children}
    </div>
  </div>
);

export default FormSection;
