// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/layout/Navbar';
// import ActionBar from '../components/layout/ActionBar';
// import Breadcrumb from '../components/ui/Breadcrumb';
// import StepIndicator from '../components/ui/StepIndicator';
// import FormSection from '../components/ui/FormSection';
// import { InputField, SelectField, RadioGroup, TextareaField, UploadField } from '../components/forms/FormField';
// import { departments, designations, categories, castes, accountTypes } from '../data/mockData';
// import PreviewForm from './PreviewForm';

// const initialForm = {
//   employeeId: '', ppoNo: '',
//   department: '', designationPost: '',
//   aadhaar: '', pan: '',
//   dob: '', doj: '',
//   retirementDate: '', dateOfDeath: '',
//   gender: '', employeeCategory: '',
//   gradePay: '', lastSalary: '',
//   caste: '', dependentName: '',
//   categoryType: 'Self', categoryPct: '100%',
//   notionalIncrement: 'Yes', acp: 'Yes',
//   pfms: '',
//   mobile: '', familyMobile: '',
//   pinCode: '', permanentAddress: '', correspondenceAddress: '',
//   bankName: '', ifsc: '', micr: '', accountNo: '', accountType: '',
//   photo: null, signature: null, salarySlip: null, deathCertificate: null,
// };

// const AddApplicant = () => {
//   const [form, setForm] = useState(initialForm);
//   const [step, setStep] = useState(1);
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(f => ({ ...f, [name]: value }));
//     if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
//   };

//   const validate = () => {
//     const required = ['employeeId', 'department', 'designationPost', 'dob', 'retirementDate', 'gender', 'employeeCategory', 'gradePay', 'mobile', 'bankName', 'ifsc', 'accountNo', 'accountType'];
//     const errs = {};
//     required.forEach(k => { if (!form[k]) errs[k] = 'Required'; });
//     setErrors(errs);
//     return Object.keys(errs).length === 0;
//   };

//   const handlePreview = () => {
//     if (validate()) setStep(2);
//     else window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleReset = () => {
//     setForm(initialForm);
//     setErrors({});
//   };

//   if (step === 2) {
//     return <PreviewForm form={form} onEdit={() => setStep(1)} />;
//   }

//   return (
//     <div className="min-h-screen" style={{ background: '#f0f2f5' }}>
//       <Navbar />
//       <div className="px-6 py-4">
//         <Breadcrumb items={[{ label: 'Home', link: '/dashboard' }, { label: 'Add Applicant' }]} />
//         <ActionBar />

//         {/* Form card */}
//         <div className="bg-white rounded shadow-sm overflow-hidden">
//           {/* Form header */}
//           <div
//             className="flex items-center justify-between px-6 py-4"
//             style={{ background: 'linear-gradient(135deg, #1a2a5e 0%, #0f1d45 100%)' }}
//           >
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center">
//                 <span className="text-white text-lg">📋</span>
//               </div>
//               <div>
//                 <div className="text-white font-bold">Employee Profile — Pensioner Registration</div>
//                 <div className="text-blue-300 text-xs">Fill all required fields marked with * and upload necessary documents</div>
//               </div>
//             </div>
//             <StepIndicator currentStep={step} />
//           </div>

//           <div className="p-6">
//             {/* Basic Information */}
//             <FormSection icon="👤" title="Basic Information">
//               <InputField
//                 label="Employee ID" required name="employeeId" value={form.employeeId}
//                 onChange={handleChange} placeholder="e.g. KMC-EMP-00123"
//               />
//               {errors.employeeId && <p className="text-red-500 text-xs mt-1">{errors.employeeId}</p>}
//               <InputField
//                 label="PPO No." name="ppoNo" value={form.ppoNo}
//                 onChange={handleChange} placeholder="Pension Payment Order No."
//               />
//               <SelectField
//                 label="Department" required name="department" value={form.department}
//                 onChange={handleChange} options={departments}
//               />
//               {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
//               <SelectField
//                 label="Designation" required name="designationPost" value={form.designationPost}
//                 onChange={handleChange} options={designations}
//               />
//               {errors.designationPost && <p className="text-red-500 text-xs mt-1">{errors.designationPost}</p>}
//               <InputField
//                 label="Aadhaar No." name="aadhaar" value={form.aadhaar}
//                 onChange={handleChange} placeholder="12-digit Aadhaar Number"
//               />
//               <InputField
//                 label="PAN No." name="pan" value={form.pan}
//                 onChange={handleChange} placeholder="e.g. ABCDE1234F"
//               />
//               <InputField
//                 label="Date of Birth" required type="date" name="dob" value={form.dob}
//                 onChange={handleChange}
//               />
//               {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
//               <InputField
//                 label="Date of Joining" type="date" name="doj" value={form.doj}
//                 onChange={handleChange}
//               />
//               <InputField
//                 label="Retirement Date" required type="date" name="retirementDate" value={form.retirementDate}
//                 onChange={handleChange}
//               />
//               {errors.retirementDate && <p className="text-red-500 text-xs mt-1">{errors.retirementDate}</p>}
//               <InputField
//                 label="Date of Death (if applicable)" type="date" name="dateOfDeath" value={form.dateOfDeath}
//                 onChange={handleChange}
//               />
//               <SelectField
//                 label="Gender" required name="gender" value={form.gender}
//                 onChange={handleChange} options={['Male', 'Female', 'Other']}
//               />
//               {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
//               <SelectField
//                 label="Employee Category" required name="employeeCategory" value={form.employeeCategory}
//                 onChange={handleChange} options={categories}
//               />
//               {errors.employeeCategory && <p className="text-red-500 text-xs mt-1">{errors.employeeCategory}</p>}
//               <InputField
//                 label="Grade Pay" required name="gradePay" value={form.gradePay}
//                 onChange={handleChange} placeholder="Grade Pay amount"
//               />
//               {errors.gradePay && <p className="text-red-500 text-xs mt-1">{errors.gradePay}</p>}
//               <InputField
//                 label="Last Salary Drawn" name="lastSalary" value={form.lastSalary}
//                 onChange={handleChange} placeholder="Last drawn salary"
//               />
//               <SelectField
//                 label="Caste / Category" name="caste" value={form.caste}
//                 onChange={handleChange} options={castes}
//               />
//               <InputField
//                 label="Father / Husband / Dependent Name" name="dependentName" value={form.dependentName}
//                 onChange={handleChange} placeholder="Dependent name"
//               />
//             </FormSection>

