import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ActionBar = ({ showViewAll = true }) => {
  const navigate = useNavigate();
  const [showPensionMenu, setShowPensionMenu] = useState(false);

  return (
    <div className="flex gap-3 mb-4 relative">
      <button
        onClick={() => navigate('/applicants/add')}
        className="flex items-center gap-2 px-4 py-2 text-white text-sm font-medium rounded"
        style={{ background: '#1a2a5e' }}
      >
        <span className="text-lg leading-none">+</span> Add Applicant
      </button>

      <div className="relative">
        <button
          onClick={() => setShowPensionMenu(!showPensionMenu)}
          className="flex items-center gap-2 px-4 py-2 text-white text-sm font-medium rounded"
          style={{ background: '#16a34a' }}
        >
          <span>⊞</span> Pension Actions <span>▼</span>
        </button>
        {showPensionMenu && (
          <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-50 min-w-[180px]">
            {['Start Pension', 'Stop Pension', 'Revise Pension', 'Close Pension'].map(action => (
              <button
                key={action}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                onClick={() => setShowPensionMenu(false)}
              >
                {action}
              </button>
            ))}
          </div>
        )}
      </div>

      {showViewAll && (
        <button
          onClick={() => navigate('/applicants')}
          className="flex items-center gap-2 px-4 py-2 text-gray-700 text-sm font-medium rounded border border-gray-300 bg-gray-100 hover:bg-gray-200"
        >
          <span>⊟</span> View All Records
        </button>
      )}
    </div>
  );
};

export default ActionBar;
