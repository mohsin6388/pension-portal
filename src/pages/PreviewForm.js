import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import ActionBar from '../components/layout/ActionBar';
import Breadcrumb from '../components/ui/Breadcrumb';
import StepIndicator from '../components/ui/StepIndicator';

const InfoRow = ({ label, value }) => (
  <div>
    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{label}</div>
    <div className="text-sm text-gray-800">{value || '—'}</div>
  </div>
);

const PreviewSection = ({ icon, title, children }) => (
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

const PreviewForm = ({ form, onEdit }) => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const refId = 'KMC-' + Math.random().toString(36).substring(2, 10).toUpperCase();

  if (submitted) {
    return (
      <div className="min-h-screen" style={{ background: '#f0f2f5' }}>
        <Navbar />
        <div className="px-6 py-4">
          <Breadcrumb items={[{ label: 'Home', link: '/dashboard' }, { label: 'Add Applicant' }]} />
          <ActionBar />

          <div className="bg-white rounded shadow-sm overflow-hidden">
            <div
              className="flex items-center gap-3 px-6 py-4"
              style={{ background: 'linear-gradient(135deg, #1a2a5e 0%, #0f1d45 100%)' }}
            >
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <div>
                <div className="text-white font-bold">Submission Successful</div>
                <div className="text-blue-300 text-xs">Profile submitted for approval</div>
              </div>
            </div>

            <div className="py-16 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center mb-4 border-4 border-teal-100">
                <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
              </div>
              <h2 className="text-xl font-bold text-blue-900 mb-2">Profile Submitted for Approval</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
                <span className="text-green-500">✓</span>
                Profile submitted for approval! Reference ID: {refId}
              </div>
              <button
                onClick={() => navigate('/applicants/add')}
                className="px-6 py-3 text-white rounded font-medium hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #1a2a5e, #2d4a9a)' }}
              >
                + Add Another Applicant
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: '#f0f2f5' }}>
      <Navbar />
      <div className="px-6 py-4">
        <Breadcrumb items={[{ label: 'Home', link: '/dashboard' }, { label: 'Add Applicant' }]} />
        <ActionBar />

        <div className="bg-white rounded shadow-sm overflow-hidden">
          {/* Header */}
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{ background: 'linear-gradient(135deg, #1a2a5e 0%, #0f1d45 100%)' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center">
                <span className="text-white text-lg">🔍</span>
              </div>
              <div>
                <div className="text-white font-bold">Preview — Pensioner Profile</div>
                <div className="text-blue-300 text-xs">Review all details carefully before submitting for approval</div>
              </div>
            </div>
            <StepIndicator currentStep={2} />
          </div>

          <div className="p-6">
            {/* Profile card */}
            <div className="flex items-start gap-4 p-4 border border-gray-200 rounded mb-6 bg-gray-50">
              <div className="w-20 h-20 border-2 border-gray-300 rounded overflow-hidden bg-gray-200 flex items-center justify-center">
                {form.photo
                  ? <img src={URL.createObjectURL(form.photo)} alt="Photo" className="w-full h-full object-cover" />
                  : <span className="text-gray-400 text-3xl">👤</span>
                }
              </div>
              <div className="flex-1">
                <div className="text-lg font-bold text-gray-800">
                  {form.designationPost} · {form.department}
                </div>
                <div className="text-sm text-gray-500">Employee ID: {form.employeeId}</div>
                <div className="text-sm text-gray-500">PPO No: {form.ppoNo || '—'}</div>
              </div>
              <div className="flex flex-col gap-1">
                {form.signature && (
                  <span className="flex items-center gap-1 text-xs text-white bg-green-600 px-2 py-1 rounded">
                    <span>✓</span> Signature uploaded
                  </span>
                )}
                {form.salarySlip && (
                  <span className="flex items-center gap-1 text-xs text-white bg-green-600 px-2 py-1 rounded">
                    <span>✓</span> Salary Slip uploaded
                  </span>
                )}
                {form.deathCertificate && (
                  <span className="flex items-center gap-1 text-xs text-white bg-green-600 px-2 py-1 rounded">
                    <span>✓</span> Death Certificate uploaded
                  </span>
                )}
              </div>
            </div>

            {/* Basic Info */}
            <PreviewSection icon="👤" title="Basic Information">
              <InfoRow label="Aadhaar No." value={form.aadhaar} />
              <InfoRow label="PAN No." value={form.pan} />
              <InfoRow label="Date of Birth" value={form.dob} />
              <InfoRow label="Date of Joining" value={form.doj} />
              <InfoRow label="Retirement Date" value={form.retirementDate} />
              <InfoRow label="Date of Death" value={form.dateOfDeath} />
              <InfoRow label="Gender" value={form.gender} />
              <InfoRow label="Employee Category" value={form.employeeCategory} />
              <InfoRow label="Grade Pay (₹)" value={form.gradePay} />
              <InfoRow label="Last Salary (₹)" value={form.lastSalary} />
              <InfoRow label="Caste / Category" value={form.caste} />
              <InfoRow label="Dependent Name" value={form.dependentName} />
            </PreviewSection>

            {/* Pension Category */}
            <PreviewSection icon="📂" title="Pension Category">
              <InfoRow label="Category Type" value={form.categoryType} />
              <InfoRow label="Category %" value={form.categoryPct} />
              <InfoRow label="ACP" value={form.acp} />
              <InfoRow label="Notional Increment" value={form.notionalIncrement} />
              <div className="col-span-2 md:col-span-4">
                <InfoRow label="PFMS Ref." value={form.pfms} />
              </div>
            </PreviewSection>

            {/* Contact */}
            <PreviewSection icon="📍" title="Contact & Address">
              <InfoRow label="Mobile No." value={form.mobile} />
              <InfoRow label="Family Mobile No." value={form.familyMobile} />
              <InfoRow label="Pin Code" value={form.pinCode} />
              <div />
              <div className="col-span-2 md:col-span-2">
                <InfoRow label="Permanent Address" value={form.permanentAddress} />
              </div>
              <div className="col-span-2 md:col-span-2">
                <InfoRow label="Correspondence Address" value={form.correspondenceAddress} />
              </div>
            </PreviewSection>

            {/* Bank Details */}
            <PreviewSection icon="🏦" title="Bank Details">
              <InfoRow label="Bank Name" value={form.bankName} />
              <InfoRow label="IFSC Code" value={form.ifsc} />
              <InfoRow label="MICR" value={form.micr} />
              <InfoRow label="Account No." value={form.accountNo} />
              <InfoRow label="Account Type" value={form.accountType} />
            </PreviewSection>

            {/* Declaration */}
            <div className="bg-yellow-50 border border-yellow-200 rounded px-4 py-3 mb-6 flex items-start gap-2">
              <span className="text-yellow-500 mt-0.5">⚠</span>
              <p className="text-xs text-gray-700">
                I hereby declare that all the information provided above is true and correct to the best of my knowledge.
                Any false information may lead to rejection of the application and/or legal action.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <button
                onClick={onEdit}
                className="flex items-center gap-2 px-5 py-2 text-sm border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
              >
                ← Edit Details
              </button>
              <button
                onClick={() => setSubmitted(true)}
                className="px-6 py-2 text-sm text-white rounded font-medium hover:opacity-90 flex items-center gap-2"
                style={{ background: 'linear-gradient(135deg, #1a2a5e, #2d4a9a)' }}
              >
                Submit for Approval ✓
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewForm;
