import React from 'react';

export const InputField = ({ label, required, placeholder, type = 'text', value, onChange, name, className = '' }) => (
  <div className={className}>
    <label className="block text-xs font-medium text-gray-600 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value || ''}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
    />
  </div>
);

export const SelectField = ({ label, required, options, value, onChange, name, className = '' }) => (
  <div className={className}>
    <label className="block text-xs font-medium text-gray-600 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      name={name}
      value={value || ''}
      onChange={onChange}
      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 bg-white"
    >
      <option value="">-- Select {label} --</option>
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export const RadioGroup = ({ label, required, options, value, onChange, name }) => (
  <div>
    <label className="block text-xs font-medium text-gray-600 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="flex gap-3 flex-wrap">
      {options.map(opt => (
        <label key={opt} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={onChange}
            className="accent-blue-600"
          />
          <span className="text-sm">{opt}</span>
        </label>
      ))}
    </div>
  </div>
);

export const TextareaField = ({ label, required, placeholder, value, onChange, name }) => (
  <div className="md:col-span-2">
    <label className="block text-xs font-medium text-gray-600 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      name={name}
      value={value || ''}
      onChange={onChange}
      placeholder={placeholder}
      rows={3}
      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 resize-y"
    />
  </div>
);

export const UploadField = ({ label, required, accept, hint, value, onChange, name }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && onChange) onChange({ target: { name, value: file } });
  };

  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-400 bg-gray-50 transition-colors min-h-[100px]">
        <input type="file" accept={accept} className="hidden" onChange={handleChange} />
        <span className="text-2xl mb-1">📎</span>
        <span className="text-sm text-blue-700 font-medium">{value ? value.name : `Upload ${label}`}</span>
        <span className="text-xs text-gray-400 mt-1">{hint}</span>
      </label>
    </div>
  );
};
