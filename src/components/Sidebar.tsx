import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  // State to track if the sidebar is open
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Invisible hover area: only visible (active) when sidebar is closed */}
      {!isOpen && (
        <div
          className="fixed left-0 top-0 h-screen w-[3%] z-10"
          onMouseEnter={() => setIsOpen(true)}
        ></div>
      )}

      {/* Sidebar container */}
      <div
        className={`fixed flex flex-col text-left left-0 top-0 h-screen w-1/7 shadow-lg shadow-blue-500/90 transition-transform duration-300 z-20 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col pt-5 pl-7 space-y-4">
          {/* Toggle Button */}
          <div>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 rounded-full p-2 transition-shadow duration-200 hover:shadow-[0_0_10px_rgba(59,130,246,0.9)]"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-4">
            <ul className="space-y-4">
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/myproject">My Project</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
