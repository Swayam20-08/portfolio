import { useState } from 'react';

function Navbar({ links, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="navbar-shell">
      <nav className="navbar container">
        <button
          className={`menu-toggle ${isOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setIsOpen((state) => !state)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.id}>
              <button
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => handleClick(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
