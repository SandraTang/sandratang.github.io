import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar({ alwaysVisible = false }: { alwaysVisible?: boolean }) {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (alwaysVisible) {
      setShowNav(true);
      return;
    }

    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.85);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [alwaysVisible]);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-30 border-b border-black/10 bg-white transition-opacity duration-500 ${
        showNav ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="px-6 py-3 sm:px-8">
        <Link to="/" className="inline-flex items-center gap-3">
          <img
            src="/personal-logo/logo-black.png"
            alt="Sandra Tang logo"
            className="h-8 w-8 object-contain"
          />
          <p className="text-base font-medium">Sandra Tang</p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