//             {/* Pension Category */}
//             <FormSection icon="📂" title="Pension Category">
//               <RadioGroup
//                 label="Category Type" required name="categoryType" value={form.categoryType}
//                 onChange={handleChange} options={['Self', 'Family', 'Disability', 'Other']}
//               />
//               <div />
//               <RadioGroup
//                 label="Category %" required name="categoryPct" value={form.categoryPct}
//                 onChange={handleChange} options={['100%', '90%', '75%']}
//               />
//               <RadioGroup
//                 label="Notional Increment" name="notionalIncrement" value={form.notionalIncrement}
//                 onChange={handleChange} options={['Yes', 'No']}
//               />
//               <div className="md:col-span-2">
//                 <InputField
//                   label="PFMS" name="pfms" value={form.pfms}
//                   onChange={handleChange} placeholder="PFMS Reference Number"
//                   className="w-full md:w-1/2"
//                 />
//               </div>
//             </FormSection>

//             {/* Contact & Address */}
//             <FormSection icon="📍" title="Contact & Address">
//               <InputField
//                 label="Mobile No." required name="mobile" value={form.mobile}
//                 onChange={handleChange} placeholder="For OTP Authentication"
//               />
//               {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
//               <InputField
//                 label="Family Mobile No." name="familyMobile" value={form.familyMobile}
//                 onChange={handleChange} placeholder="For OTP Authentication"
//               />
//               <InputField
//                 label="Pin Code" name="pinCode" value={form.pinCode}
//                 onChange={handleChange} placeholder="6-digit Pin Code"
//               />
//               <div />
//               <div className="md:col-span-2">
//                 <label className="block text-xs font-medium text-gray-600 mb-1">Permanent Address</label>
//                 <textarea
//                   name="permanentAddress" value={form.permanentAddress} onChange={handleChange}
//                   placeholder="Full permanent address" rows={3}
//                   className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 resize-y"
//                 />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-xs font-medium text-gray-600 mb-1">Correspondence Address</label>
//                 <textarea
//                   name="correspondenceAddress" value={form.correspondenceAddress} onChange={handleChange}
//                   placeholder="Correspondence address (if different)" rows={3}
//                   className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 resize-y"
//                 />
//               </div>
//             </FormSection>

//             {/* Bank Details */}
//             <FormSection icon="🏦" title="Bank Details">
//               <InputField
//                 label="Bank Name" required name="bankName" value={form.bankName}
//                 onChange={handleChange} placeholder="Bank name"
//               />
//               {errors.bankName && <p className="text-red-500 text-xs mt-1">{errors.bankName}</p>}
//               <InputField
//                 label="IFSC Code" required name="ifsc" value={form.ifsc}
//                 onChange={handleChange} placeholder="Bank IFSC Code"
//               />
//               {errors.ifsc && <p className="text-red-500 text-xs mt-1">{errors.ifsc}</p>}
//               <InputField
//                 label="MICR" name="micr" value={form.micr}
//                 onChange={handleChange} placeholder="MICR Code"
//               />
//               <InputField
//                 label="Bank A/c No." required name="accountNo" value={form.accountNo}
//                 onChange={handleChange} placeholder="Account Number"
//               />
//               {errors.accountNo && <p className="text-red-500 text-xs mt-1">{errors.accountNo}</p>}
//               <SelectField
//                 label="A/c Type" required name="accountType" value={form.accountType}
//                 onChange={handleChange} options={accountTypes}
//               />
//               {errors.accountType && <p className="text-red-500 text-xs mt-1">{errors.accountType}</p>}
//               <RadioGroup
//                 label="ACP" name="acp" value={form.acp}
//                 onChange={handleChange} options={['Yes', 'No']}
//               />
//             </FormSection>

//             {/* Documents Upload */}
//             <FormSection icon="📎" title="Documents Upload">
//               <UploadField
//                 label="Photo" required name="photo" value={form.photo}
//                 onChange={handleChange} accept="image/jpeg,image/png"
//                 hint="JPG / PNG, max 2MB"
//               />
//               <UploadField
//                 label="Specimen Signature" required name="signature" value={form.signature}
//                 onChange={handleChange} accept="image/png,image/jpeg"
//                 hint="PNG / JPG"
//               />
//               <UploadField
//                 label="Salary Slip (PDF)" name="salarySlip" value={form.salarySlip}
//                 onChange={handleChange} accept="application/pdf"
//                 hint="PDF only"
//               />
//               <UploadField
//                 label="Death Certificate (if applicable)" name="deathCertificate" value={form.deathCertificate}
//                 onChange={handleChange} accept="application/pdf,image/*"
//                 hint="PDF / Image"
//               />
//             </FormSection>

//             {/* Action buttons */}
//             <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
//               <button
//                 type="button"
//                 onClick={handleReset}
//                 className="px-5 py-2 text-sm border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
//               >
//                 Reset
//               </button>
//               <button
//                 type="button"
//                 onClick={() => navigate('/dashboard')}
//                 className="px-5 py-2 text-sm border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 onClick={handlePreview}
//                 className="px-6 py-2 text-sm text-white rounded font-medium hover:opacity-90"
//                 style={{ background: 'linear-gradient(135deg, #1a2a5e, #2d4a9a)' }}
//               >
//                 Preview & Submit →
//               </button>
//             </div>

//             {Object.keys(errors).length > 0 && (
//               <div className="mt-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded px-3 py-2">
//                 Please fill in all required fields marked with *
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddApplicant;
//===================================================================
//==================================================================
//==================================================================

//
//
//
///
//
///
//
///
//
//
//
//
//

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/layout/Navbar";
// import ActionBar from "../components/layout/ActionBar";
// import Breadcrumb from "../components/ui/Breadcrumb";
// import StepIndicator from "../components/ui/StepIndicator";
// import FormSection from "../components/ui/FormSection";
// import {
//   InputField,
//   SelectField,
//   RadioGroup,
//   UploadField,
// } from "../components/forms/FormField";

// import {
//   departments,
//   designations,
//   categories,
//   castes,
//   accountTypes,
// } from "../data/mockData";

// const initialForm = {
//   employeeId: "",
//   ppoNo: "",
//   department: "",
//   designationPost: "",
//   aadhaar: "",
//   pan: "",
//   dob: "",
//   doj: "",
//   retirementDate: "",
//   dateOfDeath: "",
//   gender: "",
//   employeeCategory: "",
//   gradePay: "",
//   lastSalary: "",
//   caste: "",
//   dependentName: "",
//   categoryType: "Self",
//   categoryPct: "100%",
//   notionalIncrement: "Yes",
//   acp: "Yes",
//   pfms: "",
//   mobile: "",
//   familyMobile: "",
//   pinCode: "",
//   permanentAddress: "",
//   correspondenceAddress: "",
//   bankName: "",
//   ifsc: "",
//   micr: "",
//   accountNo: "",
//   accountType: "",
//   photo: null,
//   signature: null,
//   salarySlip: null,
//   deathCertificate: null,
// };

