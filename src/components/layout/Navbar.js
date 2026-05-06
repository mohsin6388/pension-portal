import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="w-full" style={{ background: 'linear-gradient(135deg, #1a2a5e 0%, #0f1d45 100%)' }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center overflow-hidden border-2 border-amber-300">
            <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
              <circle cx="24" cy="24" r="22" fill="#b45309" />
              <circle cx="24" cy="24" r="18" fill="#d97706" />
              <text x="24" y="30" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">KMC</text>
            </svg>
          </div>
          <div>
            <div className="text-amber-400 font-bold text-sm" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
              कानपुर नगर निगम
            </div>
            <div className="text-blue-200 text-xs">Kanpur Municipal Corporation</div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center">
          <div className="text-white font-bold text-xl tracking-widest">PENSIONER PORTAL</div>
          <div className="text-blue-300 text-xs tracking-wider">Department of Citizen Services</div>
        </div>

        {/* User info */}
        <div className="text-right">
          <div className="text-amber-400 font-semibold text-sm">Admin User</div>
          <div className="text-blue-200 text-xs">Kanpur Municipal Corporation</div>
          <button
            onClick={handleLogout}
            className="text-amber-400 text-xs hover:text-white transition-colors mt-1 flex items-center gap-1 ml-auto"
          >
            <span>⌃</span> Logout
          </button>
        </div>
      </div>

      {/* Nav links */}
      <div className="px-6 border-t border-blue-700">
        <nav className="flex gap-0">
          <Link
            to="/dashboard"
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              location.pathname === '/dashboard'
                ? 'text-amber-400 border-b-2 border-amber-400'
                : 'text-blue-200 hover:text-white'
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/applicants"
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              location.pathname.startsWith('/applicant')
                ? 'text-amber-400 border-b-2 border-amber-400'
                : 'text-blue-200 hover:text-white'
            }`}
          >
            Applicants
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
