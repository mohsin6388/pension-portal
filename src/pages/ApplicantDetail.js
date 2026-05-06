import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import ActionBar from '../components/layout/ActionBar';
import Breadcrumb from '../components/ui/Breadcrumb';
import { mockApplicants } from '../data/mockData';

const InfoRow = ({ label, value }) => (
  <div>
    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{label}</div>
    <div className="text-sm text-gray-800">{value || '—'}</div>
  </div>
);

const Section = ({ icon, title, children }) => (
  <div className="mb-6">
    <div className="flex items-center gap-2 mb-3 pb-1 border-b border-gray-200">
      <span>{icon}</span>
      <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">{title}</span>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {children}
    </div>
  </div>
);

const StatusBadge = ({ status }) => {
  const styles = {
    'Admin Approved': 'bg-green-100 text-green-700 border border-green-300',
    'Pending': 'bg-yellow-100 text-yellow-700 border border-yellow-300',
    'Stopped': 'bg-red-100 text-red-700 border border-red-300',
  };
  return (
    <span className={`px-3 py-1 rounded text-xs font-medium ${styles[status] || 'bg-gray-100 text-gray-600'}`}>
      {status}
    </span>
  );
};

const ApplicantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const applicant = mockApplicants.find(a => a.id === parseInt(id));

  if (!applicant) {
    return (
      <div className="min-h-screen" style={{ background: '#f0f2f5' }}>
        <Navbar />
        <div className="px-6 py-4">
          <p className="text-gray-500">Applicant not found.</p>
          <button onClick={() => navigate('/applicants')} className="text-blue-600 hover:underline mt-2">← Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: '#f0f2f5' }}>
      <Navbar />
      <div className="px-6 py-4">
        <Breadcrumb items={[
          { label: 'Home', link: '/dashboard' },
          { label: 'Applicants', link: '/applicants' },
          { label: applicant.employeeId }
        ]} />
        <ActionBar />

        <div className="bg-white rounded shadow-sm overflow-hidden">
          <div className="px-6 py-4 flex items-center justify-between" style={{ background: 'linear-gradient(135deg, #1a2a5e 0%, #0f1d45 100%)' }}>
            <div className="text-white font-bold">Pensioner Profile</div>
            <StatusBadge status={applicant.status} />
          </div>

          <div className="p-6">
            {/* Profile */}
            <div className="flex items-start gap-4 p-4 border border-gray-200 rounded mb-6 bg-gray-50">
              <div className="w-20 h-20 border-2 border-gray-300 rounded overflow-hidden bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-3xl">👤</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-800">
                  {applicant.designationPost} · {applicant.department}
                </div>
                <div className="text-sm text-gray-500">Employee ID: {applicant.employeeId}</div>
                <div className="text-sm text-gray-500">PPO No: {applicant.ppoNo}</div>
              </div>
            </div>

            <Section icon="👤" title="Basic Information">
              <InfoRow label="Aadhaar No." value={applicant.aadhaar} />
              <InfoRow label="PAN No." value={applicant.pan} />
              <InfoRow label="Date of Birth" value={applicant.dob} />
              <InfoRow label="Date of Joining" value={applicant.doj} />
              <InfoRow label="Retirement Date" value={applicant.retirDate} />
              <InfoRow label="Date of Death" value={applicant.dateOfDeath} />
              <InfoRow label="Gender" value={applicant.gender} />
              <InfoRow label="Employee Category" value={applicant.empCategory} />
              <InfoRow label="Grade Pay (₹)" value={applicant.gradePay} />
              <InfoRow label="Last Salary (₹)" value={applicant.lastSalary} />
              <InfoRow label="Caste / Category" value={applicant.caste} />
              <InfoRow label="Dependent Name" value={applicant.dependentName} />
            </Section>

            <Section icon="📂" title="Pension Category">
              <InfoRow label="Category Type" value={applicant.categoryType} />
              <InfoRow label="Category %" value={applicant.categoryPct} />
              <InfoRow label="ACP" value={applicant.acp} />
              <InfoRow label="Notional Increment" value={applicant.notionalIncrement} />
              <InfoRow label="PFMS Ref." value={applicant.pfms} />
            </Section>

            <Section icon="📍" title="Contact & Address">
              <InfoRow label="Mobile No." value={applicant.mobile} />
              <InfoRow label="Family Mobile No." value={applicant.familyMobile} />
              <InfoRow label="Pin Code" value={applicant.pinCode} />
              <div />
              <div className="col-span-2">
                <InfoRow label="Permanent Address" value={applicant.permanentAddress} />
              </div>
              <div className="col-span-2">
                <InfoRow label="Correspondence Address" value={applicant.correspondenceAddress} />
              </div>
            </Section>

            <Section icon="🏦" title="Bank Details">
              <InfoRow label="Bank Name" value={applicant.bankName} />
              <InfoRow label="IFSC Code" value={applicant.ifsc} />
              <InfoRow label="MICR" value={applicant.micr} />
              <InfoRow label="Account No." value={applicant.accountNo} />
              <InfoRow label="Account Type" value={applicant.accountType} />
            </Section>

            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 text-sm border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
              >
                ← Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetail;