// const AddApplicant = () => {
//   const [form, setForm] = useState(initialForm);
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   // Handle input + file change
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));

//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }));
//     }
//   };

//   // Validation
//   const validate = () => {
//     const required = [
//       "employeeId",
//       "department",
//       "designationPost",
//       "dob",
//       "retirementDate",
//       "gender",
//       "employeeCategory",
//       "gradePay",
//       "mobile",
//       "bankName",
//       "ifsc",
//       "accountNo",
//       "accountType",
//     ];

//     const errs = {};

//     required.forEach((field) => {
//       if (!form[field]) {
//         errs[field] = "Required";
//       }
//     });

//     setErrors(errs);

//     return Object.keys(errs).length === 0;
//   };

//   // Reset form
//   const handleReset = () => {
//     setForm(initialForm);
//     setErrors({});
//   };

//   // API Submit
//   const handleApprove = async () => {
//     if (!validate()) {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       return;
//     }

//     setLoading(true);

//     const fd = new FormData();

//     Object.entries(form).forEach(([key, value]) => {
//       if (value !== null && value !== undefined) {
//         fd.append(key, value);
//       }
//     });

//     console.log("Submitting form data:", form);

//     try {
//       const res = await fetch(
//         "https://pension-portal-backend.onrender.com/api/pensioners",
//         {
//           method: "POST",
//           body: fd,
//         }
//       );

//       if (!res.ok) {
//         throw new Error(`Server error ${res.status}`);
//       }

//       const result = await res.json();

//       console.log("API Response:", result);

//       alert(
//         `✅ Profile submitted successfully!\nReference ID: ${
//           result?.id || result?.referenceId || "-"
//         }`
//       );

//       navigate("/dashboard");
//     } catch (e) {
//       console.error("Submit Error:", e);

//       alert("❌ Submission failed: " + e.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen"
//       style={{ background: "#f0f2f5" }}
//     >
//       <Navbar />

//       <div className="px-6 py-4">
//         <Breadcrumb
//           items={[
//             { label: "Home", link: "/dashboard" },
//             { label: "Add Applicant" },
//           ]}
//         />

//         <ActionBar />

//         <div className="bg-white rounded shadow-sm overflow-hidden">
//           {/* Header */}
//           <div
//             className="flex items-center justify-between px-6 py-4"
//             style={{
//               background:
//                 "linear-gradient(135deg, #1a2a5e 0%, #0f1d45 100%)",
//             }}
//           >
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center">
//                 <span className="text-white text-lg">📋</span>
//               </div>

//               <div>
//                 <div className="text-white font-bold">
//                   Employee Profile — Pensioner Registration
//                 </div>

//                 <div className="text-blue-300 text-xs">
//                   Fill all required fields marked with *
//                 </div>
//               </div>
//             </div>

//             <StepIndicator currentStep={1} />
//           </div>

//           <div className="p-6">
//             {/* Basic Information */}
//             <FormSection
//               icon="👤"
//               title="Basic Information"
//             >
//               <InputField
//                 label="Employee ID"
//                 required
//                 name="employeeId"
//                 value={form.employeeId}
//                 onChange={handleChange}
//                 placeholder="Employee ID"
//               />

//               <InputField
//                 label="PPO No."
//                 name="ppoNo"
//                 value={form.ppoNo}
//                 onChange={handleChange}
//                 placeholder="PPO Number"
//               />

//               <SelectField
//                 label="Department"
//                 required
//                 name="department"
//                 value={form.department}
//                 onChange={handleChange}
//                 options={departments}
//               />

//               <SelectField
//                 label="Designation"
//                 required
//                 name="designationPost"
//                 value={form.designationPost}
//                 onChange={handleChange}
//                 options={designations}
//               />

//               <InputField
//                 label="Aadhaar"
//                 name="aadhaar"
//                 value={form.aadhaar}
//                 onChange={handleChange}
//               />

//               <InputField
//                 label="PAN"
//                 name="pan"
//                 value={form.pan}
//                 onChange={handleChange}
//               />

//               <InputField
//                 label="Date of Birth"
//                 required
//                 type="date"
//                 name="dob"
//                 value={form.dob}
//                 onChange={handleChange}
//               />

//               <InputField
//                 label="Date of Joining"
//                 type="date"
//                 name="doj"
//                 value={form.doj}
//                 onChange={handleChange}
//               />

//               <InputField
//                 label="Retirement Date"
//                 required
//                 type="date"
//                 name="retirementDate"
//                 value={form.retirementDate}
//                 onChange={handleChange}
//               />

//               <InputField
//                 label="Date of Death"
//                 type="date"
//                 name="dateOfDeath"
//                 value={form.dateOfDeath}
//                 onChange={handleChange}
//               />

//               <SelectField
//                 label="Gender"
//                 required
//                 name="gender"
//                 value={form.gender}
//                 onChange={handleChange}
//                 options={["Male", "Female", "Other"]}
//               />

//               <SelectField
//                 label="Employee Category"
//                 required
//                 name="employeeCategory"
//                 value={form.employeeCategory}
//                 onChange={handleChange}
//                 options={categories}
//               />

//               <InputField
//                 label="Grade Pay"
//                 required
//                 name="gradePay"
//                 value={form.gradePay}
//                 onChange={handleChange}
//               />

//               <InputField
//                 label="Last Salary"
//                 name="lastSalary"
//                 value={form.lastSalary}
//                 onChange={handleChange}
//               />

//               <SelectField
//                 label="Caste"
//                 name="caste"
//                 value={form.caste}
//                 onChange={handleChange}
//                 options={castes}
//               />

//               <InputField
//                 label="Dependent Name"
//                 name="dependentName"
//                 value={form.dependentName}
//                 onChange={handleChange}
//               />
//             </FormSection>

//             {/* Pension Category */}
//             <FormSection
//               icon="📂"
//               title="Pension Category"
//             >
//               <RadioGroup
//                 label="Category Type"
//                 name="categoryType"
//                 value={form.categoryType}
//                 onChange={handleChange}
//                 options={["Self", "Family", "Disability", "Other"]}
//               />

//               <RadioGroup
//                 label="Category %"
//                 name="categoryPct"
//                 value={form.categoryPct}
//                 onChange={handleChange}
//                 options={["100%", "90%", "75%"]}
//               />

