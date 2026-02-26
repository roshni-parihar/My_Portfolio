import { Link, useLocation } from "react-router-dom";
import { Home, User, Mail, FolderGit2, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkStyle = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition ${
      isActive(path)
        ? "text-emerald-600 bg-emerald-50"
        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <h1 className="text-lg font-bold text-slate-900">
            My Portfolio
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            <Link to="/" className={linkStyle("/")}>
              <Home className="w-4 h-4" />
              Home
            </Link>

            <Link to="/about" className={linkStyle("/about")}>
              <User className="w-4 h-4" />
              About
            </Link>

            <Link to="/projects" className={linkStyle("/projects")}>
              <FolderGit2 className="w-4 h-4" />
              Projects
            </Link>

            <Link to="/contact" className={linkStyle("/contact")}>
              <Mail className="w-4 h-4" />
              Contact
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)} className={linkStyle("/")}>
              <Home className="w-4 h-4" />
              Home
            </Link>

            <Link to="/about" onClick={() => setIsOpen(false)} className={linkStyle("/about")}>
              <User className="w-4 h-4" />
              About
            </Link>

            <Link to="/projects" onClick={() => setIsOpen(false)} className={linkStyle("/projects")}>
              <FolderGit2 className="w-4 h-4" />
              Projects
            </Link>

            <Link to="/contact" onClick={() => setIsOpen(false)} className={linkStyle("/contact")}>
              <Mail className="w-4 h-4" />
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;