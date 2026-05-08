import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Lock, Building2, ChevronDown, RefreshCw } from "lucide-react";

const generateCaptcha = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
};

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '', captcha: '' });
  const [captchaText, setCaptchaText] = useState(generateCaptcha());
  const [error, setError] = useState('');
  const [lang, setLang] = useState('hi');
  const [departments, setDepartments] = useState([
    { id: 1, name: "Finance" },
    { id: 2, name: "HR" },
    { id: 3, name: "Engineering" },
  ]);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      setError('Please enter username and password.');
      return;
    }
    if (form.captcha.toUpperCase() !== captchaText) {
      setError('Incorrect captcha. Please try again.');
      setCaptchaText(generateCaptcha());
      setForm(f => ({ ...f, captcha: '' }));
      return;
    }
    const ok = login(form.username, form.password);
    if (ok) navigate('/dashboard');
    else setError('Invalid credentials.');
  };

  const isHindi = lang === 'hi';

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#f0f2f5" }}
    >
      {/* Gov header */}
      <div className="bg-white border-b border-gray-200 px-6 py-2 flex items-center justify-between text-xs text-gray-600">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-blue-800 flex items-center justify-center">
            <span className="text-white text-xs">🇮🇳</span>
          </div>
          <span className="font-medium">भारत सरकार | Government of India</span>
        </div>
        <div className="flex gap-4 text-blue-700">
          <button className="hover:underline">Skip to Main Content</button>
          <button className="hover:underline">Screen Reader</button>
          <button className="hover:underline font-bold">A-</button>
          <button className="hover:underline font-bold">A</button>
          <button className="hover:underline font-bold">A+</button>
        </div>
      </div>

      {/* Org header */}
      <div className="bg-white border-b-2 border-orange-400 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://kmc.up.nic.in/images/logo.png"
            className="w-[300px]"
            alt="##"
          />
          {/* <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center border-4 border-amber-300">
            <svg viewBox="0 0 64 64" className="w-14 h-14">
              <circle cx="32" cy="32" r="30" fill="#b45309" />
              <circle cx="32" cy="32" r="25" fill="#d97706" />
              <text x="32" y="38" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">KMC</text>
            </svg>
          </div> */}
          {/* <div>
            <div
              className="text-xl font-bold text-gray-800"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
            >
              कानपुर नगर निगम
            </div>
            <div className="text-sm text-gray-500">
              Kanpur Municipal Corporation
            </div>
          </div> */}
        </div>
        <div className="text-center pr-16">
          <div
            className="text-2xl font-bold text-gray-800"
            style={{ fontFamily: "'Arial',Noto Sans Devanagari', sans-serif" }}
          >
            {isHindi ? "पेंशन सेवा पोर्टल" : "Pension Service Portal"}
          </div>
          <div
            className="text-sm text-gray-500"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            {isHindi ? "नागरिक सेवा विभाग" : "Department of Citizen Services"}
          </div>
        </div>
        <button
          onClick={() => setLang((l) => (l === "hi" ? "en" : "hi"))}
          className="flex items-center gap-2 px-4 py-2 rounded text-white text-sm font-medium"
          style={{ background: "#1a2a5e" }}
        >
          <span>🌐</span> {isHindi ? "EN" : "हि"}
        </button>
      </div>

      {/* Main content */}
      <div className="flex flex-1">
        {/* Left: image placeholder */}
        <div
          className="w-[60%] relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1a2a5e 0%, #2d4a9a 100%)",
          }}
        >
          {/* Left Side of Login Page */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-8">
              <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6 border-4 border-white/30">
                <span className="text-6xl">🏛️</span>
              </div>
              <h2 className="text-3xl font-bold mb-3">
                Municipal Corporation Portal
              </h2>
              <p className="text-blue-200 text-lg">
                Department of Citizen Services
              </p>
              <p className="text-blue-300 text-sm mt-4 max-w-sm mx-auto">
                Manage pension applications, approvals, and records for Kanpur
                Municipal Corporation employees.
              </p>
              <div className="flex justify-center gap-6 mt-8 text-blue-200 text-sm">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div>Pensioners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div>Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div>Digital</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: login form */}
        <div className="w-[40%] flex items-center justify-center p-16 bg-white shadow-2xl">
          <div className="w-full">
            <div
              className="rounded-lg p-6 border border-blue-100"
              style={{ background: "#f8f9ff" }}
            >
              <h3
                className="text-xl font-bold text-center mb-1"
                style={{
                  color: "#1a2a5e",
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                }}
              >
                {isHindi ? "ऑपरेटर लॉगिन" : "Operator Login"}
              </h3>
              <p
                className="text-center text-gray-500 text-xs mb-5"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              >
                {isHindi
                  ? "अपनी पंजीकृत जानकारी से साइन इन करें"
                  : "Sign in with your registered credentials"}
              </p>
              <div
                className="h-0.5 w-24 mx-auto mb-5"
                style={{
                  background: "linear-gradient(90deg, #f97316, #1a2a5e)",
                }}
              />

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-xs rounded px-3 py-2 mb-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className="block text-xs font-medium text-gray-600 mb-1"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                  >
                    {isHindi ? "ऑपरेटर आईडी" : "Opeator ID"}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <User size={18} />
                    </span>
                    <input
                      type="text"
                      name="username"
                      value={form.username}
                      onChange={handleChange}
                      placeholder={
                        isHindi
                          ? "अपना ऑपरेटर आईडी दर्ज करें"
                          : "Enter Your Operator ID"
                      }
                      className="w-full border border-gray-300 rounded px-3 py-2 pl-9 text-sm focus:outline-none focus:border-blue-500"
                      style={{
                        fontFamily: "'Noto Sans Devanagari', sans-serif",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-medium text-gray-600 mb-1"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                  >
                    {isHindi ? "पासवर्ड" : "Password"}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <Lock size={18} />
                    </span>
                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder={
                        isHindi
                          ? "अपना पासवर्ड दर्ज करें"
                          : "Enter Your Password"
                      }
                      className="w-full border border-gray-300 rounded px-3 py-2 pl-9 text-sm focus:outline-none focus:border-blue-500"
                      style={{
                        fontFamily: "'Noto Sans Devanagari', sans-serif",
                      }}
                    />
                  </div>
                </div>

                {/* Select Departments  */}

                <div>
                  <label
                    className="block text-xs font-medium text-gray-600 mb-1"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                  >
                    {isHindi ? "विभाग चुनें" : "Select Department"}{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    {/* Left Icon */}
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                      <Building2 size={18} />
                    </span>

                    {/* Dropdown */}
                    <select
                      name="department"
                      value={form.department}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 pl-9 pr-10 text-sm focus:outline-none focus:border-blue-500 appearance-none bg-white"
                      style={{
                        fontFamily: "'Noto Sans Devanagari', sans-serif",
                      }}
                    >
                      <option value="">
                        {isHindi ? "विभाग चुनें" : "Select Department"}
                      </option>

                      {departments.map((dept) => (
                        <option key={dept.id} value={dept.name}>
                          {dept.name}
                        </option>
                      ))}
                    </select>

                    {/* Right Arrow */}
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <ChevronDown size={18} />
                    </span>
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-medium text-gray-600 mb-1"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                  >
                    {isHindi ? "कैप्चा दर्ज करें" : "Enter Captcha"}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2 mb-2">
                    <div
                      className="flex-1 flex items-center justify-center rounded border border-dashed border-gray-400 py-2 tracking-[0.5em] font-mono font-bold text-lg select-none"
                      style={{
                        background: "#e8e8e8",
                        letterSpacing: "0.4em",
                        fontStyle: "italic",
                        color: "#333",
                      }}
                    >
                      {captchaText}
                    </div>
                    <button
                      type="button"
                      onClick={() => setCaptchaText(generateCaptcha())}
                      className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 text-lg text-gray-500"
                      title="Refresh captcha"
                    >
                      <RefreshCw size={18} />
                    </button>
                  </div>
                  <input
                    type="text"
                    name="captcha"
                    value={form.captcha}
                    onChange={handleChange}
                    placeholder={
                      isHindi
                        ? "ऊपर दिखाए गए अक्षर लिखें"
                        : "Enter characters shown above"
                    }
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                    maxLength={6}
                  />
                </div>

                <div className="text-right">
                  <button
                    type="button"
                    className="text-xs text-blue-600 hover:underline"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                  >
                    {isHindi ? "पासवर्ड भूल गए?" : "Forgot Password?"}
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-white font-semibold rounded text-sm flex items-center justify-center gap-2 hover:opacity-90 transition"
                  style={{
                    background: "linear-gradient(135deg, #1a2a5e, #2d4a9a)",
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                  }}
                >
                  {isHindi ? "साइन इन करें" : "Sign In"}
                </button>
              </form>

              {/* <p className="text-center text-xs text-gray-400 mt-4">
                Default: any username + any password + correct captcha
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