//               <RadioGroup
//                 label="Notional Increment"
//                 name="notionalIncrement"
//                 value={form.notionalIncrement}
//                 onChange={handleChange}
//                 options={["Yes", "No"]}
//               />

//               <InputField
//                 label="PFMS"
//                 name="pfms"
//                 value={form.pfms}
//                 onChange={handleChange}
//               />
//             </FormSection>

//             {/* Contact */}
//             <FormSection
//               icon="📍"
//               title="Contact & Address"
//             >
//               <InputField
//                 label="Mobile"
//                 required
//                 name="mobile"
//                 value={form.mobile}
//                 onChange={handleChange}
//               />

//               <InputField
//                 label="Family Mobile"
//                 name="familyMobile"
//                 value={form.familyMobile}
//                 onChange={handleChange}
//               />

//               <InputField
//                 label="Pin Code"
//                 name="pinCode"
//                 value={form.pinCode}
//                 onChange={handleChange}
//               />
//             </FormSection>

//             {/* Bank */}
//             <FormSection
//               icon="🏦"
//               title="Bank Details"
//             >
//               <InputField
//                 label="Bank Name"
//                 required
//                 name="bankName"
//                 value={form.bankName}
//                 onChange={handleChange}
//               />

//               <InputField
//                 label="IFSC"
//                 required
//                 name="ifsc"
//                 value={form.ifsc}
//                 onChange={handleChange}
//               />

//               <InputField
//                 label="MICR"
//                 name="micr"
//                 value={form.micr}
//                 onChange={handleChange}
//               />

//               <InputField
//                 label="Account Number"
//                 required
//                 name="accountNo"
//                 value={form.accountNo}
//                 onChange={handleChange}
//               />

//               <SelectField
//                 label="Account Type"
//                 required
//                 name="accountType"
//                 value={form.accountType}
//                 onChange={handleChange}
//                 options={accountTypes}
//               />
//             </FormSection>

//             {/* Uploads */}
//             <FormSection
//               icon="📎"
//               title="Documents Upload"
//             >
//               <UploadField
//                 label="Photo"
//                 name="photo"
//                 onChange={handleChange}
//                 accept="image/*"
//               />

//               <UploadField
//                 label="Signature"
//                 name="signature"
//                 onChange={handleChange}
//                 accept="image/*"
//               />

//               <UploadField
//                 label="Salary Slip"
//                 name="salarySlip"
//                 onChange={handleChange}
//                 accept="application/pdf"
//               />

//               <UploadField
//                 label="Death Certificate"
//                 name="deathCertificate"
//                 onChange={handleChange}
//                 accept="application/pdf,image/*"
//               />
//             </FormSection>

//             {/* Buttons */}
//             <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
//               <button
//                 type="button"
//                 onClick={handleReset}
//                 className="px-5 py-2 text-sm border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
//               >
//                 Reset
//               </button>

//               <button
//                 type="button"
//                 onClick={() => navigate("/dashboard")}
//                 className="px-5 py-2 text-sm border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
//               >
//                 Cancel
//               </button>

//               <button
//                 type="button"
//                 onClick={handleApprove}
//                 disabled={loading}
//                 className="px-6 py-2 text-sm text-white rounded font-medium hover:opacity-90"
//                 style={{
//                   background:
//                     "linear-gradient(135deg, #1a2a5e, #2d4a9a)",
//                 }}
//               >
//                 {loading ? "Submitting..." : "Submit Application"}
//               </button>
//             </div>

//             {/* Errors */}
//             {Object.keys(errors).length > 0 && (
//               <div className="mt-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded px-3 py-2">
//                 Please fill all required fields.
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddApplicant;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/layout/Navbar";
// import ActionBar from "../components/layout/ActionBar";
// import Breadcrumb from "../components/ui/Breadcrumb";
// import StepIndicator from "../components/ui/StepIndicator";
// import FormSection from "../components/ui/FormSection";

// import {
//   InputField,
//   SelectField,
//   RadioGroup,
//   UploadField,
// } from "../components/forms/FormField";

// import {
//   departments,
//   designations,
//   categories,
//   castes,
//   accountTypes,
// } from "../data/mockData";

// const initialForm = {
//   employeeId: "",
//   ppoNo: "",
//   department: "",
//   designationPost: "",
//   aadhaar: "",
//   pan: "",
//   dob: "",
//   doj: "",
//   retirementDate: "",
//   dateOfDeath: "",
//   gender: "",
//   employeeCategory: "",
//   gradePay: "",
//   lastSalary: "",
//   caste: "",
//   dependentName: "",
//   categoryType: "Self",
//   categoryPct: "100%",
//   notionalIncrement: "Yes",
//   acp: "Yes",
//   pfms: "",
//   mobile: "",
//   familyMobile: "",
//   pinCode: "",
//   permanentAddress: "",
//   correspondenceAddress: "",
//   bankName: "",
//   ifsc: "",
//   micr: "",
//   accountNo: "",
//   accountType: "",
//   photo: null,
//   signature: null,
//   salarySlip: null,
//   deathCertificate: null,
// };

// const AddApplicant = () => {
//   const [form, setForm] = useState(initialForm);
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [showPreview, setShowPreview] = useState(false);

//   const navigate = useNavigate();

//   // HANDLE CHANGE
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     // Aadhaar validation
//     if (name === "aadhaar") {
//       if (!/^\d*$/.test(value)) return;

//       if (value.length > 12) return;
//     }

//     // PAN validation
//     if (name === "pan") {
//       const upper = value.toUpperCase();

//       if (upper.length > 10) return;

//       setForm((prev) => ({
//         ...prev,
//         [name]: upper,
//       }));

//       return;
//     }

//     setForm((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));

//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }));
//     }
//   };

//   // VALIDATE
//   const validate = () => {
//     const required = [
//       "employeeId",
//       "department",
//       "designationPost",
//       "dob",
//       "retirementDate",
//       "gender",
//       "employeeCategory",
//       "gradePay",
//       "mobile",
//       "bankName",
//       "ifsc",
//       "accountNo",
//       "accountType",
//     ];

//     const errs = {};

//     required.forEach((field) => {
//       if (!form[field]) {
//         errs[field] = "Required";
//       }
//     });

//     // Aadhaar Validation
//     if (form.aadhaar && !/^\d{12}$/.test(form.aadhaar)) {
//       errs.aadhaar = "Aadhaar must be 12 digits";
//     }

//     // PAN Validation
//     if (form.pan && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(form.pan)) {
//       errs.pan = "Invalid PAN format";
//     }

//     setErrors(errs);

