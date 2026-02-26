import { NavLink } from "react-router-dom";
import { Home, User, Mail, FolderGit2, Code2 } from "lucide-react";

 const Navbar = () =>{
  const navLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/about", label: "About", icon: User },
    { to: "/projects", label: "Projects", icon: FolderGit2 },
    { to: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="shrink-0 flex items-center gap-2">
            <div className="px-3 h-8 bg-linear-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
              <h1 className="text-xl font-bold text-slate-900">
               My Portfolio
            </h1>
            </div>
           
          </div>

          
          <div className="flex space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"} 
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-emerald-600 bg-emerald-50"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </NavLink>
              );
            })}
          </div>

        </div>
      </div>
    </nav>
  );
}
export default Navbar;