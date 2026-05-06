import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import ActionBar from '../components/layout/ActionBar';
import Breadcrumb from '../components/ui/Breadcrumb';
import { mockApplicants } from '../data/mockData';

const StatusBadge = ({ status }) => {
  const styles = {
    'Admin Approved': 'bg-green-100 text-green-700 border border-green-300',
    'Pending': 'bg-yellow-100 text-yellow-700 border border-yellow-300',
    'Stopped': 'bg-red-100 text-red-700 border border-red-300',
    'Closed': 'bg-gray-100 text-gray-600 border border-gray-300',
  };
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${styles[status] || styles['Closed']}`}>
      {status}
    </span>
  );
};

const Applicants = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filtered = mockApplicants.filter(a =>
    !search || a.name.toLowerCase().includes(search.toLowerCase()) || a.ppoNo.includes(search)
  );

  return (
    <div className="min-h-screen" style={{ background: '#f0f2f5' }}>
      <Navbar />
      <div className="px-6 py-4">
        <Breadcrumb items={[{ label: 'Home', link: '/dashboard' }, { label: 'Applicants' }]} />
        <ActionBar />

        <div className="bg-white rounded shadow-sm overflow-hidden">
          <div className="px-4 py-3 flex items-center justify-between border-b border-gray-200">
            <span className="font-semibold text-sm text-gray-700">All Applicants</span>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="Search by PPO No. or Name..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1.5 pl-9 text-sm focus:outline-none focus:border-blue-400 w-64"
              />
            </div>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">#</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">PPO No.</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Employee ID</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Department</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Retirement Date</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Monthly Pension</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Status</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((a, i) => (
                <tr key={a.id} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                  <td className="px-4 py-3 text-gray-400 text-xs">{i + 1}</td>
                  <td className="px-4 py-3 text-blue-700 font-mono text-xs">{a.ppoNo}</td>
                  <td className="px-4 py-3 font-medium">{a.employeeId}</td>
                  <td className="px-4 py-3 text-gray-600">{a.department}</td>
                  <td className="px-4 py-3 text-gray-600 text-xs">{a.retirementDate}</td>
                  <td className="px-4 py-3 font-semibold">{a.monthlyPension}</td>
                  <td className="px-4 py-3"><StatusBadge status={a.status} /></td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => navigate(`/applicants/${a.id}`)}
                      className="text-blue-600 text-xs hover:underline"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Applicants;