//     return Object.keys(errs).length === 0;
//   };

//   // RESET
//   const handleReset = () => {
//     setForm(initialForm);
//     setErrors({});
//     setShowPreview(false);
//   };

//   // PREVIEW
//   const handlePreview = () => {
//     if (!validate()) {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

//       return;
//     }

//     setShowPreview(true);

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   // FINAL SUBMIT
//   const handleApprove = async () => {
//     setLoading(true);

//     const fd = new FormData();

//     Object.entries(form).forEach(([key, value]) => {
//       if (value !== null && value !== undefined) {
//         fd.append(key, value);
//       }
//     });

//     try {
//       const res = await fetch(
//         "https://pension-portal-backend.onrender.com/api/pensioners",
//         {
//           method: "POST",
//           body: fd,
//         },
//       );

//       if (!res.ok) {
//         throw new Error(`Server error ${res.status}`);
//       }

//       const result = await res.json();

//       alert(
//         `✅ Profile submitted successfully!\nReference ID: ${
//           result?.id || result?.referenceId || "-"
//         }`,
//       );

//       navigate("/dashboard");
//     } catch (e) {
//       console.error("Submit Error:", e);

//       alert("❌ Submission failed: " + e.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen" style={{ background: "#f0f2f5" }}>
//       <Navbar />

//       <div className="px-6 py-4">
//         <Breadcrumb
//           items={[
//             { label: "Home", link: "/dashboard" },
//             { label: "Add Applicant" },
//           ]}
//         />

//         <ActionBar />

//         <div className="bg-white rounded shadow-sm overflow-hidden">
//           {/* HEADER */}
//           <div
//             className="flex items-center justify-between px-6 py-4"
//             style={{
//               background: "linear-gradient(135deg, #1a2a5e 0%, #0f1d45 100%)",
//             }}
//           >
//             <div>
//               <div className="text-white font-bold text-lg">
//                 Employee Profile — Pensioner Registration
//               </div>

//               <div className="text-blue-300 text-xs">
//                 Fill all required fields
//               </div>
//             </div>

//             <StepIndicator currentStep={showPreview ? 2 : 1} />
//           </div>

//           <div className="p-6">
//             {/* PREVIEW */}
//             {showPreview && (
//               <div className="mb-6 border border-blue-200 bg-blue-50 rounded p-5">
//                 <div className="text-lg font-bold text-blue-800 mb-4">
//                   Preview Application
//                 </div>

//                 <div className="grid grid-cols-2 gap-4 text-sm">
//                   <div>
//                     <b>Employee ID:</b> {form.employeeId}
//                   </div>

//                   <div>
//                     <b>PPO No:</b> {form.ppoNo}
//                   </div>

//                   <div>
//                     <b>Department:</b> {form.department}
//                   </div>

//                   <div>
//                     <b>Designation:</b> {form.designationPost}
//                   </div>

//                   <div>
//                     <b>Mobile:</b> {form.mobile}
//                   </div>

//                   <div>
//                     <b>Aadhaar:</b> {form.aadhaar}
//                   </div>

//                   <div>
//                     <b>PAN:</b> {form.pan}
//                   </div>

//                   <div>
//                     <b>Bank:</b> {form.bankName}
//                   </div>

//                   <div>
//                     <b>Account No:</b> {form.accountNo}
//                   </div>

//                   <div>
//                     <b>IFSC:</b> {form.ifsc}
//                   </div>

//                   {/* FILE PREVIEW */}
//                   <div>
//                     <b>Photo:</b>{" "}
//                     {form.photo ? form.photo.name : "Not Uploaded"}
//                   </div>

//                   <div>
//                     <b>Signature:</b>{" "}
//                     {form.signature ? form.signature.name : "Not Uploaded"}
//                   </div>

//                   <div>
//                     <b>Salary Slip:</b>{" "}
//                     {form.salarySlip ? form.salarySlip.name : "Not Uploaded"}
//                   </div>

//                   <div>
//                     <b>Death Certificate:</b>{" "}
//                     {form.deathCertificate
//                       ? form.deathCertificate.name
//                       : "Not Uploaded"}
//                   </div>
//                 </div>

//                 <div className="flex justify-end gap-3 mt-6">
//                   <button
//                     onClick={() => setShowPreview(false)}
//                     className="px-5 py-2 border border-gray-300 rounded text-sm"
//                   >
//                     Edit Form
//                   </button>

//                   <button
//                     onClick={handleApprove}
//                     disabled={loading}
//                     className="px-6 py-2 text-white rounded text-sm"
//                     style={{
//                       background: "linear-gradient(135deg, #1a2a5e, #2d4a9a)",
//                     }}
//                   >
//                     {loading ? "Submitting..." : "Final Submit"}
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* FORM */}
//             {!showPreview && (
//               <>
//                 {/* BASIC */}
//                 <FormSection icon="👤" title="Basic Information">
//                   <InputField
//                     label="Employee ID"
//                     required
//                     name="employeeId"
//                     value={form.employeeId}
//                     onChange={handleChange}
//                   />

//                   <InputField
//                     label="PPO No."
//                     name="ppoNo"
//                     value={form.ppoNo}
//                     onChange={handleChange}
//                   />

//                   <SelectField
//                     label="Department"
//                     required
//                     name="department"
//                     value={form.department}
//                     onChange={handleChange}
//                     options={departments}
//                   />

//                   <SelectField
//                     label="Designation"
//                     required
//                     name="designationPost"
//                     value={form.designationPost}
//                     onChange={handleChange}
//                     options={designations}
//                   />

//                   {/* Aadhaar */}
//                   <div>
//                     <InputField
//                       label="Aadhaar"
//                       name="aadhaar"
//                       value={form.aadhaar}
//                       onChange={handleChange}
//                       placeholder="12 Digit Aadhaar"
//                     />

//                     {errors.aadhaar && (
//                       <p className="text-red-500 text-xs mt-1">
//                         {errors.aadhaar}
//                       </p>
//                     )}
//                   </div>

//                   {/* PAN */}
//                   <div>
//                     <InputField
//                       label="PAN"
//                       name="pan"
//                       value={form.pan}
//                       onChange={handleChange}
//                       placeholder="ABCDE1234F"
//                     />

//                     {errors.pan && (
//                       <p className="text-red-500 text-xs mt-1">{errors.pan}</p>
//                     )}
//                   </div>

//                   <InputField
//                     label="Date of Birth"
//                     required
//                     type="date"
//                     name="dob"
//                     value={form.dob}
//                     onChange={handleChange}
//                   />

