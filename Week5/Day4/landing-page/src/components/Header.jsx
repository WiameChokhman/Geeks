
import { Rocket } from "lucide-react";

function Header() {
  return (
    <header className="w-full">
      <nav className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-5">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Rocket size={38} className="text-red-500" />
          <h2 className="text-3xl font-bold">Company</h2>
        </div>

        {/* Navigation */}
        <ul className="flex gap-8 text-lg">
          <li>
            <a href="#home" className="hover:text-red-500">
              Home
            </a>
          </li>

          <li>
            <a href="#features" className="hover:text-red-500">
              Features
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-red-500">
              Contact
            </a>
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default Header;
