import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import exitIcon from "../assets/exit.png"
import logo from "../assets/favicon.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/normal", label: "Home" },
    { path: "/normal/projects", label: "Projects" },
    { path: "/normal/experience", label: "Experience" },
    { path: "/normal/skills", label: "Skills" },
    { path: "/normal/contact", label: "Contact" },
    { path: "/normal/about", label: "About" },
  ];

  const linkClass = ({ isActive }) =>
    `px-4 py-2 text-sm font-medium uppercase tracking-wider rounded-lg transition-all duration-300 border ${
      isActive
        ? 'bg-[#39ff14]/15 border-[#39ff14] text-[#39ff14] shadow-[0_0_15px_rgba(57,255,20,0.4)]'
        : 'bg-transparent border-transparent text-white hover:bg-white/5 hover:border-[#39ff14] hover:text-[#39ff14] hover:shadow-[0_0_15px_rgba(57,255,20,0.3)]'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `text-left px-4 py-2 text-sm font-medium uppercase tracking-wider rounded-lg transition-all duration-300 border ${
      isActive
        ? "bg-[#39ff14]/15 border-[#39ff14] text-[#39ff14] shadow-[0_0_15px_rgba(57,255,20,0.4)]"
        : "bg-transparent border-transparent text-white hover:bg-white/5 hover:border-[#39ff14] hover:text-[#39ff14]"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-black/50 backdrop-blur-md border-b border-white/15 px-6 py-4 transition-all duration-300">
      <div className="w-full mx-auto flex items-center gap-3">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="shrink-0 rounded-md bg-amber-100 p-0.5"
          aria-label="Return to experience selection"
        >
          <img src={exitIcon} alt="" className="w-8 cursor-pointer" />
        </button>

        {/* Brand / Logo */}
        <NavLink
          to="/normal"
          end
          className="flex shrink-0 items-center gap-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="turtle"
            className="max-w-8 h-auto object-contain drop-shadow-[0_0_8px_#39ff14] transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-3xl font-bold italic tracking-wide text-white group-hover:text-[#39ff14] transition-colors duration-300">
            Aarav
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={linkClass}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="ml-auto md:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6 fill-current text-[#39ff14]" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 011.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-2 bg-black/80 backdrop-blur-lg rounded-xl p-4 animate-fade-in">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setIsMobileMenuOpen(false)}
              className={mobileLinkClass}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