//                   <InputField
//                     label="Retirement Date"
//                     required
//                     type="date"
//                     name="retirementDate"
//                     value={form.retirementDate}
//                     onChange={handleChange}
//                   />

//                   <SelectField
//                     label="Gender"
//                     required
//                     name="gender"
//                     value={form.gender}
//                     onChange={handleChange}
//                     options={["Male", "Female", "Other"]}
//                   />

//                   <InputField
//                     label="Mobile"
//                     required
//                     name="mobile"
//                     value={form.mobile}
//                     onChange={handleChange}
//                   />
//                 </FormSection>

//                 {/* BANK */}
//                 <FormSection icon="🏦" title="Bank Details">
//                   <InputField
//                     label="Bank Name"
//                     required
//                     name="bankName"
//                     value={form.bankName}
//                     onChange={handleChange}
//                   />

//                   <InputField
//                     label="IFSC"
//                     required
//                     name="ifsc"
//                     value={form.ifsc}
//                     onChange={handleChange}
//                   />

//                   <InputField
//                     label="Account Number"
//                     required
//                     name="accountNo"
//                     value={form.accountNo}
//                     onChange={handleChange}
//                   />

//                   <SelectField
//                     label="Account Type"
//                     required
//                     name="accountType"
//                     value={form.accountType}
//                     onChange={handleChange}
//                     options={accountTypes}
//                   />
//                 </FormSection>

//                 {/* UPLOADS */}
//                 <FormSection icon="📎" title="Documents Upload">
//                   <div>
//                     <UploadField
//                       label="Photo"
//                       name="photo"
//                       onChange={handleChange}
//                       accept="image/*"
//                     />

//                     {form.photo && (
//                       <p className="text-green-600 text-xs mt-1">
//                         ✅ {form.photo.name}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <UploadField
//                       label="Signature"
//                       name="signature"
//                       onChange={handleChange}
//                       accept="image/*"
//                     />

//                     {form.signature && (
//                       <p className="text-green-600 text-xs mt-1">
//                         ✅ {form.signature.name}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <UploadField
//                       label="Salary Slip"
//                       name="salarySlip"
//                       onChange={handleChange}
//                       accept="application/pdf"
//                     />

//                     {form.salarySlip && (
//                       <p className="text-green-600 text-xs mt-1">
//                         ✅ {form.salarySlip.name}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <UploadField
//                       label="Death Certificate"
//                       name="deathCertificate"
//                       onChange={handleChange}
//                       accept="application/pdf,image/*"
//                     />

//                     {form.deathCertificate && (
//                       <p className="text-green-600 text-xs mt-1">
//                         ✅ {form.deathCertificate.name}
//                       </p>
//                     )}
//                   </div>
//                 </FormSection>

//                 {/* BUTTONS */}
//                 <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
//                   <button
//                     type="button"
//                     onClick={handleReset}
//                     className="px-5 py-2 text-sm border border-gray-300 rounded"
//                   >
//                     Reset
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => navigate("/dashboard")}
//                     className="px-5 py-2 text-sm border border-gray-300 rounded"
//                   >
//                     Cancel
//                   </button>

//                   <button
//                     type="button"
//                     onClick={handlePreview}
//                     className="px-6 py-2 text-sm text-white rounded font-medium"
//                     style={{
//                       background: "linear-gradient(135deg, #1a2a5e, #2d4a9a)",
//                     }}
//                   >
//                     Preview Application
//                   </button>
//                 </div>

//                 {/* ERROR */}
//                 {Object.keys(errors).length > 0 && (
//                   <div className="mt-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded px-3 py-2">
//                     Please fill all required fields properly.
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddApplicant;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import ActionBar from "../components/layout/ActionBar";
import Breadcrumb from "../components/ui/Breadcrumb";
import StepIndicator from "../components/ui/StepIndicator";
import FormSection from "../components/ui/FormSection";

import {
  InputField,
  SelectField,
  RadioGroup,
  UploadField,
} from "../components/forms/FormField";

import {
  departments,
  designations,
  categories,
  castes,
  accountTypes,
} from "../data/mockData";

const initialForm = {
  employeeId: "",
  ppoNo: "",

  department: "",
  designation: "",

  aadhaar: "",
  pan: "",

  dob: "",
  doj: "",
  retirementDate: "",
  dod: "",

  gender: "",
  empCategory: "",

  gradePay: "",
  lastSalary: "",

  caste: "",
  dependentName: "",

  categoryType: "Self",
  categoryPct: "100",

  notionalIncrement: "Y",
  acp: "Y",

  pfms: "",

  mobile: "",
  familyMobile: "",

  pinCode: "",
  permAddress: "",
  corrAddress: "",

  bankName: "",
  ifsc: "",
  micr: "",
  acNo: "",
  acType: "",

  photo: null,
  signature: null,
  salarySlip: null,
  deathCertificate: null,
};

