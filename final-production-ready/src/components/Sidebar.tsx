import { Home, FileText, Briefcase, GraduationCap, Mail, Github, Linkedin, Phone } from "lucide-react";
import { NavLink } from "./NavLink";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Sidebar = () => {
  const navItems = [
    { path: "/", icon: Home, label: "About" },
    { path: "/resume", icon: FileText, label: "Resume" },
    { path: "/projects", icon: Briefcase, label: "Projects" },
    { path: "/academics", icon: GraduationCap, label: "Academics" },
    { path: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-sidebar border-r border-sidebar-border flex flex-col z-50">
      {/* Profile Section */}
      <div className="p-8 text-center border-b border-sidebar-border">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/20">
          <img 
            src={profilePhoto} 
            alt="Kunguma Balaji Nagarajan" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold text-sidebar-foreground mb-1">
          Kunguma Balaji Nagarajan
        </h2>
        <p className="text-sm text-primary font-medium">
          AI Engineer & Researcher
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6 overflow-y-auto">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200"
                activeClassName="bg-sidebar-accent text-sidebar-foreground font-medium"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact Info */}
      <div className="p-6 border-t border-sidebar-border space-y-3">
        <a
          href="mailto:kungumabalaji1616@gmail.com"
          className="flex items-center gap-3 text-sm text-sidebar-foreground/70 hover:text-primary transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span className="truncate">kungumabalaji1616@gmail.com</span>
        </a>
        <a
          href="tel:+447424903788"
          className="flex items-center gap-3 text-sm text-sidebar-foreground/70 hover:text-primary transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span>+44 7424903788</span>
        </a>
        <div className="flex gap-4 pt-2">
          <a
            href="https://linkedin.com/in/kungumabalaji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sidebar-foreground/70 hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/kungumabalaji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sidebar-foreground/70 hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