const AddApplicant = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const [showPreview, setShowPreview] = useState(false);

  // =========================
  // HANDLE CHANGE
  // =========================

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // Aadhaar
    if (name === "aadhaar") {
      if (!/^\d*$/.test(value)) return;

      if (value.length > 12) return;
    }

    // Mobile
    if (name === "mobile" || name === "familyMobile") {
      if (!/^\d*$/.test(value)) return;

      if (value.length > 10) return;
    }

    // Pin code
    if (name === "pinCode") {
      if (!/^\d*$/.test(value)) return;

      if (value.length > 6) return;
    }

    // PAN uppercase
    if (name === "pan") {
      const upper = value.toUpperCase();

      if (upper.length > 10) return;

      setForm((prev) => ({
        ...prev,
        [name]: upper,
      }));

      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // =========================
  // VALIDATION
  // =========================

  const validate = () => {
    const errs = {};

    const required = [
      "employeeId",
      "department",
      "designation",
      "dob",
      "retirementDate",
      "gender",
      "empCategory",
      "gradePay",
      "mobile",
      "bankName",
      "ifsc",
      "acNo",
      "acType",
    ];

    required.forEach((field) => {
      if (!form[field]) {
        errs[field] = "Required";
      }
    });

    // Aadhaar validation
    if (form.aadhaar && !/^\d{12}$/.test(form.aadhaar)) {
      errs.aadhaar = "Aadhaar must be exactly 12 digits";
    }

    // PAN validation
    if (form.pan && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(form.pan)) {
      errs.pan = "Invalid PAN format";
    }

    // Mobile validation
    if (form.mobile && !/^\d{10}$/.test(form.mobile)) {
      errs.mobile = "Mobile number must be 10 digits";
    }

    // Family mobile validation
    if (form.familyMobile && !/^\d{10}$/.test(form.familyMobile)) {
      errs.familyMobile = "Family mobile must be 10 digits";
    }

    // PIN code validation
    if (form.pinCode && !/^\d{6}$/.test(form.pinCode)) {
      errs.pinCode = "PIN code must be 6 digits";
    }

    // IFSC validation
    if (form.ifsc && !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(form.ifsc)) {
      errs.ifsc = "Invalid IFSC code";
    }

    setErrors(errs);

    return Object.keys(errs).length === 0;
  };

  // =========================
  // RESET
  // =========================

  const handleReset = () => {
    setForm(initialForm);

    setErrors({});

    setShowPreview(false);
  };

  // =========================
  // PREVIEW
  // =========================

  const handlePreview = () => {
    if (!validate()) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    setShowPreview(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================
  // FINAL SUBMIT
  // =========================

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const fd = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          fd.append(key, value);
        }
      });

      const res = await fetch(
        "https://pension-portal-backend.onrender.com/api/pensioners",
        {
          method: "POST",
          body: fd,
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Server Error");
      }

      alert("✅ Pensioner added successfully");

      navigate("/dashboard");
    } catch (err) {
      console.error(err);

      alert("❌ " + (err.message || "Submit Failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "#f0f2f5" }}>
      <Navbar />

      <div className="px-6 py-4">
        <Breadcrumb
          items={[
            {
              label: "Home",
              link: "/dashboard",
            },
            {
              label: "Add Applicant",
            },
          ]}
        />

        <ActionBar />

        <div className="bg-white rounded shadow-sm overflow-hidden">
          {/* HEADER */}

          <div
            className="flex items-center justify-between px-6 py-4"
            style={{
              background: "linear-gradient(135deg, #1a2a5e 0%, #0f1d45 100%)",
            }}
          >
            <div>
              <div className="text-white font-bold text-lg">
                Employee Profile — Pensioner Registration
              </div>

              <div className="text-blue-300 text-xs">
                Fill all required fields
              </div>
            </div>

            <StepIndicator currentStep={showPreview ? 2 : 1} />
          </div>

          <div className="p-6">
            {/* ================= PREVIEW ================= */}

            {showPreview && (
              <div className="mb-6 border border-blue-200 bg-blue-50 rounded p-5">
                <div className="text-lg font-bold text-blue-800 mb-4">
                  Preview Application
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <b>Employee ID:</b> {form.employeeId}
                  </div>

                  <div>
                    <b>PPO No:</b> {form.ppoNo}
                  </div>

                  <div>
                    <b>Department:</b> {form.department}
                  </div>

                  <div>
                    <b>Designation:</b> {form.designation}
                  </div>

                  <div>
                    <b>Aadhaar:</b> {form.aadhaar}
                  </div>

                  <div>
                    <b>PAN:</b> {form.pan}
                  </div>

                  <div>
                    <b>Mobile:</b> {form.mobile}
                  </div>

                  <div>
                    <b>Bank:</b> {form.bankName}
                  </div>

                  <div>
                    <b>Account No:</b> {form.acNo}
                  </div>

                  <div>
                    <b>IFSC:</b> {form.ifsc}
                  </div>

                  <div>
                    <b>Photo:</b>{" "}
                    {form.photo ? form.photo.name : "Not Uploaded"}
                  </div>

                  <div>
                    <b>Signature:</b>{" "}
                    {form.signature ? form.signature.name : "Not Uploaded"}
                  </div>

                  <div>
                    <b>Salary Slip:</b>{" "}
                    {form.salarySlip ? form.salarySlip.name : "Not Uploaded"}
                  </div>

                  <div>
                    <b>Death Certificate:</b>{" "}
                    {form.deathCertificate
                      ? form.deathCertificate.name
                      : "Not Uploaded"}
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => setShowPreview(false)}
                    className="px-5 py-2 border border-gray-300 rounded text-sm"
                  >
                    Edit Form
                  </button>

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="px-6 py-2 text-white rounded text-sm"
                    style={{
                      background: "linear-gradient(135deg, #1a2a5e, #2d4a9a)",
                    }}
                  >
                    {loading ? "Submitting..." : "Final Submit"}
                  </button>
                </div>
              </div>
            )}

            {/* ================= FORM ================= */}

            {!showPreview && (
              <>
                {/* BASIC INFO */}

                <FormSection icon="👤" title="Basic Information">
                  <div>
                    <InputField
                      label="Employee ID"
                      required
                      name="employeeId"
                      value={form.employeeId}
                      onChange={handleChange}
                    />

                    {errors.employeeId && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.employeeId}
                      </p>
                    )}
                  </div>

                  <InputField
                    label="PPO No."
                    name="ppoNo"
                    value={form.ppoNo}
                    onChange={handleChange}
                  />

                  <div>
                    <SelectField
                      label="Department"
                      required
                      name="department"
                      value={form.department}
                      onChange={handleChange}
                      options={departments}
                    />

                    {errors.department && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.department}
                      </p>
                    )}
                  </div>

                  <div>
                    <SelectField
                      label="Designation"
                      required
                      name="designation"
                      value={form.designation}
                      onChange={handleChange}
                      options={designations}
                    />

                    {errors.designation && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.designation}
                      </p>
                    )}
                  </div>

                  <div>
                    <InputField
                      label="Aadhaar"
                      name="aadhaar"
                      value={form.aadhaar}
                      onChange={handleChange}
                      placeholder="12 digit Aadhaar"
                    />

                    {errors.aadhaar && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.aadhaar}
                      </p>
                    )}
                  </div>

                  <div>
                    <InputField
                      label="PAN"
                      name="pan"
                      value={form.pan}
                      onChange={handleChange}
                      placeholder="ABCDE1234F"
                    />

                    {errors.pan && (
                      <p className="text-red-500 text-xs mt-1">{errors.pan}</p>
                    )}
                  </div>

                  <div>
                    <InputField
                      type="date"
                      label="Date of Birth"
                      required
                      name="dob"
                      value={form.dob}
                      onChange={handleChange}
                    />

                    {errors.dob && (
                      <p className="text-red-500 text-xs mt-1">{errors.dob}</p>
                    )}
                  </div>

                  <InputField
                    type="date"
                    label="Date of Joining"
                    name="doj"
                    value={form.doj}
                    onChange={handleChange}
                  />

                  <div>
                    <InputField
                      type="date"
                      label="Retirement Date"
                      required
                      name="retirementDate"
                      value={form.retirementDate}
                      onChange={handleChange}
                    />

                    {errors.retirementDate && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.retirementDate}
                      </p>
                    )}
                  </div>

                  <InputField
                    type="date"
                    label="Date of Death"
                    name="dod"
                    value={form.dod}
                    onChange={handleChange}
                  />

                  <div>
                    <SelectField
                      label="Gender"
                      required
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                      options={["Male", "Female", "Other"]}
                    />

                    {errors.gender && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.gender}
                      </p>
                    )}
                  </div>

                  <div>
                    <SelectField
                      label="Employee Category"
                      required
                      name="empCategory"
                      value={form.empCategory}
                      onChange={handleChange}
                      options={categories}
                    />

                    {errors.empCategory && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.empCategory}
                      </p>
                    )}
                  </div>

                  <div>
                    <InputField
                      label="Grade Pay"
                      required
                      name="gradePay"
                      value={form.gradePay}
                      onChange={handleChange}
                    />

                    {errors.gradePay && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.gradePay}
                      </p>
                    )}
                  </div>

                  <InputField
                    label="Last Salary"
                    name="lastSalary"
                    value={form.lastSalary}
                    onChange={handleChange}
                  />

                  <SelectField
                    label="Caste"
                    name="caste"
                    value={form.caste}
                    onChange={handleChange}
                    options={castes}
                  />

                  <InputField
                    label="Dependent Name"
                    name="dependentName"
                    value={form.dependentName}
                    onChange={handleChange}
                  />
                </FormSection>

                {/* PENSION CATEGORY */}

                <FormSection icon="📂" title="Pension Category">
                  <RadioGroup
                    label="Category Type"
                    name="categoryType"
                    value={form.categoryType}
                    onChange={handleChange}
                    options={["Self", "Family", "Disability", "Other"]}
                  />

                  <RadioGroup
                    label="Category %"
                    name="categoryPct"
                    value={form.categoryPct}
                    onChange={handleChange}
                    options={["100", "90", "75"]}
                  />

                  <RadioGroup
                    label="ACP"
                    name="acp"
                    value={form.acp}
                    onChange={handleChange}
                    options={["Y", "N"]}
                  />

                  <RadioGroup
                    label="Notional Increment"
                    name="notionalIncrement"
                    value={form.notionalIncrement}
                    onChange={handleChange}
                    options={["Y", "N"]}
                  />

                  <InputField
                    label="PFMS"
                    name="pfms"
                    value={form.pfms}
                    onChange={handleChange}
                  />
                </FormSection>

                {/* ADDRESS */}

                <FormSection icon="📍" title="Contact & Address">
                  <div>
                    <InputField
                      label="Mobile"
                      required
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                    />

                    {errors.mobile && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.mobile}
                      </p>
                    )}
                  </div>

                  <div>
                    <InputField
                      label="Family Mobile"
                      name="familyMobile"
                      value={form.familyMobile}
                      onChange={handleChange}
                    />

                    {errors.familyMobile && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.familyMobile}
                      </p>
                    )}
                  </div>

                  <div>
                    <InputField
                      label="PIN Code"
                      name="pinCode"
                      value={form.pinCode}
                      onChange={handleChange}
                    />

                    {errors.pinCode && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.pinCode}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Permanent Address
                    </label>

                    <textarea
                      rows={3}
                      name="permAddress"
                      value={form.permAddress}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Correspondence Address
                    </label>

                    <textarea
                      rows={3}
                      name="corrAddress"
                      value={form.corrAddress}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                    />
                  </div>
                </FormSection>

                {/* BANK */}

                <FormSection icon="🏦" title="Bank Details">
                  <div>
                    <InputField
                      label="Bank Name"
                      required
                      name="bankName"
                      value={form.bankName}
                      onChange={handleChange}
                    />

                    {errors.bankName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.bankName}
                      </p>
                    )}
                  </div>

                  <div>
                    <InputField
                      label="IFSC"
                      required
                      name="ifsc"
                      value={form.ifsc}
                      onChange={handleChange}
                    />

                    {errors.ifsc && (
                      <p className="text-red-500 text-xs mt-1">{errors.ifsc}</p>
                    )}
                  </div>

                  <InputField
                    label="MICR"
                    name="micr"
                    value={form.micr}
                    onChange={handleChange}
                  />

                  <div>
                    <InputField
                      label="Account Number"
                      required
                      name="acNo"
                      value={form.acNo}
                      onChange={handleChange}
                    />

                    {errors.acNo && (
                      <p className="text-red-500 text-xs mt-1">{errors.acNo}</p>
                    )}
                  </div>

                  <div>
                    <SelectField
                      label="Account Type"
                      required
                      name="acType"
                      value={form.acType}
                      onChange={handleChange}
                      options={accountTypes}
                    />

                    {errors.acType && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.acType}
                      </p>
                    )}
                  </div>
                </FormSection>

                {/* UPLOAD */}

                <FormSection icon="📎" title="Documents Upload">
                  <div>
                    <UploadField
                      label="Photo"
                      name="photo"
                      onChange={handleChange}
                      accept="image/*"
                    />

                    {form.photo && (
                      <p className="text-green-600 text-xs mt-1">
                        ✅ {form.photo.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <UploadField
                      label="Signature"
                      name="signature"
                      onChange={handleChange}
                      accept="image/*"
                    />

                    {form.signature && (
                      <p className="text-green-600 text-xs mt-1">
                        ✅ {form.signature.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <UploadField
                      label="Salary Slip"
                      name="salarySlip"
                      onChange={handleChange}
                      accept="application/pdf"
                    />

                    {form.salarySlip && (
                      <p className="text-green-600 text-xs mt-1">
                        ✅ {form.salarySlip.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <UploadField
                      label="Death Certificate"
                      name="deathCertificate"
                      onChange={handleChange}
                      accept="application/pdf,image/*"
                    />

                    {form.deathCertificate && (
                      <p className="text-green-600 text-xs mt-1">
                        ✅ {form.deathCertificate.name}
                      </p>
                    )}
                  </div>
                </FormSection>

                {/* BUTTONS */}

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2 text-sm border border-gray-300 rounded"
                  >
                    Reset
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate("/dashboard")}
                    className="px-5 py-2 text-sm border border-gray-300 rounded"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handlePreview}
                    className="px-6 py-2 text-sm text-white rounded font-medium"
                    style={{
                      background: "linear-gradient(135deg, #1a2a5e, #2d4a9a)",
                    }}
                  >
                    Preview Application
                  </button>
                </div>

                {Object.keys(errors).length > 0 && (
                  <div className="mt-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded px-3 py-2">
                    Please fill all required fields properly.
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddApplicant;